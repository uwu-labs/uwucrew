pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorageUpgradeable.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/MerkleProof.sol";

contract uwudropAgencyExtension is OwnableUpgradeable {
  using Address for address payable;
  
  address uwudrop;

  mapping(uint256 => bytes32) public collectionManagersRoot;

  function __uwudropAgencyExtension_init() external {
    __Ownable_init();
  }

  // receive() external payable {
    // Might need to split received funds.
    // revert("Should not be sending eth directly");
  // }

  // Pause
  // 
  function managerUpdateCollectionData(uint256 collectionId, uint256 index, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot, bytes32[] memory merkleProof) external onlyOwner {
    require(!collectionFinalized[collectionId], "Finalized");

    bytes32 _collectionManagersRoot = collectionManagersRoot[collectionId];
    require(_collectionManagersRoot != bytes32(0), "Data Root not initialized");

    bytes32 node = keccak256(abi.encodePacked(index, collectionId, msg.sender));
    require(MerkleProof.verify(merkleProof, _collectionManagersRoot, node), 'MerkleDistributor: Invalid proof.');

// change with calling uwudrop
    collectionDataRoot[collectionId] = newNFTDataTreeRoot;
    emit CollectionUpdate(collectionId, msg.sender, newMaxSupply, newNFTDataTreeRoot);
  }

  function adminUpdateCollectionData(uint256 collectionId, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external onlyOwner {
    require(!collectionFinalized[collectionId], "Finalized");
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
}
