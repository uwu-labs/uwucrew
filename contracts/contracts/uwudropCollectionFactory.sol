pragma solidity ^0.8.0;

import "./utils/OwnableUpgradeable.sol";
import "./utils/Create2.sol";
import "./proxy/UpgradeableBeacon.sol";
import "./proxy/Create2BeaconProxy.sol";
import "./uwudropCollectionDynamic.sol";

// Author: 0xKiwi.

// uwudrop by uwulabs 
// uwudrop is an artist-first platform for artists to publish large collections of NFTs 
// while giving each collection their own provenance and smart contract.
//
// Artist-first: All gas costs are diverted away from the artist however possible, directed towards the purchaser.
// In a dynamic collection, the artist may publish an uncapped amount of NFTs as part of the collection.
// By supply the merkle tree root of the data that buyers will be submitted, we allow lazy minting while 
//
contract uwudropCollectionFactory is OwnableUpgradeable, UpgradeableBeacon {
    uint256 public collectionIndex;
    uint256 public adminFee;

    // Sponsor support to allow certain collectors to cover gas costs for artists? Administrative?
    mapping(address => bool) public sponsors;
    mapping(address => address) public nftToRoyaltyReceiver;
    bytes internal constant beaconCode = type(Create2BeaconProxy).creationCode;

    event CollectionCreated(uint256 collectionId, address collectionAddr, address creator);

    function __uwudropCollectionFactory_init() external virtual initializer {
        __Ownable_init();
        address collectionImpl = address(new uwudropCollectionDynamic());
        __UpgradeableBeacon__init(collectionImpl);
        adminFee = 0.01 gwei;
    }

    function version() external pure returns (string memory) {
        return "v1.0.0";
    }

    function createCollection(string memory name, string memory symbol, address _owner, address royaltyReceiver) external {
      uint256 _collectionIndex = collectionIndex;
      address deployedCollection = _deployuwudropCollection(_collectionIndex, name, symbol, _owner, royaltyReceiver);
      collectionIndex = _collectionIndex + 1;
      emit CollectionCreated(_collectionIndex, deployedCollection, _owner);
    }

    function collectionAddress(uint256 _collectionIndex) public view returns (address) {
        // Add creator address into seed here? 
        bytes32 salt = keccak256(abi.encodePacked(_collectionIndex));
        return Create2.computeAddress(salt, keccak256(beaconCode));
    }

    function _deployuwudropCollection(uint256 _collectionIndex, string memory name, string memory symbol, address _owner, address royaltyReceiver) internal returns (address) {
        // Add creator address into seed here? 
        bytes32 salt = keccak256(abi.encodePacked(_collectionIndex));
        address deployedCollection = Create2.deploy(0, salt, beaconCode);
        uwudropCollectionDynamic(deployedCollection).__uwudropCollection_init(name, symbol, _owner, royaltyReceiver);
        return deployedCollection;
    }

    function isContract(address account) internal view returns (bool) {
        // This method relies on extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        uint256 size;
        // solhint-disable-next-line no-inline-assembly
        assembly { size := extcodesize(account) }
        return size != 0;
    }
}
