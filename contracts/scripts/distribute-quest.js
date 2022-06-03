const { BigNumber } = require("@ethersproject/bignumber");
const { ethers, upgrades } = require("hardhat");
const airdropInfo1155 = require("./results.json");

let stampIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  console.log("Deploying account:", address);
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );
  
  const Quest = await ethers.getContractFactory('UwuQuestStampsUpgradeable');
  const uwuQuest = await upgrades.deployProxy(
    Quest, 
    [
      "ipfs://",
    ],
    {
      initializer: "__UwuQuestStampsUpgradeable_init",
      unsafeAllow: 'delegatecall'
    }

  );
  await uwuQuest.deployed();

  console.log(`deployed uwu quest: ${uwuQuest.address}`)

  const MultiProxy = await ethers.getContractFactory('MultiProxyController');
  const multiProxy = await MultiProxy.deploy(["Quest"], [uwuQuest.address]);
  await multiProxy.deployed();
  
  await upgrades.admin.changeProxyAdmin(uwuQuest.address, multiProxy.address);

  console.log(`deployed multi proxy manager: ${multiProxy.address}`)

  for (let i = 0; i < stampIds.length; i++) {
    await uwuQuest.initializeStamp(address, stampIds[i], 3, `QmSLuUnkE5EEv5dTANpNvrMEjbD4yvD8K9aNgPYuPaerF1/${i}`);
  }

  // const uwuQuest = await ethers.getContractAt("uwuQuestStampsUpgradeable", "0x004097675a293be8d538258ad1a6e561304048f1")

  console.log("doneeee")

  return

  let addresses = Object.keys(airdropInfo1155);
  // let total = 0;
  // for (let i = 0; i < addresses.length; i++) {
  //   total += airdropInfo1155[addresses[i]]
  // }
  // console.log("Total to send: ", total)
  let totalCosts = BigNumber.from(0)
  let txCount = 0;
  // ID HERE
  let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), "pending");
  console.log(nonce)
  let batchSize = 45;
  for (let i = 0; i < addresses.length; i++) {
    let sendAddresses = [];
    let sendIds = [];
    let sendAmounts = [];

    let start = i;

    // if adding this item passes the max, do another tx
    let max = batchSize;
    while (sendIds.length < max) {
      let userInfo = airdropInfo1155[addresses[i]];
      let clonedAddresses = Array(userInfo.ids.length).fill(addresses[i])
      sendAddresses.push(...clonedAddresses);
      sendIds.push(...userInfo.ids);
      sendAmounts.push(...userInfo.amounts);
      if (i+1 == addresses.length) 
        break
      i++
      userInfo = airdropInfo1155[addresses[i]];
      max = sendAddresses.length + userInfo.ids.length > batchSize ? sendAddresses.length : batchSize;
    }
    if (sendAddresses.length == 0) {
      continue
    }
    // console.log(i)
    // console.log(max)
    // console.log(sendAddresses)
    // console.log(sendIds)
    // console.log(sendAmounts)

    let estimate = await uwuQuest.estimateGas.mintMany(
      sendAddresses, sendIds, sendAmounts,
      {
        nonce: BigNumber.from(nonce),
      }
    );
    let tx = await uwuQuest.mintMany(
      sendAddresses, sendIds, sendAmounts,
      {
        nonce: BigNumber.from(nonce),
        gasLimit: estimate,
        gasPrice: 20000000000,
      }
    );

    totalCosts = totalCosts.add(tx.gasLimit.mul(tx.gasPrice))
    txCount++;
    console.log(`Gas limit for sending stamps for ${sendAddresses.length} stamps: ${tx.gasLimit.toString()}`)
    console.log(`Gas price: ${ethers.utils.formatUnits(tx.gasPrice.toString(), "gwei")} gwei`)
    console.log(`Total fee for sending to ${i - start} holders: ${ethers.utils.formatEther(tx.gasLimit.mul(tx.gasPrice).toString())} ETH`)
    await tx.wait();
    nonce++;
    console.log(tx.hash)
  }

  console.log(`Total fee for sending all stamps in ${txCount} transactions: ${ethers.utils.formatEther(totalCosts.toString())} ETH`)
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
