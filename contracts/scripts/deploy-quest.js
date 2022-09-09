const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", await primary.getAddress());
  
  let uwuqs = await ethers.getContractAt("UwuQuestStampsUpgradeable", "0xcec3597d2fddd38339d26d5097691ad29330456d");
  console.log(`Deployed to: ${uwuqs.address}`)

  await uwuqs.initializeStamp("0x08d816526bdc9d077dd685bd9fa49f58a5ab8e48", 10, 1, "QmWCCkQM581GUFvcWD4d1eATgQzPCM8Mfe7Ao6ZWjVGC6D", {gasLimit: 160000})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
