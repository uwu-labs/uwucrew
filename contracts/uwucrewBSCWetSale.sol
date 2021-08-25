pragma solidity ^0.8.0;

import "./tokens/IERC20.sol";
import "./tokens/IERC721Enumerable.sol";
import "./utils/Ownable.sol";
import "./utils/ReentrancyGuard.sol";

contract uwucrewBSCWaveLockSale is Ownable, ReentrancyGuard {
  address public constant WET = 0x76280AF9D18a868a0aF3dcA95b57DDE816c1aaf2; 
  address public constant BURNADDR = 0x0000000000000000000000000000000000080085;

  uint256 constant BASE = 10**18;

  uint256 public amountForSale;
  uint256 public amountSold;

  uint256 public buyPrice = 10980 * BASE;
  uint256 public startTime;
  uint256 public startBlock;
  uint256 public wave = 0;
  uint256 public waveBlockLength = 60;

  mapping(uint256 => mapping(address => bool)) public waveLock;
  mapping(address => uint256) public balance;

  address[] private contributors;
  mapping(address => bool) public contributed;
  mapping(address => address) public bscToEthAddr;

  constructor(uint256 _startTime, uint256 saleCount) Ownable() ReentrancyGuard() {
    startTime = _startTime;
    amountForSale = saleCount;
  }

  function buy(uint256 count, address ethAddress) external nonReentrant {
    require(block.timestamp > startTime, "Sale has not started");
    require(count > 0, "Cannot mint 0");
    require(amountSold < amountForSale, "Sold out! Sorry!");

    refreshWave();
    
    require(!waveLock[wave][msg.sender], "Locked for this wave");
    require(count <= maxPerTX(wave), "Max for TX in this wave");

    // Adjust for the last mint being incomplete.
    if (amountSold + count > amountForSale) {
      uint256 amountRemaining = amountForSale-amountSold;
      count = amountRemaining;
    }

    IERC20(WET).transferFrom(msg.sender, BURNADDR, count * buyPrice);

    if (!contributed[msg.sender]) {
      contributors.push(msg.sender);
      contributed[msg.sender] = true;
      bscToEthAddr[msg.sender] = ethAddress;
    }

    // Update the amount the person is eligible for minting.
    amountSold += count;
    balance[msg.sender] += count;
    // Lock this address for the phase.
    waveLock[wave][msg.sender] = true;
  }

  function setStartTime(uint256 _startTime) external onlyOwner {
    startTime = _startTime;
  }

  function allContributors() external view returns (address[] memory) {
    return contributors;
  }

  function allContributorsBalance() external view returns (uint256[] memory) {
    address[] memory _contributors = contributors;
    uint256[] memory balances = new uint256[](_contributors.length);
    for (uint256 i = 0; i < _contributors.length; i++) {
      balances[i] = balance[_contributors[i]];
    }
    return balances;
  }

  function allContributorsEthAddrs() external view returns (address[] memory) {
    address[] memory _contributors = contributors;
    address[] memory addresses = new address[](_contributors.length);
    for (uint256 i = 0; i < _contributors.length; i++) {
      addresses[i] = bscToEthAddr[_contributors[i]];
    }
    return addresses;
  }

  function currentMaxPerTX() external view returns (uint256) {
    return maxPerTX(wave);
  } 

  function refreshWave() internal {
    if (startBlock == 0 && block.timestamp > startTime) {
      startBlock = block.number;
    }

    uint256 blocksSinceStart = block.number - startBlock;
    uint256 newWave = blocksSinceStart/waveBlockLength;
    if (newWave != wave) { 
      wave = newWave;
    }
  }

  function maxPerTX(uint256 _wave) internal pure returns (uint256) {
    if (_wave == 0) {
      return 4;
    } else if (_wave == 1) {
      return 16;
    } else if (_wave == 2) {
      return 32;
    } else {
      return 64;
    }
  }
}