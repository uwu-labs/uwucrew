pragma solidity ^0.8.0;

import "./tokens/ERC721Enumerable.sol";
import "./tokens/IERC20.sol";
import "./utils/Ownable.sol";

interface SaleContract { 
  function loadSale(uint256 count) external;
}

contract uwucrew is Ownable, ERC721Enumerable {
  address public saleContract;
  
  uint256 constant BASE = 10**18;
  uint256 constant MAX_UWU = 10000;
  uint256 public amountToLP;

  string public UWU_PROVENANCE = "";
  string public baseURI;

  uint256 public startingIndex;
  uint256 public startingIndexBlock;


  constructor(string memory _name, string memory _symbol) Ownable() ERC721(_name, _symbol) {
  }

  function mint(address to, uint256 tokenId) public virtual {
    require(msg.sender == saleContract, "Nice try lol");
  } 

  function prepareSale(address _saleContract) public onlyOwner {
    require(saleContract == address(0));
    saleContract = _saleContract;
    SaleContract(_saleContract).loadSale(MAX_UWU);
  }

  /**
    * Set some Bored Apes aside
    */
  function reserveUWUS() public onlyOwner {        
    uint supply = totalSupply();
    uint i;
    for (i = 0; i < 80; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }

  /*     
  * Set provenance once it's calculated
  */
  function setProvenanceHash(string memory provenanceHash) public onlyOwner {
      UWU_PROVENANCE = provenanceHash;
  }
  function setBaseURI(string memory _baseURI) public onlyOwner {
    baseURI = _baseURI;
  }

  function _safeMint(address to, uint256 tokenId) internal virtual override {
    require(tokenId < MAX_UWU, "Max supply");
    super._safeMint(to, tokenId);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}