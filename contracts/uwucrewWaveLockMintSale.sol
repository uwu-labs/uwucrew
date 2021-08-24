pragma solidity ^0.8.0;

import "./tokens/IERC20.sol";
import "./tokens/IERC721Enumerable.sol";
import "./utils/Ownable.sol";
import "./utils/ReentrancyGuard.sol";

import "hardhat/console.sol";

interface Minter {
  function MAX_UWU() external returns (uint256);
  function mint(address to, uint256 tokenId) external;
}

contract uwucrewWaveLockSaleWithMint is Ownable, ReentrancyGuard {
  address public immutable nft; 
  address public constant WAIFUSION = 0x2216d47494E516d8206B70FCa8585820eD3C4946;
  address public constant WET = 0x76280AF9D18a868a0aF3dcA95b57DDE816c1aaf2; 
  address public constant BURNADDR = 0x0000000000000000000000000000000000080085;

  uint256 constant BASE = 10**18;

  uint256 public amountForSale;
  uint256 public amountSold;
  uint256 public amountForSwap;
  uint256 public amountSwapped;

  uint256 public buyPrice = 0.06 ether;
  uint256 public swapPrice = 1830 * BASE;
  uint256 public startTime;
  uint256 public startBlock;
  uint256 public wave = 0;
  uint256 public waveBlockLength = 20;

  mapping(uint256 => mapping(address => bool)) public waveLock;
  mapping(address => uint256) public balance;

  constructor(address _nft, uint256 _startTime, uint256 saleCount, uint256 swapCount, uint256 _lpCount) Ownable() ReentrancyGuard() {
    nft = _nft;
    require(Minter(_nft).MAX_UWU() > saleCount + swapCount + _lpCount, "More than supply");
    startTime = _startTime;
    amountForSale = saleCount;
    amountForSwap = swapCount;
    // Adding to balance of dev team so they can mint for LP portion whenever.
    balance[owner()] += _lpCount;
  }

  function swapWFforUWU(uint256[] memory ids) public {
    uint256 count = ids.length;
    require(count > 0, "Cant swap 0");
    require(amountSwapped + count < amountForSwap, "Swapping too many");
    IERC20(WET).transferFrom(msg.sender, BURNADDR, count * swapPrice);
    for (uint256 i = 0; i < count; i++) {
      IERC721Enumerable(WAIFUSION).transferFrom(msg.sender, BURNADDR, ids[i]);
    }

    // Credit balance for swapping.
    amountSwapped += count;
    balance[msg.sender] += count;
  }

  function swapAndMint(uint256[] memory ids) public {
    swapWFforUWU(ids);
    mint(ids.length);
  }

  function closeSwapToSale() external onlyOwner {
    uint256 remaining = amountForSwap - amountSwapped;
    amountForSwap = 0;
    amountForSale += remaining;
  }

  function closeSwapToOwner() external onlyOwner {
    uint256 remaining = amountForSwap - amountSwapped;
    amountForSwap = 0;
    balance[msg.sender] += remaining;
  }

  function addExtraToSale(uint256 count) external onlyOwner {
    balance[msg.sender] -= count;
    amountForSale += count;
  }
  
  /*
   * DM Keltron#9056 he looks submissive and breedable.
   */
  function buy(uint256 count) external payable nonReentrant {
    require(block.timestamp > startTime, "Sale has not started");
    require(count > 0, "Cannot mint 0");
    require(amountSold < amountForSale, "Sold out! Sorry!");

    refreshWave();
    
    require(!waveLock[wave][msg.sender], "Locked for this wave");
    require(count <= maxPerTX(wave), "Max for TX in this wave");
    require(msg.value >= count * buyPrice, "Not enough ETH");

    // Adjust for the last mint being incomplete.
    uint256 ethAmountOwed;
    if (amountSold + count > amountForSale) {
      uint256 amountRemaining = amountForSale-amountSold;
      ethAmountOwed = buyPrice * (count-amountRemaining);
      count = amountRemaining;
    }

    // Update the amount the person is eligible for minting.
    amountSold += count;
    balance[msg.sender] += count;
    // Lock this address for the phase.
    waveLock[wave][msg.sender] = true;

    if (ethAmountOwed > 0) {
      (bool success, ) = msg.sender.call{ value: ethAmountOwed }("");
      require(success, "Address: unable to send value, recipient may have reverted");
    }
  }

  function mint(uint256 count) public {
    _mint(msg.sender, count);
  }

  function forceMint(address account, uint256 count) public onlyOwner {
    _mint(account, count);
  }

  function _mint(address account, uint256 count) public {
    require(count > 0, "0?");
    require(count <= balance[account], "Not enough balance");
    require(block.timestamp > startTime, "Can only mint after the sale has begun");
    balance[account] -= count;

    // Mint to the owner.
    uint256 currentSupply = IERC721Enumerable(nft).totalSupply();
    for (uint256 i = 0; i < count; i++) {
      Minter(nft).mint(account, currentSupply + i);
    }
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
      return 32;
    }
  }
}