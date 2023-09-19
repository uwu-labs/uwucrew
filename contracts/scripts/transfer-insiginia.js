const { BigNumber } = require("@ethersproject/bignumber");
const { ethers } = require("hardhat");
// const airdropInfo = require("../snapshots/1-lunar-new-year-14132971.json");

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  console.log("Deploying account:", address);
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );

  const insignia = await ethers.getContractAt("UwuInsignia", "0xB2630e52FAAF487d277CabE213CD56BDcA17Ca11");

  let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), "pending");
  console.log(nonce)
  let tx = await insignia.adminTransferMany(
    [
      "0x4300333A99d3419b1E9cFCA9191a8a837FaC2Bd8",
    ],
    [
      "0xeeB66bc85aBc68Af8A06A70A5B544D7b285321d0",
    ],
    [
      "0",
    ],
    [
      "1",
    ],
    {
      nonce: nonce,
      gasLimit: 7000000,
    }
  );
  await tx.wait();

}

main()
  .then(() => {
    console.log("\nDeployment completed successfully ✓");
    process.exit(0);
  })
  .catch((error) => {
    console.log("\nDeployment failed ✗");
    console.error(error);
    process.exit(1);
  });
