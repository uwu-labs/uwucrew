const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let UwUCrew = await ethers.getContractFactory("uwucrew");
  uwucrew = await UwUCrew.deploy("uwucrew", "UWU", 9670);
  await uwucrew.deployed();

  let Sales = await ethers.getContractFactory("uwucrewWaveLockSaleWithMint");
  // Total: 9670
  salesContract = await Sales.deploy(uwucrew.address, 10, 8000 /* sale count */, 1370 /* swap count */, 50 /* lpAmount */); 
  // Purposely leaving out 50 for team, and 200 for BSC.
  await salesContract.deployed();
  console.log("uwucrew deployed to:", uwucrew.address);
  console.log("sales contract deployed to:", salesContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
