pragma solidity ^0.8.0;

import "../tokens/ERC721Enumerable.sol";
import "../tokens/IERC20.sol";
import "../utils/Ownable.sol";

interface SaleContract { 
  function loadSale(uint256 count) external;
}

contract NFT is Ownable, ERC721Enumerable {
  address public saleContract;
  
  uint256 constant BASE = 10**18;
  uint256 constant MAX_SUPPLY = 10000;
  uint256 public amountToLP;

  constructor(string memory _name, string memory _symbol) Ownable() ERC721(_name, _symbol) {
  }

  function mint(address to, uint256 tokenId) public virtual {
    require(msg.sender == saleContract, "Nice try lol");
    require(tokenId < MAX_SUPPLY, "Max supply");
    super._safeMint(to, tokenId);
  } 

  function prepareSale(address _saleContract) public onlyOwner {
    require(saleContract == address(0));
    saleContract = _saleContract;
    SaleContract(_saleContract).loadSale(MAX_SUPPLY);
  }
}