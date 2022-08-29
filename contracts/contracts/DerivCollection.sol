pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorageUpgradeable.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/MerkleProof.sol";

// uwudrop Dynamic Collection 
// This is an uwudrop collection contract aimed at dynamicly sized collections.
// All gas costs are directed towards the collecter whereever possible.
//
// Derivative collections from artists (for example, uwucrew derivatives by @6MAKER) were in mind
// when designing uwudrop dynamic collections. uwudrop allows artists to declare what the source NFT collection is, 
// for a portion of the purchase to go towards the NFT teams proper benefactor. 
// Charging a fee on derivatives may seem controversial, but we believe NFT teams (uwulabs) should be aligned towards
// the success of the artists that create and collaborate with the IP and concepts of the originating NFT.
// 
// Features:
// - Lazy Minting: Collectors pay gas to mint the NFT and assign the token uri on chain. By using a merkle tree,
//  we offload all the data on chain to whoever submits the proof when they purchase said NFT.
//  However, the artist still needs to pay gas to deploy the collection and update the tree if any NFTs are added.
// (Gas usage may be sponsored by uwulabs)
//
// - Private Sales: Artists can mark which NFTs are only for sale to certain people. This is a useful feature for derivative oriented collections.
// 
// - Safely extendable collections: Artists can extend and add more supply to the collection safely without interfering with the other NFTs.
// 
// - Arbitrary per NFT pricing: NFTs in each collection can be easily priced arbitarily from eachother. 
// Each NFTs price is published as part of the data root. Some derivatives may be have more effort than others, so this is an important feature. 
//
// - Finalizing: In case an artist wants to make it clear that a collection can no longer be changed, they can mark the collection as finalized.
// This locks the implementation, so no further changes can be made. (un-purchased NFTs can still be purchased even after finalizing) 
// 
// - Admin friendly: In case an artist is unable to access their account or does not wish to spend the gas required, 
// an adiministrator can step in and perform the actions for them. 
// 
// Features to add?
// On-chain commission requests? Maybe just have an event function people can use to request. Manage everything else off chain, or just off chain entirely.
contract DerivCollection is OwnableUpgradeable, ERC721URIStorageUpgradeable {
  using Address for address payable;
  
  bytes32 public nftDataTreeRoot;
  uint256 nftIndex;

  address public derivFactory;
  address public derivativeSourceNFT;
  uint256 public collectionFee;

  event CollectionUpdate(uint256 newMaxSupply, bytes32 newNFTDataRoot);
  event Mint(uint256 id, string newTokenURI, uint256 price, address receiver, address txSender);

  function __DerivCollection_init(string memory _name, string memory _symbol, address _derivativeSourceNFT) external {
    __Ownable_init();
    __ERC721SimpleUpgradeable_init(_name, _symbol);
    derivFactory = msg.sender;
    derivativeSourceNFT = _derivativeSourceNFT;
  }

  function version() external pure returns (string memory) {
    return "v1.0.0";
  }

  // consider global artist tree but using proxy to allow easy transfer of management if compromised
  function update(uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external onlyOwner {
    require(!finalized, "Finalized");
    nftDataTreeRoot = newNFTDataTreeRoot;
    emit CollectionUpdate(newMaxSupply, newNFTDataTreeRoot);
  }
  
  // Admin transfer function in case the artist's account is compromised for some reason.
  function adminOwnerChange(address newOwner) external {
    require(msg.sender == uwudropFactory, "Not factory");
    transferOwnership(newOwner);
  }

// maybe move as much storage to contract data as possible 
  // store id per artist in factory/contract and iterate with each publish 

  function nftMint(uint256 operator, address sourceArtist, bool privateSale, address _receiver, bytes32[] memory merkleProof) external payable {
    uint256 _nftId = collectionId*1e6 | id; // collectionId*1e6 | collectionIndex;
    require(_exists(_nftId), "Already purchased");
    require(id < 1e6, "Above max");

    {
      bytes32 _dataRoot = collectionDataRoot[collectionId];
      require(_dataRoot != bytes32(0), "Data Root not initialized");

      address receiver = address(0);
      if (privateSale) {
        receiver = _receiver;
      }
      bytes32 node = keccak256(abi.encodePacked(collectionId, id, msg.value, receiver));
      require(MerkleProof.verify(merkleProof, _dataRoot, node), 'MerkleDistributor: Invalid proof.');
    }

    // uwulabs fee: 1%.
    uint256 _uwulabsFee = uwulabsFee;
    payable(owner()).sendValue((_uwulabsFee * msg.value)/1 gwei);

    // derivative source fee: variable.
    address _derivativeSourceNFT = derivativeSourceNFT[collectionId];
    uint256 derivFee;
    if (_derivativeSourceNFT != address(0)) {
      derivFee = derivativeFee[_derivativeSourceNFT];
      if (derivFee > 0) {
        payable(derivativeSourceReceiver[_derivativeSourceNFT]).sendValue((derivFee * msg.value)/1 gwei);
      }
    }

    // Rest goes to artist.
    payable(sourceArtist).sendValue(((1 gwei - derivFee - _uwulabsFee)*msg.value)/1 gwei);

    _mint(sourceArtist, _receiver, _nftId);

    // Add more to this.
    emit Mint(_nftId, _receiver, sourceArtist);
  }


  function _baseURI() internal view virtual override returns (string memory) {
    return ""; // get base URI from factory.
  }
}
