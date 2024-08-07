const { BigNumber } = require("@ethersproject/bignumber");
const { ethers } = require("hardhat");
const airdropInfo = require("../snapshots/4-easter-14604862.json");

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  console.log("Deploying account:", address);
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );
  
  const killerStamps = await ethers.getContractAt("UwuInsignia", "0x004097675a293be8d538258ad1a6e561304048f1")

  console.log("doneeee")
  let addresses = Object.keys(airdropInfo);
  let total = 0;
  for (let i = 0; i < addresses.length; i++) {
    total += airdropInfo[addresses[i]]
  }
  console.log("Total to send: ", total)

  // ID HERE
  let NFT_ID = 4;

  let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), "pending");
  console.log(nonce)
  let batchSize = 200;
  for (let i = 0; i < addresses.length; i += batchSize) {
    let sendAddresses = [];
    let sendIds = [];
    let sendAmounts = [];
    let max = i+batchSize > addresses.length ? addresses.length : i+batchSize
    let ids = Array(max-i).fill(NFT_ID)
    let batchBalances = await killerStamps.balanceOfBatch(addresses.slice(i, max), ids); 
    for (let ii = i; ii < max; ii++) {
      let balance = batchBalances[ii-i]
      let extraToMint = airdropInfo[addresses[ii]] > balance;
      if (!extraToMint) {
        continue
      }
      console.log(`Missed: ${addresses[ii]}: ${balance} vs. ${airdropInfo[addresses[ii]]}`)
      sendAddresses.push(addresses[ii])
      sendIds.push(NFT_ID)
      sendAmounts.push(airdropInfo[addresses[ii]])
    }
    if (sendAddresses.length == 0) {
      continue
    }
    console.log(i)
    console.log(sendAddresses.length)
    let tx = await killerStamps.mintManyUpTo(
      sendAddresses, sendIds, sendAmounts,
      {
        nonce: BigNumber.from(nonce),
        gasLimit: 12000000,
      }
    );
    await tx.wait();
    nonce++;

  }
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
