// File: contracts/1155Distributor.sol

pragma solidity ^0.8.0;

import "../tokens/IERC1155.sol";

contract nft1155Distributor {

    address deployer;

    constructor() {
        deployer = msg.sender;
    }

    function send1155NFTs(address nft, address[] calldata receivers, uint256 id) external {
        require(msg.sender == deployer);
        for (uint256 i; i < receivers.length; i++) {
            uint256 currentBalance = IERC1155(nft).balanceOf(receivers[i], id);
			      if (currentBalance == 0) {
                IERC1155(nft).safeTransferFrom(msg.sender, receivers[i], id, 1, "");
            }
        }
    }

    function send1155NFTAmounts(address nft, address[] calldata receivers, uint256[] calldata amounts, uint256 id) external {
        require(receivers.length == amounts.length);
        require(msg.sender == deployer);
        for (uint256 i; i < receivers.length; i++) {
            IERC1155(nft).safeTransferFrom(msg.sender, receivers[i], id, amounts[i], "");
            uint256 currentBalance = IERC1155(nft).balanceOf(receivers[i], id);
			if (currentBalance < amounts[i]) {
				uint256 balanceToMint = amounts[i] - currentBalance;
                IERC1155(nft).safeTransferFrom(msg.sender, receivers[i], id, balanceToMint, "");
            }
        }
    }
}