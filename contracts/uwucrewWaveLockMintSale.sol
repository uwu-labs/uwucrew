pragma solidity ^0.8.0;

import "./tokens/IERC20.sol";
import "./tokens/IERC721Enumerable.sol";
import "./utils/Ownable.sol";
import "./utils/ReentrancyGuard.sol";

interface Minter {
  function mint(address to, uint256 tokenId) external;
}

contract WaveLockSaleWithMint is Ownable, ReentrancyGuard {
  address public nft; 
  address public constant WAIFUSION = 0x2216d47494E516d8206B70FCa8585820eD3C4946;
  address public constant WET = 0x76280AF9D18a868a0aF3dcA95b57DDE816c1aaf2; 
  address public constant BURNADDR = 0x0000000000000000000000000000000000080085;

  uint256 constant BASE = 10**18;
  uint256 constant wetSwapCost = 1830 * BASE;

  uint256 public price;
  uint256 public amountForSale;
  uint256 public amountSold;
  uint256 public amountForSwap;
  uint256 public amountSwapped;
  uint256 public startBlock;
  uint256 public wave = 0;
  uint256 public waveBlockLength = 20;

  mapping(uint256 => mapping(address => bool)) blockLock;
  mapping(address => uint256) balance;

  constructor(address _nft, uint256 _startBlock) Ownable() ReentrancyGuard() {
    nft = _nft;
    startBlock = _startBlock;
  }

  function loadSale(uint256 count) external {
    require(msg.sender == nft);
    amountForSale = count;
  }

  function swapWFforUWU(uint256[] memory ids) external {
    uint256 count = ids.length;
    require(amountSwapped + count < amountForSwap, "Cannot swap anymore");
    for (uint256 i = 0; i < count; i++) {
      IERC721Enumerable(WAIFUSION).safeTransferFrom(msg.sender, BURNADDR, ids[i]);
    }
    IERC20(WET).transferFrom(msg.sender, BURNADDR, count * wetSwapCost);

    // Credit balance for swapping.
    amountSwapped += count;
    balance[msg.sender] += count;
  }

  function buy(uint256 count) external payable nonReentrant {
    require(block.number > startBlock, "Sale has not started");
    require(count > 0, "Cannot mint 0");
    require(amountSold < amountForSale, "Sold out! Sorry!");

    refreshWave();
    
    require(!blockLock[wave][msg.sender], "Locked for this wave");
    require(count < maxPerTX(wave), "Cap");

    // Adjust for the last mint being incomplete.
    uint256 ethAmountOwed;
    if (amountSold + count > amountForSale) {
      uint256 amountRemaining = amountForSale-amountSold;
      ethAmountOwed = price * (count-amountRemaining);
      count = amountRemaining;
    }

    // Update the amount the person is eligible for minting.
    amountSold += count;
    balance[msg.sender] += count;
    // Lock this address for the phase.
    blockLock[wave][msg.sender] = true;

    if (ethAmountOwed > 0) {
      (bool success, ) = msg.sender.call{ value: ethAmountOwed }("");
      require(success, "Address: unable to send value, recipient may have reverted");
    }
  }

  function mint(uint256 count) external {
    require(count > 0);
    require(count <= balance[msg.sender]);
    balance[msg.sender] -= count;

    // Mint to the owner.
    uint256 currentSupply = IERC721Enumerable(nft).totalSupply();
    for (uint256 i = 0; i < count; i++) {
      Minter(nft).mint(msg.sender, currentSupply + i);
    }
  }

  function refreshWave() internal {
    uint256 blocksSinceStart = block.number - startBlock;
    uint256 newWave = blocksSinceStart/waveBlockLength;
    if (newWave != wave) { 
      wave = newWave;
    }
  }

  function maxPerTX(uint256 _wave) internal pure returns (uint256) {
    if (_wave == 0) {
      return 2;
    } else if (_wave == 1) {
      return 8;
    } else if (_wave == 2) {
      return 20;
    } else {
      return 50;
    }
  }
}