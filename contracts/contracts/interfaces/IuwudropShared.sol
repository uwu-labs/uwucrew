pragma solidity ^0.8.0;

interface IuwudropShared {
  event Purchase(uint256 collectionId, uint256 id, address buyer, address sourceArtist);
  event CollectionCreated(uint256 collectionId, address who, bytes32 newNFTDataRoot, address derivativeSourceNFT);
  event CollectionUpdate(uint256 collectionId, address who, uint256 newMaxSupply, bytes32 newNFTDataRoot);
  event CollectionManagerUpdate(uint256 collectionId, bytes32 newCollectionManagerRoot);
  event Finalized(uint256 collectionId);

  event DerivativeSourceFeeUpdate(address sourceNFT, uint256 derivativeFee);

  function __uwudropShared_init(string memory _name, string memory _symbol, string memory _baseURI) external;
  function createCollection(bytes32 dataRoot, address _derivativeSourceNFT) external;

  function updateCollectionData(uint256 collectionId, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external;
  function adminUpdateCollectionData(uint256 collectionId, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external;
  function managerUpdateCollectionData(uint256 collectionId, uint256 index, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot, bytes32[] memory merkleProof) external;
  function updateCollectionManagers(uint256 collectionId, bytes32 _collectionManagerRoot) external;
  function adminUpdateCollectionManagers(uint256 collectionId, bytes32 _collectionManagerRoot) external;
  function finalize(uint256 collectionId) external;

  function nftMint(uint256 collectionId, uint256 id, address sourceArtist, bool privateSale, address _receiver, bytes32[] memory merkleProof) external payable;
  function setDerivativeSourceFee(address _derivativeSourceNFT, uint256 _derivFee, address _derivFeeReceiver) external;

  function rescue(address token) external;
  function setBaseURI(string memory newURI) external;
  function setuwulabsFee(uint256 _uwulabsFee) external;
}
