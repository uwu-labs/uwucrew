pragma solidity ^0.8.0;

import "./interfaces/IRoyalties.sol";
import "./tokens/ERC721URIStorage.sol";
import "./utils/OwnableUpgradeable.sol";
import "./utils/Address.sol";
import "./utils/MerkleProof.sol";
import "./proxy/BeaconFinalizeUtils.sol";

// uwudrop Dynamic Collection 
// This is an uwudrop collection contract aimed at dynamicly sized collections.
// All gas costs are directed towards the collecter whereever possible.
//
// Derivative collections from artists (for example, uwucrew derivatives by @6MAKER) were in mind
// when designing uwudrop dynamic collections. uwudrop allows artists to declare what the source NFT collection is, 
// for a portion of the purchase to go towards the NFT teams proper benefactor. 
// Charging a fee on derivatives may seem controversial, but we believe NFT teams (uwulabs) should be aligned towards
// the success of the artists that create and collaborate with the IP and concepts of the originating NFT.
// 
// Features:
// - Lazy Minting: Collectors pay gas to mint the NFT and assign the token uri on chain. By using a merkle tree,
//  we offload all the data on chain to whoever submits the proof when they purchase said NFT.
//  However, the artist still needs to pay gas to deploy the collection and update the tree if any NFTs are added.
// (Gas usage may be sponsored by uwulabs)
//
// - Private Sales: Artists can mark which NFTs are only for sale to certain people. This is a useful feature for derivative oriented collections.
// 
// - Safely extendable collections: Artists can extend and add more supply to the collection safely without interfering with the other NFTs.
// 
// - Arbitrary per NFT pricing: NFTs in each collection can be easily priced arbitarily from eachother. 
// Each NFTs price is published as part of the data root. Some derivatives may be have more effort than others, so this is an important feature. 
//
// - Finalizing: In case an artist wants to make it clear that a collection can no longer be changed, they can mark the collection as finalized.
// This locks the implementation, so no further changes can be made. (un-purchased NFTs can still be purchased even after finalizing) 
// 
// - Admin friendly: In case an artist is unable to access their account or does not wish to spend the gas required, 
// an adiministrator can step in and perform the actions for them. 
// 
// Features to add?
// On-chain commission requests? Maybe just have an event function people can use to request. Manage everything else off chain, or just off chain entirely.
contract uwudropCollectionDynamic is OwnableUpgradeable, ERC721URIStorage {
  using Address for address payable;
  
  bytes32 public nftDataTreeRoot;

  uint256 private _royaltyInBasisPoints = 300;

  address public uwudropFactory;
  address public derivativeSourceNFT; // Does this need to be on chain? Can be part of tree?

  /**
   * @dev Stores an optional alternate address to receive creator revenue and royalty payments.
   * The target address may be a contract which could split or escrow payments.
   */
  address payable private _creatorPaymentAddress;

  bool public finalized;

  event CollectionUpdate(uint256 newMaxSupply, bytes32 newNFTDataRoot);
  event Finalized();
  event Mint(uint256 id, string newTokenURI, uint256 price, bool privateSale, address buyer);

  function __uwudropCollection_init(string memory _name, string memory _symbol, address owner, address _derivativeSourceNFT) external {
    __Ownable_init(); // ask dillon if this init is needed since we transfer ownership anyways. 
    __ERC721Simple_init(_name, _symbol);
    transferOwnership(owner);
    uwudropFactory = msg.sender;
    derivativeSourceNFT = _derivativeSourceNFT;
  }

  function version() external pure returns (string memory) {
    return "v1.0.0";
  }

  function update(uint256 newMaxSupply, bytes32 newNFTDataTreeRoot) external onlyOwner {
    require(!finalized, "Finalized");
    nftDataTreeRoot = newNFTDataTreeRoot;
    emit CollectionUpdate(newMaxSupply, newNFTDataTreeRoot);
  }
  
  function finalize() external onlyOwner {
    finalized = true;
    BeaconFinalizeUtils._setFinalizedImpl();
    emit Finalized();
  }

  // Admin transfer function in case the artist's account is compromised for some reason.
  function adminOwnerChange(address newOwner) external {
    require(msg.sender == uwudropFactory, "Not factory");
    transferOwnership(newOwner);
  }

  function mint(uint256 id, string memory newTokenURI, bool privateSale, bytes32[] memory merkleProof) external payable {
    require(_exists(id), "Already purchased");
    bytes32 _dataRoot = nftDataTreeRoot;
    require(_dataRoot != bytes32(0), "Data Root not initialized");
    // require(msg.value == price, "Not enough ETH");
    address receiver = address(0);
    if (privateSale) {
      receiver = msg.sender;
    }
    
    // Put artist address/collection id into this to prevent colluding trees? (provided by frontend anyways, so doesn't have to be 100% decentralized)
    bytes32 node = keccak256(abi.encodePacked(id, newTokenURI, msg.value, receiver));
    require(MerkleProof.verify(merkleProof, _dataRoot, node), 'MerkleDistributor: Invalid proof.');
    _mint(msg.sender, msg.sender, id);
    // If the user passed in a token uri, use it. If not, tokenURI() resorts to the baseuri + tokenId.
    if (bytes(newTokenURI).length == 0) {
      _setTokenURI(id, newTokenURI);
    }
    emit Mint(id, newTokenURI, msg.value, privateSale, receiver);
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

  function _baseURI() internal view virtual override returns (string memory) {
    return ""; // get base URI from factory.
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
