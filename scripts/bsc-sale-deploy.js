const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", primary.address);

  let Sales = await ethers.getContractFactory("uwucrewBSCWaveLockSale");
  salesContract = await Sales.connect(primary).deploy(
    1630729800, 
    200
  ); 
  // Purposely leaving out 50 for team, and 200 for BSC.
  await salesContract.deployed();
  console.log("sales contract deployed to:", salesContract.address);

  console.log("sale owner:", await salesContract.owner());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
