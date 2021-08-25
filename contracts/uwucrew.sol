pragma solidity ^0.8.0;

import "./tokens/ERC721Enumerable.sol";
import "./tokens/IERC20.sol";
import "./utils/Ownable.sol";

interface SaleContract { 
  function loadSale(uint256 saleCount, uint256 swapCount, uint256 lpCount) external;
}

contract uwucrew is Ownable, ERC721Enumerable {
  address public saleContract;
  address public extraContract;

  uint256 public immutable MAX_UWU;
  
  uint256 constant BASE = 10**18;
  uint256 public amountToLP;

  string public UWU_PROVENANCE = "";
  string public baseURI;

  constructor(string memory _name, string memory _symbol, uint256 maxSupply) Ownable() ERC721(_name, _symbol) {
    MAX_UWU = maxSupply;
  }

  function mint(address to, uint256 tokenId) public virtual {
    require(msg.sender == saleContract || msg.sender == extraContract, "Nice try lol");
    _safeMint(to, tokenId);
  }

  function prepareSale(address _saleContract) public onlyOwner {
    require(saleContract == address(0));
    saleContract = _saleContract;
  }

  function setExtraContract(address _extraContract) public onlyOwner {
    require(extraContract == address(0));
    extraContract = _extraContract;
  }

  function renounceMinting() public onlyOwner {
    saleContract = address(0);
    extraContract = address(0);
  }

  /**
    * uwu for the team.
    */
  function reserveUWUS() public onlyOwner {        
    uint supply = totalSupply();
    for (uint256 i = 0; i < 50; i++) {
      _safeMint(msg.sender, supply + i);
    }
  }

  /*     
  * Set provenance once it's calculated
  */
  function setProvenanceHash(string memory provenanceHash) public onlyOwner {
    UWU_PROVENANCE = provenanceHash;
  }

  function setBaseURI(string memory newURI) public onlyOwner {
    baseURI = newURI;
  }

  function _safeMint(address to, uint256 tokenId) internal virtual override {
    require(tokenId < MAX_UWU, "Max supply");
    super._safeMint(to, tokenId);
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}