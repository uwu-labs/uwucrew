const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", primary.address);
  
  let UwUCrew = await ethers.getContractFactory("uwucrew");
  uwucrew = await UwUCrew.connect(primary).deploy("uwucrew", "UWU", 255);
  await uwucrew.deployed();

  let Sales = await ethers.getContractFactory("uwucrewWaveLockSale");
  salesContract = await Sales.connect(primary).deploy(uwucrew.address, primary.address, 1630729200, 40 /* sale count */, 0 /* swap count */, 5 /* lpAmount */); 
  await salesContract.deployed();
  await uwucrew.connect(primary).prepareSale(salesContract.address);

  console.log("uwucrew deployed to:", uwucrew.address);
  console.log("sales contract deployed to:", salesContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
