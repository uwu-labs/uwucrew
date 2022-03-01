pragma solidity ^0.8.0;

interface IGetRoyalties {
  function getRoyalties(uint256 tokenId)
    external
    view
    returns (address payable[] memory recipients, uint256[] memory feesInBasisPoints);
}

/**
 * @notice An interface for communicating fees to 3rd party marketplaces.
 * @dev Originally implemented in mainnet contract 0x44d6e8933f8271abcf253c72f9ed7e0e4c0323b3
 */
interface IGetFees {
  function getFeeRecipients(uint256 id) external view returns (address payable[] memory);

  function getFeeBps(uint256 id) external view returns (uint256[] memory);
}

interface ITokenCreator {
  function tokenCreator(uint256 tokenId) external view returns (address payable);
}

interface ITokenCreatorPaymentAddress {
  function getTokenCreatorPaymentAddress(uint256 tokenId)
    external
    view
    returns (address payable tokenCreatorPaymentAddress);
}