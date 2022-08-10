pragma solidity ^0.8.0;

/*
                  &(,    @%(,.                   @%(,.    &(*                   
     (%/,        @%(/,   @((*,       @#(*.       @%((,,  @%(/*        &#*,      
     @#(*.       @%(/*   @%((..     @&(((,.     @&((/*   @%(*.       @&(/,      
      @#(/.,, *&&#(//     @&(((///((((((((((//(((((((     @%(/.,, .&&#((//      
       @@%(((((((#%%         @@&%#%%&&   @@&%#%%&&&        @@&((((((((#%        
            %@(                                                 ,@@             
                     (/          ,       #(.     ,     .    ,                   
                 /&(%@@@%/   @((&@&   @##  @/,  &&,. @&*.  @(/                  
                 @%.         @**      @//%&&#    /&,/(#%&,#(/                   
                  @&(/(##(   @/*       @#*(##(    .@#/  @@((                    
*/

import "./tokens/ERC721.sol";
import "./utils/Ownable.sol";
import "./utils/MerkleProof.sol";

contract uwuClaim is Ownable, ERC721 {
  address public immutable sourceNFT;
  bytes32 public immutable claimRoot;

  string public baseURI;

  constructor(string memory _name, string memory _symbol, address _sourceNFT, bytes32 _claimRoot) Ownable() ERC721(_name, _symbol) {
    sourceNFT = _sourceNFT;
    claimRoot = _claimRoot;
  }

  function isClaimed(uint256 index) public view returns (bool) {
    return _exists(index);
  }

  function claim(uint256 tokenId, bytes32[] calldata merkleProof) external payable {
    require(msg.sender == ERC721(sourceNFT).ownerOf(tokenId), "Cannot claim if not owner");
    require(!_exists(tokenId), 'MerkleDistributor: Drop already claimed.');

    // Verify the merkle proof.
    bytes32 node = keccak256(abi.encodePacked(tokenId));
    require(MerkleProof.verify(merkleProof, claimRoot, node), 'MerkleDistributor: Invalid proof.');
    
    _mint(msg.sender, tokenId);
  }

  function withdrawTips() external onlyOwner {
    sendValue(payable(0x354A70969F0b4a4C994403051A81C2ca45db3615), address(this).balance);
  }

  function sendValue(address payable recipient, uint256 amount) internal {
    require(address(this).balance >= amount, "Address: insufficient balance");

    // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
    (bool success, ) = recipient.call{ value: amount }("");
    require(success, "Address: unable to send value, recipient may have reverted");
  }

  function setBaseURI(string memory newURI) public onlyOwner {
    baseURI = newURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }
}