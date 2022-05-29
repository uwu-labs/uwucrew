// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../tokens/IERC20.sol";
import "../tokens/IERC721Enumerable.sol";
import "../utils/Ownable.sol";
import "../utils/ReentrancyGuard.sol";
import "../utils/MerkleProof.sol";

interface Minter {
  function MAX_UWU() external view returns (uint256);
  function mint(address to, uint256 tokenId) external;
}

contract NFTMerkleDistributor {
    address public immutable nft;
    bytes32 public immutable merkleRoot;

    mapping(address => uint256) public mintedPerAccount;

    // This is a packed array of booleans.
    mapping(uint256 => uint256) private claimedBitMap;

    // This event is triggered whenever a call to #claim succeeds.
    event Claimed(uint256 index, address account, uint256 amount);

    constructor(address nft_, bytes32 merkleRoot_) public {
        nft = nft_;
        merkleRoot = merkleRoot_;
    }

    function isClaimed(uint256 index) public view returns (bool) {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        uint256 claimedWord = claimedBitMap[claimedWordIndex];
        uint256 mask = (1 << claimedBitIndex);
        return claimedWord & mask == mask;
    }

    function _setClaimed(uint256 index) private {
        uint256 claimedWordIndex = index / 256;
        uint256 claimedBitIndex = index % 256;
        claimedBitMap[claimedWordIndex] = claimedBitMap[claimedWordIndex] | (1 << claimedBitIndex);
    }

    function claim(uint256 index, address account, uint256 amount, uint256 amountToMint, bytes32[] calldata merkleProof) external {
        require(!isClaimed(index), 'MerkleDistributor: Drop already claimed.');

        // Verify the merkle proof.
        bytes32 node = keccak256(abi.encodePacked(index, account, amount));
        require(MerkleProof.verify(merkleProof, merkleRoot, node), 'MerkleDistributor: Invalid proof.');

        uint256 newMinted = mintedPerAccount[account] + amountToMint; 
        require(newMinted <= amount, "Trying to mint too many");
        mintedPerAccount[account] += amountToMint;
        if (mintedPerAccount[account] == amount) {
          _setClaimed(index);
        }
        
        uint256 supply = IERC721Enumerable(nft).totalSupply();
        for (uint256 i = 0; i < amountToMint; i++) {
            Minter(nft).mint(account, supply+i);
        }
        emit Claimed(index, account, amountToMint);
    }
}