pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorageUpgradeable.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/ECDSA.sol";
import "./utils/MerkleProof.sol";

// Deriv Collection 
// NFT Derivatives (for example, uwucrew derivatives by @6MAKER) were in mind
// when designing Deriv. 
// Deriv splits derivative art per contract relating to the source NFT of the derivative art. 
// As part of the split and shared contracts, a portion of the purchase goes towards the NFT teams proper benefactor. 
// Charging a fee on derivatives may seem controversial, but we believe NFT teams (uwu Labs) should be aligned towards
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
// - Arbitrary per NFT pricing: NFTs in each collection can be easily priced arbitarily from eachother. 
// Each NFTs price is published as part of the data root. Some derivatives may be have more effort than others, so this is an important feature. 
//
// - Operators: Arbitrary executors allow for flexible and powerful designs to be built on top of Deriv for various use cases. 
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
  address public royaltyReceiver;

  mapping(bytes32 => bool) public mintedURI;

  event CollectionFeeUpdate(uint256 newFee, address receiver);
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
  
  function setCollectionFeeAndReceiver(uint256 _newFee, address _newReceiver) external {
    require(
      msg.sender == OwnableUpgradeable(derivativeSourceNFT).owner() ||
      msg.sender == OwnableUpgradeable(derivFactory).owner(), 
      "not collection owner"
    );
    collectionFee = _newFee;
    royaltyReceiver = _newReceiver;
    emit CollectionFeeUpdate(_newFee, _newReceiver);
  }

// maybe move as much storage to contract data as possible 

  // function merkleMint(uint256 operator, address sourceArtist, string memory _tokenURI, address _receiver, bytes32[] memory merkleProof) external payable returns (uint256) {
  //   require(!mintedURI[keccak256(abi.encodePacked(_tokenURI))], "Already purchased"); // replace with uri check
  //   require(msg.sender == operator, "not indicated operator");

  //   // Verify truth with tree.
  //   {
  //     bytes32 _dataRoot = collectionDataRoot[collectionId];
  //     require(_dataRoot != bytes32(0), "Data Root not initialized");

  //     bytes32 node = keccak256(abi.encodePacked(operator, derivativeSourceNFT, msg.value, _receiver, _tokenURI));
  //     require(MerkleProof.verify(merkleProof, _dataRoot, node), 'MerkleDistributor: Invalid proof.');
  //   }

  //   // Handle payment.
  //   splitPayment(sourceArtist, msg.value);

  //   uint256 _nftIndex = nftIndex;
  //   ++nftIndex;

  //   _mint(sourceArtist, _receiver, nftIndex);
  //   _setTokenURI(_nftIndex, _tokenURI);
  //   mintedURI[keccak256(abi.encodePacked(_tokenURI))] = true;

  //   // Add more to this.
  //   emit Mint(_nftIndex, _receiver, sourceArtist);

  //   return _nftIndex;
  // }


  function signatureMint(uint256 operator, address sourceArtist, string memory _tokenURI, address _receiver, bytes memory signature) external payable returns (uint256) {
    require(!mintedURI[keccak256(abi.encodePacked(_tokenURI))], "Already purchased"); // replace with uri check
    require(msg.sender == operator, "not indicated operator");

    // Verify signature.
    {
      bytes32 node = ECDSA.toTypedDataHash("", abi.encodePacked(operator, derivativeSourceNFT, msg.value, _receiver, _tokenURI));
      require(sourceArtist == ECDSA.recover(node, signature), 'Signature not made by artist');
    }

    // Handle payment.
    splitPayment(sourceArtist, msg.value);

    uint256 _nftIndex = nftIndex;
    ++nftIndex;
    _mint(sourceArtist, _receiver, nftIndex);
    _setTokenURI(_nftIndex, _tokenURI);
    mintedURI[keccak256(abi.encodePacked(_tokenURI))] = true;

    // Add more to this.
    emit Mint(_nftIndex, _receiver, sourceArtist);

    return _nftIndex;
  }

  function splitPayment(address _sourceArtist, uint256 _value) internal {
    // Admin fee for uwu Labs.
    uint256 _uwulabsFee = derivFactory.adminFee();
    payable(owner()).sendValue((_uwulabsFee * _value)/1 gwei);

    // Collection fee: variable decided by collection.
    uint256 _collectionFee = collectionFee;
    if (_collectionFee > 0) {
      payable(royaltyReceiver).sendValue((_collectionFee * _value)/1 gwei);
    }

    // Rest goes to artist of course.
    payable(_sourceArtist).sendValue(((1 gwei - _collectionFee - _uwulabsFee)*_value)/1 gwei);
  }
  // function _baseURI() internal view virtual override returns (string memory) {
  //   return ""; // get base URI from factory.
  // }
}
