pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorageUpgradeable.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/MerkleProof.sol";

contract uwudropShared is OwnableUpgradeable, ERC721URIStorageUpgradeable {
  using Address for address payable;
  
  string public baseURI;

  uint256 public collectionIndex;
  uint256 public uwulabsFee;

  mapping(uint256 => bool) public collectionFinalized;
  mapping(uint256 => bytes32) public collectionDataRoot;
  mapping(uint256 => address) public collectionOwner;
  
  // maybe put in merkle tree for simplicity.
  mapping(uint256 => bytes32) public collectionManagersRoot;

  mapping(uint256 => address) public derivativeSourceNFT;
  mapping(address => address) public derivativeSourceReceiver;
  mapping(address => uint256) public derivativeFee;

  event Purchase(uint256 collectionId, uint256 id, address buyer, address sourceArtist);
  event CollectionCreated(uint256 collectionId, address who, bytes32 newNFTDataRoot, address derivativeSourceNFT);
  event CollectionUpdate(uint256 collectionId, address who, uint256 newMaxSupply, bytes32 newNFTDataRoot);
  event CollectionManagerUpdate(uint256 collectionId, bytes32 newCollectionManagerRoot);
  event Finalized(uint256 collectionId);

  event DerivativeSourceFeeUpdate(address sourceNFT, uint256 derivativeFee);

  function __uwudropShared_init(string memory _name, string memory _symbol, string memory _URI) external {
    __Ownable_init();
    __ERC721SimpleUpgradeable_init(_name, _symbol);
    setBaseURI(_URI);
    uwulabsFee = 0.01 gwei;
  }

  // receive() external payable {
    // Might need to split received funds.
    // revert("Should not be sending eth directly");
  // }

  function createCollection(bytes32 dataRoot, address _derivativeSourceNFT) external {
    uint256 _collectionIndex = collectionIndex + 1;
    collectionIndex = _collectionIndex;
    collectionOwner[_collectionIndex] = msg.sender;
    collectionDataRoot[_collectionIndex] = dataRoot;
    derivativeSourceNFT[_collectionIndex] = _derivativeSourceNFT;

    emit CollectionCreated(_collectionIndex, msg.sender, dataRoot, _derivativeSourceNFT);
  }

  // Add commmission support "mark" collection as commission friendly (maybe other contract?)
  // Pause

  function updateCollectionData(uint256 collectionId, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external {
    require(msg.sender == collectionOwner[collectionId], "Not collection owner");
    require(!collectionFinalized[collectionId], "Finalized");
    collectionDataRoot[collectionId] = newNFTDataTreeRoot;
    emit CollectionUpdate(collectionId, msg.sender, newMaxSupply, newNFTDataTreeRoot);
  }

  function adminUpdateCollectionData(uint256 collectionId, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external onlyOwner {
    require(!collectionFinalized[collectionId], "Finalized");
    collectionDataRoot[collectionId] = newNFTDataTreeRoot;
    emit CollectionUpdate(collectionId, msg.sender, newMaxSupply, newNFTDataTreeRoot);
  }

  function managerUpdateCollectionData(uint256 collectionId, uint256 index, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot, bytes32[] memory merkleProof) external onlyOwner {
    require(!collectionFinalized[collectionId], "Finalized");

    bytes32 _collectionManagersRoot = collectionManagersRoot[collectionId];
    require(_collectionManagersRoot != bytes32(0), "Data Root not initialized");

    bytes32 node = keccak256(abi.encodePacked(index, collectionId, msg.sender));
    require(MerkleProof.verify(merkleProof, _collectionManagersRoot, node), 'MerkleDistributor: Invalid proof.');

    collectionDataRoot[collectionId] = newNFTDataTreeRoot;
    emit CollectionUpdate(collectionId, msg.sender, newMaxSupply, newNFTDataTreeRoot);
  }

  function updateCollectionManagers(uint256 collectionId, bytes32 _collectionManagerRoot) external {
    require(msg.sender == collectionOwner[collectionId], "Not collection owner");
    collectionManagersRoot[collectionId] = _collectionManagerRoot; 
    emit CollectionManagerUpdate(collectionId, _collectionManagerRoot);
  }

  function adminUpdateCollectionManagers(uint256 collectionId, bytes32 _collectionManagerRoot) external onlyOwner {
    collectionManagersRoot[collectionId] = _collectionManagerRoot; 
    emit CollectionManagerUpdate(collectionId, _collectionManagerRoot);
  }
  
  function finalize(uint256 collectionId) external {
    require(msg.sender == collectionOwner[collectionId], "Not collection owner");
    collectionFinalized[collectionId] = true;
    emit Finalized(collectionId);
  }

  function nftMint(uint256 collectionId, uint256 id, uint256 price, address sourceArtist, bool privateSale, address _receiver, bytes32[] memory merkleProof) external payable {
    uint256 _nftId = collectionId*1e6 | id;
    require(_exists(_nftId), "Already purchased");

    require(id < 1e6, "Above max");
    require(msg.value == price, "Not enough ETH");

    {
      bytes32 _dataRoot = collectionDataRoot[collectionId];
      require(_dataRoot != bytes32(0), "Data Root not initialized");

      address receiver = address(0);
      if (privateSale) {
        receiver = _receiver;
      }
      bytes32 node = keccak256(abi.encodePacked(collectionId, id, price, msg.value, receiver));
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
    emit Purchase(collectionId, id, _receiver, sourceArtist);
  }

  // Lets the owner of the NFT contract define the fee parameters.
  function setDerivativeSourceFee(address _derivativeSourceNFT, uint256 _derivFee, address _derivFeeReceiver) public {
    require(msg.sender == OwnableUpgradeable(_derivativeSourceNFT).owner() || msg.sender == owner(), "Not NFT owner or admin");
    
    derivativeSourceReceiver[_derivativeSourceNFT] = _derivFeeReceiver;
    derivativeFee[_derivativeSourceNFT] = _derivFee;
  }

  function rescue(address token) external onlyOwner {
    if (token == address(0)) {
        payable(owner()).sendValue(address(this).balance);
    } 
    //else {
    //     uint256 balance = IERC20Upgradeable(token).balanceOf(address(this));
    //     uint256 uwulabs = 2500*balance/5000;
    //     IERC20Upgradeable(token).safeTransfer(payable(UWU_LABS), uwulabs);
    //     IERC20Upgradeable(token).safeTransfer(payable(WAIFUSION_FUND), IERC20Upgradeable(token).balanceOf(address(this)));
    // }
  }

  function setBaseURI(string memory newURI) public onlyOwner {
    baseURI = newURI;
  }
  
  function setuwulabsFee(uint256 _uwulabsFee) public onlyOwner {
    uwulabsFee = _uwulabsFee;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}
