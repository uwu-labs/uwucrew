pragma solidity ^0.8.0;

import "./tokens/IERC20.sol";
import "./tokens/IERC721Enumerable.sol";
import "./utils/MerkleProof.sol";

interface Iuwucrew is IERC721Enumerable {
  function lastTransferTimestamp(uint256 tokenId) external view returns (uint256);
  function cumulativeHODL(address who) external view returns (uint256);
}

contract uwuLoot {
    uint256 constant MAX_NFTS = 9670;

    Iuwucrew public immutable nft;
    bytes32 public immutable dataMerkleRoot;

     // This is a packed array of uint8 .
    mapping(uint256 => uint256) public registry;

    string[] public backgrounds = [
      "Blush",
      "Gray",
      "Hot Pink",
      "Lavender",
      "Marsh",
      "Ocean",
      "Orange",
      "Pink",
      "Rose",
      "Ruby",
      "Sky"
    ];

    string[] public skins = [
      "Blushing",
      "Freckled",
      "Bronze",
      "Sepia"
    ];

    string[] public outfits = [
      "White Tanktop",
      "Baka Tee",
      "Green Tanktop",
      "White Dress",
      "Petite Gym",
      "Zipper Top",
      "Busty Gym",
      "Black Dress",
      "Bored Tee",
      "Hoodie",
      "Orange Sweater",
      "Jersey",
      "Designer",
      "YFI Tee",
      "Occult Dress",
      "Dapper",
      "Qipao",
      "Kimono",
      "Military Coat",
      "NFTX Hoodie",
      "Biker",
      "Wagie",
      "Pink Overalls",
      "Baelien",
      "Stealth Dress",
      "Racer",
      "Admiral",
      "Queen",
      "Bunny",
      "Black Suit",
      "Mechsuit",
      "Armor"
    ];

    string[] public rightAccessories = [
      "No Right Accessory",
      "Boba",
      "Sushi",
      "Pizza",
      "Basketball",
      "Pancakes",
      "Katana",
      "Blue Fire",
      "Giant Sword",
      "Gold Scythe"
    ];

    string[] public leftAccessories = [
      "No Left Accessory",
      "Peace Hand",
      "Lollipop",
      "DEFI NOTE",
      "Doggo",
      "Skulls",
      "Fomo Doll",
      "Fren",
      "Cyborg Arm",
      "Gold Claws",
      "Brown Doggo"
    ];

    string[] public hairs = [
      "Blonde Ponytail",
      "Rose Ponytail",
      "Blonde Long",
      "Brown Short Bangs",
      "Black Short Bangs",
      "Black Pixie",
      "Black Braids",
      "Blonde Twintails",
      "Purple Messy",
      "Orange Long Bangs",
      "Purple Braids",
      "Pink Messy",
      "Silver Pixie",
      "Blue Short Bangs",
      "Pink Twintails",
      "Turquoise Twintails",
      "White Long Bangs",
      "Rainbow Braids",
      "Black Long Bangs"
    ];

    string[] public hats = [
      "No Hat",
      "Black Bow",
      "Pink Bow",
      "Hibiscus Flower",
      "Elf Ears",
      "Bone Pins",
      "Horns",
      "Flower Crown",
      "Alien Antenna",
      "Demon Horns",
      "Mr. Whiskers",
      "Fox Mask",
      "Floor Cap",
      "Occult Hat",
      "Ornate Flower",
      "Wagie Cap",
      "Bunny Ears",
      "Admiral's Hat",
      "Queen's Crown",
      "Hair Bands"
    ];

    string[] public eyes = [
      "Round Glasses",
      "Blue Neutral",
      "Green Wink",
      "Eyepatch",
      "Green Determined",
      "Relaxed",
      "Gold Determined",
      "Purple Neutral",
      "Closed",
      "Pink Wink",
      "Hypnotized",
      "Dual Color Neutral",
      "Lovey Dovey",
      "Pink Glasses",
      "Heterochromia Determined",
      "Blindfold",
      "Heterochromia Neutral",
      "Shades",
      "Gold Shades"
    ];

    string[] public mouths = [
      "Content Smile",
      "uwu",
      "Grin",
      "Playful",
      "Pout",
      "Hmph",
      "Tongue Out",
      "Lipstick",
      "Open Mouth",
      "Yelling",
      "Bubblegum",
      "Black Mask"
    ];
        
    string[] public suffixes = [
        "of uwu",
        "of owo",
        "of Cringe",
        "of Skill",
        "of Perfection",
        "of Brilliance",
        "of Enlightenment",
        "of Protection",
        "of Anger",
        "of Rage",
        "of Fury"
    ];

    constructor(address nft_, bytes32 merkleRoot_) {
        nft = Iuwucrew(nft_);
        dataMerkleRoot = merkleRoot_;
    }

    function registerNFT(uint256 id, uint256 data, bytes32[] memory merkleProof) public {
      require(registry[id] == 0, 'MerkleDistributor: Drop already claimed.');

      // Verify the merkle proof.
      bytes32 node = keccak256(abi.encodePacked(address(this), id, data));
      require(MerkleProof.verify(merkleProof, dataMerkleRoot, node), 'MerkleDistributor: Invalid proof.');

      // Adding one on the right-most bit
      registry[id] = data + 1;
    }

    function registerNFTs(uint256[] calldata ids, uint256[] calldata allData, bytes32[][] calldata merkleProofs) external {
      require(merkleProofs.length == ids.length, "Not equal proofs");
      require(allData.length == ids.length, "Not equal data");
      for (uint256 i = 0; i < ids.length; i++) {
        registerNFT(ids[i], allData[i], merkleProofs[i]);
      }
    }

    function allTokenIdsHeldBy(address who) external view returns (uint256[] memory) {
      Iuwucrew _nft = Iuwucrew(nft);
      uint256 balance = _nft.balanceOf(who);
      uint256[] memory tokensHeld = new uint256[](balance);
      for (uint256 i = 0; i < balance; i++) {
        tokensHeld[i] = _nft.tokenOfOwnerByIndex(who, i);
      }
      return tokensHeld;
    }

    function allTokenTimestampsHeldBy(address who) external view returns (uint256[] memory) {
      Iuwucrew _nft = Iuwucrew(nft);
      uint256 balance = _nft.balanceOf(who);
      uint256[] memory tokenTimestamps = new uint256[](balance);
      for (uint256 i = 0; i < balance; i++) {
        tokenTimestamps[i] = _nft.lastTransferTimestamp(_nft.tokenOfOwnerByIndex(who, i));
      }
      return tokenTimestamps;
    }

    function getAllLoot(uint256 tokenId) external view returns (string[] memory) {
      require(tokenId < MAX_NFTS);
      string[] memory allLoot = new string[](9);
      uint256 registryData = registry[tokenId];
      allLoot[0] = _getBackground(registryData);
      allLoot[1] = _getSkin(registryData);
      allLoot[2] = _getOutfit(registryData);
      allLoot[3] = _getRightAccessory(registryData);
      allLoot[4] = _getLeftAccessory(registryData);
      allLoot[5] = _getHair(registryData);
      allLoot[6] = _getHat(registryData);
      allLoot[7] = _getEyes(registryData);
      allLoot[8] = _getMouth(registryData);
      return allLoot;
    }

    function getAllRegistryIndexes(uint256 tokenId) external view returns (uint256[] memory) {
      require(tokenId < MAX_NFTS);
      uint256[] memory allIndexes = new uint256[](9);
      uint256 registryData = registry[tokenId];
      allIndexes[0] = registryData >> 248;
      allIndexes[1] = uint256(uint8(registryData >> 240));
      allIndexes[2] = uint256(uint8(registryData >> 232));
      allIndexes[3] = uint256(uint8(registryData >> 224));
      allIndexes[4] = uint256(uint8(registryData >> 216));
      allIndexes[5] = uint256(uint8(registryData >> 208));
      allIndexes[6] = uint256(uint8(registryData >> 200));
      allIndexes[7] = uint256(uint8(registryData >> 192));
      allIndexes[8] = uint256(uint8(registryData >> 184));
      return allIndexes;
    }

    function getBackground(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      require(uint8(registryData) != 0);
      return _getBackground(registryData);
    }

    function getSkin(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getSkin(registryData);
    }

    function getOutfit(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getOutfit(registryData);
    }

    function getRightAccessory(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getRightAccessory(registryData);
    }

    function getLeftAccessory(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getLeftAccessory(registryData);
    }

    function getHair(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getHair(registryData);
    }

    function getHats(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getHat(registryData);
    }

    function getEyes(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getEyes(registryData);
    }

    function getMouth(uint256 tokenId) external view returns (string memory) {
      require(tokenId < MAX_NFTS);
      uint256 registryData = registry[tokenId];
      return _getMouth(registryData);
    }

    function _getBackground(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = registryData >> 248;
      return backgrounds[dataIndex];
    } 

    function _getSkin(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 240));
      return skins[dataIndex];
    } 

    function _getOutfit(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 232));
      return outfits[dataIndex];
    } 

    function _getRightAccessory(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 224));
      return rightAccessories[dataIndex];
    } 

    function _getLeftAccessory(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 216));
      return leftAccessories[dataIndex];
    } 

    function _getHair(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 208));
      return hairs[dataIndex];
    } 

    function _getHat(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 200));
      return hats[dataIndex];
    } 

    function _getEyes(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 192));
      return eyes[dataIndex];
    } 

    function _getMouth(uint256 registryData) internal view returns (string memory) {
      uint256 dataIndex = uint256(uint8(registryData >> 184));
      return mouths[dataIndex];
    } 
}