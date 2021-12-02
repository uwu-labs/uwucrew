const { ethers } = require("hardhat");
const hre = require("hardhat");

const json = require("../eth_addrs.json");

async function main() {
  let signers = await ethers.getSigners();
  let primary = signers[0];

  console.log("deploying from: ", primary.address);
  let sale = await ethers.getContractAt("uwucrewWaveLockSale", "0x5E75Bc35955F9E196e5bb25ddDE09424B476a18D");

  let allContributorsEth = json;
  let allContributorsBalance = [];
  for (let i = 0; i < allContributorsEth.length-1; i++) {
    allContributorsBalance.push((await sale.balance(allContributorsEth[i])).toString())
  }

  for (let i = 0; i < allContributorsBalance.length-1; i++) {
    if (allContributorsBalance[i] == "0") {
      continue
    }
    console.log(`${allContributorsEth[i]},${Number(allContributorsBalance[i])*0.06}`)
  }

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
