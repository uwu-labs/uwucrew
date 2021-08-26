const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", primary);
  
  let UwUCrew = await ethers.getContractFactory("uwucrew");
  uwucrew = await UwUCrew.connect(primary).deploy("uwucrew", "UWU", 9670);
  await uwucrew.deployed();

  let Sales = await ethers.getContractFactory("uwucrewWaveLockSaleWithMint");
  // Total: 9670
  salesContract = await Sales.connect(primary).deploy(uwucrew.address, primary.address, 10, 8000 /* sale count */, 1370 /* swap count */, 50 /* lpAmount */); 
  // Purposely leaving out 50 for team, and 200 for BSC.
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
