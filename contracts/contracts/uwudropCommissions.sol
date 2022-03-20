pragma solidity ^0.8.0;

import "./interfaces/IuwudropShared.sol";

// Isolated commission contract that builds on top of uwudrop.
//
// Lets us handle commission escrow, commission deadlines, 
contract uwudropCommissionEscrow {

  IuwudropShared uwudrop;
  
  uint256 deadlineMin = 30 days;
  uint256 minPrice = 0.05 ether;

  constructor(address _uwudrop) {
    uwudrop = IuwudropShared(_uwudrop);
  }

  struct Commission {
    uint256 price;
    address sourceArtist;
    uint64 finishDate;
  }

  mapping(address => uint256) artistDeadlines;
  mapping(uint256 => mapping(address => Commission)) commissionInfo;

  event CommissionRequested(uint256 collectionId, address requester, address sourceArtist, uint256 price, string request);
  event CommissionSettled(uint256 collectionId, uint256 id, address requester, address sourceArtist);

  function requestCommission(uint256 collectionId, address sourceArtist, uint256 finishDate, string memory request) external payable {
    require(msg.value >= minPrice, "Below minimum cost");
    Commission memory commish = Commission(msg.value, sourceArtist, uint64(finishDate + deadlineMin));
    commissionInfo[collectionId][msg.sender] = commish;
    emit CommissionRequested(collectionId, msg.sender, sourceArtist, msg.value, request);
  }

  function settleCommission(uint256 collectionId, uint256 id, address requester, bytes32[] memory merkleProof) external {
    Commission memory commish = commissionInfo[collectionId][requester];
    uwudrop.nftMint{value: commish.price}(collectionId, id, commish.sourceArtist, true, requester, merkleProof);
    delete commissionInfo[collectionId][requester];
    emit CommissionSettled(collectionId, id, requester, commish.sourceArtist);
  }

  // Artist can refund requests, giving a full refund back to the requester.
  function refundCommissionRequest(uint256 collectionId, address requester) external {
    Commission memory commish = commissionInfo[collectionId][requester];
    require(commish.finishDate > 0, "No commission submitted");
    require(msg.sender == commish.sourceArtist, "Only artist can revoke");
    
    delete commissionInfo[collectionId][requester];
    sendValue(payable(requester), commish.price);
  }

  // Requester cancel commission request.
  function cancelCommissionRequest(uint256 collectionId) external {
    // Only the collector can redeem their expired commission request. 
    Commission memory commish = commissionInfo[collectionId][msg.sender];
    require(commish.finishDate > 0, "No commission submitted");
    
    delete commissionInfo[collectionId][msg.sender];
    sendValue(payable(msg.sender), 300*commish.price/400);
    sendValue(payable(commish.sourceArtist), 100*commish.price/400);
  }

  // Requester can redeem a full refund if their order has not been completed by the deadline.
  function redeemExpiredCommissionRequest(uint256 collectionId) external {
    // Only the collector can redeem their expired commission request. 
    Commission memory commish = commissionInfo[collectionId][msg.sender];
    require(commish.finishDate > 0, "No commission submitted");
    require(block.timestamp > commish.finishDate + deadlineMin, "After commission submit ");
    
    delete commissionInfo[collectionId][msg.sender];
    sendValue(payable(msg.sender), commish.price);
  }

  function sendValue(address payable recipient, uint256 amount) internal {
    require(address(this).balance >= amount, "Address: insufficient balance");

    // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
    (bool success, ) = recipient.call{ value: amount }("");
    require(success, "Address: unable to send value, recipient may have reverted");
  }
}