pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorage.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/MerkleProof.sol";
import "./proxy/BeaconFinalizeUtils.sol";

contract uwudropCollection is OwnableUpgradeable, ERC721Simple {
  using Address for address payable;
  
  string public baseURI;

  bytes32 public nftDataTreeRoot;

  uint256 private _royaltyInBasisPoints = 300;

  address public uwudropFactory;
  address public derivativeSourceNFT;

  /**
   * @dev Stores an optional alternate address to receive creator revenue and royalty payments.
   * The target address may be a contract which could split or escrow payments.
   */
  address payable private _creatorPaymentAddress;

  bool public finalized;

  event CollectionUpdate(uint256 newMaxSupply, bytes32 newNFTDataRoot, string customURI);
  event Finalized();

  function __uwudropCollection_init(string memory _name, string memory _symbol, address owner, address _derivativeSourceNFT) external {
    __Ownable_init();
    __ERC721Simple_init(_name, _symbol);
    transferOwnership(owner);
    uwudropFactory = msg.sender;
    derivativeSourceNFT = _derivativeSourceNFT;
  }

  function update(string memory customURI, uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external onlyOwner {
    require(!finalized, "Finalized");
    nftDataTreeRoot = newNFTDataTreeRoot;
    baseURI = customURI;
    emit CollectionUpdate(newMaxSupply, newNFTDataTreeRoot, customURI);
  }
  
  function finalize() external onlyOwner {
    finalized = true;
    BeaconFinalizeUtils._setFinalizedImpl();
    emit Finalized();
  }

  // Try other kind of contract optimized for blind minting.
  function nftMint(uint256 id, bool privateSale, bytes32[] memory merkleProof) external payable {
    require(_exists(id), "Already purchased");
    bytes32 _dataRoot = nftDataTreeRoot;
    require(_dataRoot != bytes32(0), "Data Root not initialized");
    // require(msg.value == price, "Not enough ETH");
    address receiver = address(0);
    if (privateSale) {
      receiver = msg.sender;
    }
    bytes32 node = keccak256(abi.encodePacked(id, msg.value, receiver));
    require(MerkleProof.verify(merkleProof, _dataRoot, node), 'MerkleDistributor: Invalid proof.');
    _mint(msg.sender, msg.sender, id);
  }
  
  function withdraw() external onlyOwner {
    disperseETH();
  }

  function disperseETH() internal {
    uint256 fullAmount = address(this).balance;
    payable(msg.sender).sendValue(fullAmount*990/1000);
    payable(0x354A70969F0b4a4C994403051A81C2ca45db3615).sendValue(address(this).balance);
  }

  function setTokenCreatorPaymentAddress(address payable tokenCreatorPaymentAddress) external onlyOwner {
    _creatorPaymentAddress = tokenCreatorPaymentAddress;
  }

  function setRoyaltyInBasisPoints(uint256 royaltyInBasisPoints) external onlyOwner {
    _royaltyInBasisPoints = royaltyInBasisPoints;
  }

  function setBaseURI(string memory newURI) public onlyOwner {
    baseURI = newURI;
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    if (
      interfaceId == type(IGetRoyalties).interfaceId ||
      interfaceId == type(ITokenCreator).interfaceId ||
      interfaceId == type(ITokenCreatorPaymentAddress).interfaceId ||
      interfaceId == type(IGetFees).interfaceId
    ) {
      return true;
    }
    return super.supportsInterface(interfaceId);
  }

  /**
   * @notice Returns an array of recipient addresses to which royalties for secondary sales should be sent.
   * The expected royalty amount is communicated with `getFeeBps`.
   */
  function getFeeRecipients(uint256 /*id*/) external view returns (address payable[] memory recipients) {
    recipients = new address payable[](1);
    recipients[0] = _creatorPaymentAddress;
  }

  /**
   * @notice Returns an array of royalties to be sent for secondary sales in basis points.
   * The expected recipients is communicated with `getFeeRecipients`.
   */
  function getFeeBps(
    uint256 /* id */
  ) external view returns (uint256[] memory feesInBasisPoints) {
    feesInBasisPoints = new uint256[](1);
    feesInBasisPoints[0] = _royaltyInBasisPoints;
  }

  /**
   * @notice Returns an array of royalties to be sent for secondary sales.
   **/
  function getRoyalties(uint256 /*tokenId*/)
    external
    view
    returns (address payable[] memory recipients, uint256[] memory feesInBasisPoints)
  {
    recipients = new address payable[](1);
    recipients[0] = _creatorPaymentAddress;
    feesInBasisPoints = new uint256[](1);
    feesInBasisPoints[0] = _royaltyInBasisPoints;
  }

  /**
   * @notice Returns the creator for an NFT, which is always the collection owner.
   */
  function tokenCreator(
    uint256 /* tokenId */
  ) external view returns (address payable) {
    return payable(owner());
  }

  /**
   * @notice Returns the desired payment address to be used for any transfers to the creator.
   * @dev The payment address may be assigned for each individual NFT, if not defined the collection owner is returned.
   */
  function getTokenCreatorPaymentAddress(uint256 /* tokenId */)
    public
    view
    returns (address payable)
  {
    return _creatorPaymentAddress;
  }
}
