import { ethers } from "hardhat";

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", await primary.getAddress());
  
  // USE THE BELOW CODE TO DEPLOY YOUR FIRST AIRDROP CONTRACT AND CHANGE THE NAME AND SYMBOL, BASE URI SHOULDNT NEED TO BE  CHANGED

  // let Airdrop1155 = await ethers.getContractFactory("Airdrop1155");
  // let airdrop = await Airdrop1155.deploy("uwucrew extras", "EXTRA", "ipfs://");
  // await airdrop.deployed();
  // console.log("Airdrop deployed: ", airdrop.address);

  // CHECK YOU ARE USING CORRECT PRIV KEY AND ADDR 

  // USE THIS BELOW CODE TO INITIAILIZE AN AIRDROP NFT IN ORDER TO SET ITS METADATA AND MINT FOR OTHERS. PARAMETERS ARE TOKEN ID, AND IPFS HASH
  
  let airdrop = await ethers.getContractAt("Airdrop1155", "0x918EAa82Ee6F07e46c82D04e34ebC352A56317C2"); // uwucrew
  // let airdrop = await ethers.getContractAt("Airdrop1155", "0xa3b041ee6b56bccbc54a3048417d82fe67736f62"); // persona lamps
  // let tx1 = await airdrop.initializeAirdrop(0, "QmX92tTuRvXKgsLa5L8g8sapeqgYddinCKmkhPAHnpKGAB", {gasLimit: 160000})
  // await tx1.wait();
  let tx2 = await airdrop.initializeAirdrop(4, "QmXNPwUMbMSFN1BzXcDhGn12zqTV4o3BDhGAb5Jssr9HDg", {gasLimit: 160000})
  await tx2.wait()
  console.log("Airdrop initialized");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
