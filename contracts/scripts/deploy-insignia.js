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

  await uwui.initializeStamp("0x534E430ab0B423a346097236b589Dd6862d13Fc6", 5, "QmSn6r3UtGUASmBzgrukLWBbeAC1FnKUPuFMar9NYqZbM1", {gasLimit: 160000})


  // await uwui.setTokenURI(1, "QmSGA8nh2FVWM2YgaU1K152XxYGn5CL1vnkkj6bhmVwbPW", {gasLimit: 160000})
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
