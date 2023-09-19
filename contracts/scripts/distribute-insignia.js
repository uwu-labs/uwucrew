const { BigNumber } = require("@ethersproject/bignumber");
const { ethers } = require("hardhat");
// const airdropInfo2 = require("../snapshots/waifu-12092465.json");
const airdropInfo = require("../snapshots/insignias/bluebunny.json");

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  console.log("Deploying account:", address);
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );
  
  // TODO: MAKE SURE USING RIGHT KEY AND JSON TO DISTRO

  const insignia = await ethers.getContractAt("UwuInsignia", "0xB2630e52FAAF487d277CabE213CD56BDcA17Ca11");

  console.log("doneeee")
  let addresses = Object.keys(airdropInfo);
  let total = 0;
  for (let i = 0; i < addresses.length; i++) {
    total += airdropInfo[addresses[i]]
  }
  console.log("Total to send: ", total)

  
  // ID HERE AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH ID HERE
  let NFT_ID = 5;

  let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), "pending");
  console.log(nonce)
  let batchSize = 100;
  for (let i = 0; i < addresses.length; i += batchSize) {
    let sendAddresses = [];
    let sendIds = [];
    let sendAmounts = [];
    let max = i+batchSize > addresses.length ? addresses.length : i+batchSize
    let ids = Array(max-i).fill(NFT_ID)
    for (let ii = i; ii < max; ii++) {
      // let balance = batchBalances[ii-i]
      // let extraToMint = airdropInfo[addresses[ii]] > balance;
      // if (!extraToMint) {
      //   continue
      // }
      // console.log(`Missed: ${addresses[ii]}: ${0} vs. ${airdropInfo[addresses[ii]]}`)
      sendAddresses.push(addresses[ii])
      sendIds.push(NFT_ID)
      // sendAmounts.push(airdropInfo[addresses[ii]])
      sendAmounts.push(1)
    }
    if (sendAddresses.length == 0) {
      continue
    }
    console.log(i)
    console.log(sendAddresses.length)
    let tx = await insignia.mintManyUpTo(
      sendAddresses, sendIds, sendAmounts,
      {
        nonce: BigNumber.from(nonce),
        gasLimit: 5000000,
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
