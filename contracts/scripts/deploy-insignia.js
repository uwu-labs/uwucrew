const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", await primary.getAddress());
  
  let UWUI = await ethers.getContractFactory("uwuInsignia");
  let uwui = await UWUI.deploy("ipfs://");
  await uwui.deployed();
  console.log(`Deployed to: ${uwui.address}`)

  await uwui.initializeStamp(1, "QmU3xyVdEvePgcgX1s54YTgFgkh2LfBE7wjrwNfeoyAHgK", {gasLimit: 160000})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
