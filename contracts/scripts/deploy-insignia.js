const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", await primary.getAddress());
  
  // let UWUI = await ethers.getContractFactory("uwuInsignia");
  // let uwui = await UWUI.deploy("ipfs://");
  // await uwui.deployed();
  // console.log(`Deployed to: ${uwui.address}`)

  let uwui = await ethers.getContractAt("UwuInsignia", "0xb2630e52faaf487d277cabe213cd56bdca17ca11");
  await uwui.deployed();
  console.log(`Deployed to: ${uwui.address}`)

  await uwui.initializeStamp("0x08d816526bdc9d077dd685bd9fa49f58a5ab8e48", 0, "QmSPk5xnSGfZe8PphRJpJju42DZjRyoFkcpQgXdDQ9Lwna", {gasLimit: 160000})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
