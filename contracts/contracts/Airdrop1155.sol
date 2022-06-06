// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./tokens/ERC1155URIStorage.sol";
import "./tokens/IERC20.sol";
import "./utils/Ownable.sol";
import "./utils/Strings.sol";

contract Airdrop1155 is ERC1155URIStorage, Ownable {
	using Strings for string;

	string public name;
	string public symbol;

	constructor(string memory name_, string memory symbol_, string memory uri_) ERC1155(uri_) {
		name = name_;
		symbol = symbol_;
	}

	function setURI(string memory uri_) external onlyOwner {
		_setURI(uri_);
	}

	function setTokenURI(uint256 tokenId, string memory _tokenURI) external onlyOwner {
		_setTokenURI(tokenId, _tokenURI);
	}

	function initializeAirdrop(uint256 tokenId, string memory _tokenURI) public onlyOwner {
		require(!exists(tokenId), "Airdrop1155: Airdrop already exists");
		_mint(msg.sender, tokenId, 1, "");
		_setTokenURI(tokenId, _tokenURI);
	}

	function mint(address to, uint256 id, uint256 amount) public onlyOwner {
			require(bytes(_tokenURIs[id]).length != 0, "Not initialized");
		_mint(to, id, amount, "");
	}

	function burn(address to, uint256 id, uint256 amount) public onlyOwner {
		_burn(to, id, amount);
	}

	// Mints up to a given balance, 
	function mintManyUpTo(address[] memory receivers, uint256[] memory ids, uint256[] memory amounts) public onlyOwner {
		require(receivers.length == ids.length, "Wrong length 1");
		require(ids.length == amounts.length, "Wrong length 2");
		for (uint256 i; i < receivers.length; i++) {
			require(bytes(_tokenURIs[ids[i]]).length != 0, "Not initialized");
			uint256 currentBalance = balanceOf(receivers[i], ids[i]);
			if (currentBalance < amounts[i]) {
				uint256 balanceToMint = amounts[i] - currentBalance;
				_mint(receivers[i], ids[i], balanceToMint, "");
			}
		}
	}

	function burnMany(address[] memory receivers, uint256[] memory ids, uint256[] memory amounts) public onlyOwner {
		require(receivers.length == ids.length, "Wrong length 1");
		require(ids.length == amounts.length, "Wrong length 2");
		for (uint256 i; i < receivers.length; i++) {
			_burn(receivers[i], ids[i], amounts[i]);
		}
	}

	function burnManyFull(address[] memory receivers, uint256[] memory ids) public onlyOwner {
		require(receivers.length == ids.length, "Wrong length 1");
		for (uint256 i; i < receivers.length; i++) {
			uint256 currentBalance = balanceOf(receivers[i], ids[i]);
			_burn(receivers[i], ids[i], currentBalance);
		}
	}
}