pragma solidity ^0.8.0;

import "./interfaces/IuwudropShared.sol";

// Isolated commission contract that builds on top of uwudrop.
//
// Lets us handle commission escrow, commission deadlines, 
contract uwudropCommissionEscrow {

  IuwudropShared uwudrop;

  constructor(address _uwudrop) {
    uwudrop = IuwudropShared(_uwudrop);
  }

  struct Commission {
    uint256 price;
    address sourceArtist;
    uint48 deadline;
  }

  mapping(uint256 => mapping(address => Commission)) commissionInfo;

  event CommissionSubmitted(uint256 collectionId, address requester, address sourceArtist, string request);

  function makeCommission(uint256 collectionId, address requester, address sourceArtist, string memory request) external payable {
    emit CommissionSubmitted(collectionId, requester, sourceArtist, request);
  }


  function settleCommission(uint256 collectionId, uint256 id, address requester, bytes32[] memory merkleProof) external {
    Commission memory commish = commissionInfo[collectionId][requester];
    uwudrop.nftMint(collectionId, id, commish.price, commish.sourceArtist, true, requester, merkleProof);
  }

  function refundCommission(uint256 collectionId) external {
    // require(commmissionDeadlines[collectionId][msg.sender] > 0, "No commission submitted");
  }

  function retractCommission(uint256 collectionId) external {
    // require(commmissionDeadlines[collectionId][msg.sender] > 0, "No commission submitted");
  }
}