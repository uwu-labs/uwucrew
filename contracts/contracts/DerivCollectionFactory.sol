pragma solidity ^0.8.0;

import "./utils/OwnableUpgradeable.sol";
import "./utils/Create2.sol";
import "./proxy/UpgradeableBeacon.sol";
import "./proxy/Create2BeaconProxy.sol";
import "./DerivCollection.sol";

// Author: 0xKiwi.

// Deriv by uwulabs 
// Deriv is a derivative art focused web3 platform. 
//
contract DerivCollectionFactory is OwnableUpgradeable, UpgradeableBeacon {
    uint256 public accountIndex;
    uint256 public adminFee;

    // mapping(address => address) public nftToRoyaltyReceiver;
    mapping(address => address) public nftToDerivCollection;

    mapping(address => uint256) public ownerToDerivId;
    mapping(uint256 => bytes32) public derivIdToRoot;

    mapping(address => bool) public allowOperators;
    
    bytes internal constant beaconCode = type(Create2BeaconProxy).creationCode;

    event CollectionCreated(address sourceNFT, address collectionAddr);
    event ArtistRegistered(address who);

    function __DerivCollectionFactory_init() external virtual initializer {
        __Ownable_init();
        address collectionImpl = address(new DerivCollection());
        __UpgradeableBeacon__init(collectionImpl);
        adminFee = 0.03 gwei;
    }

    function version() external pure returns (string memory) {
        return "v1.0.0";
    }

    function createDerivCollection(string memory name, string memory symbol, address _sourceNFT) external onlyOwner {
        require(nftToDerivCollection[_sourceNFT] == address(0), "1 deriv collection per nft");
        address deployedCollection = _deployDerivCollection(name, symbol, _sourceNFT);
        nftToDerivCollection[_sourceNFT] = deployedCollection;
        emit CollectionCreated(deployedCollection, _sourceNFT);
    }

    function collectionAddress(address _sourceNFT) public view returns (address) {
        return nftToDerivCollection[_sourceNFT];
    }

    function registerArtist(bytes memory signature) public view returns (uint256) {
        uint256 _accountIndex = accountIndex + 1;
        ownerToDerivId[msg.sender] = _accountIndex;
        accountIndex = _accountIndex;
        return accountIndex;
    }

    function _deployDerivCollection(string memory name, string memory symbol, address _sourceNFT) internal returns (address) {
        // Add creator address into seed here? 
        bytes32 salt = keccak256(abi.encodePacked(_sourceNFT));
        address deployedCollection = Create2.deploy(0, salt, beaconCode);
        DerivCollection(deployedCollection).__DerivCollection_init(name, symbol, _sourceNFT);
        return deployedCollection;
    }

    function allowedOperator(address _operator) external returns (bool) {
        return true;
    }
}
