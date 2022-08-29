pragma solidity ^0.8.0;

import "./utils/OwnableUpgradeable.sol";
import "./utils/Create2.sol";
import "./proxy/UpgradeableBeacon.sol";
import "./proxy/Create2BeaconProxy.sol";
import "./DerivCollection.sol";

// Author: 0xKiwi.

// Deriv by uwulabs 
// Deriv is a derivative art focused web3 commission platform. 
//
contract DerivCollectionFactory is OwnableUpgradeable, UpgradeableBeacon {
    uint256 public collectionIndex;
    uint256 public artistIndex;
    uint256 public adminFee;

    // Sponsor support to allow certain collectors to cover gas costs for artists? Administrative?
    mapping(address => address) public nftToRoyaltyReceiver;
    mapping(address => address) public nftToDeriv;
    bytes internal constant beaconCode = type(Create2BeaconProxy).creationCode;

    event CollectionCreated(address sourceNFT, address collectionAddr);

    function __DerivCollectionFactory_init() external virtual initializer {
        __Ownable_init();
        address collectionImpl = address(new uwudropCollectionDynamic());
        __UpgradeableBeacon__init(collectionImpl);
        adminFee = 0.03 gwei;
    }

    function version() external pure returns (string memory) {
        return "v1.0.0";
    }

    function createDerivCollection(string memory name, string memory symbol, address _sourceNFT) external onlyOwner {
        address deployedCollection = _deployDerivCollection(_collectionIndex, name, symbol, _owner, royaltyReceiver);
        nftToDeriv[_sourceNFT] = deployedCollection;
        emit CollectionCreated(deployedCollection, _sourceNFT);
    }

    function collectionAddress(address _sourceNFT) public view returns (address) {
        // Add creator address into seed here? 
        bytes32 salt = keccak256(abi.encodePacked(_sourceNFT));
        return Create2.computeAddress(salt, keccak256(beaconCode));
    }

    function _deployDerivCollection(string memory name, string memory symbol, address _sourceNFT) internal returns (address) {
        // Add creator address into seed here? 
        bytes32 salt = keccak256(abi.encodePacked(_sourceNFT));
        address deployedCollection = Create2.deploy(0, salt, beaconCode);
        DerivCollection(deployedCollection).__DerivCollection_init(name, symbol, _sourceNft);
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

    function allowedOperator(address _operator) external returns (bool) {
        return true;
    }
}
