const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {

  let UwUCrew = await ethers.getContractFactory("uwucrew");
  uwucrew = await UwUCrew.deploy("uwucrew", "UWU", 9670);
  await uwucrew.deployed();

  let Sales = await ethers.getContractFactory("uwucrewWaveLockSaleWithMint");
  salesContract = await Sales.deploy(uwucrew.address, 10, 8000 /* sale count */, 1350 /* swap count */, 70 /* lpAmount */);
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
