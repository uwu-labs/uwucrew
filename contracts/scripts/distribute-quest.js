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
  
  const uwuQuest = await ethers.getContractAt("UwuQuestStampsUpgradeable", "0xcEc3597d2fDdd38339D26D5097691Ad29330456d");

  // const Quest = await ethers.getContractFactory('UwuQuestStampsUpgradeable');
  // const uwuQuest = await upgrades.deployProxy(
  //   Quest, 
  //   [
  //     "ipfs://",
  //   ],
  //   {
  //     initializer: "__UwuQuestStampsUpgradeable_init",
  //     unsafeAllow: 'delegatecall'
  //   }

  // );
  // await uwuQuest.deployed();

  console.log(`deployed uwu quest: ${uwuQuest.address}`)

  // const multiProxy = await ethers.getContractAt('MultiProxyController', '0x9e760d89751345a6c8c09EdA98EF296bCA90Eed8');
  // const MultiProxy = await ethers.getContractFactory('MultiProxyController');
  // const multiProxy = await MultiProxy.deploy(["Quest"], [uwuQuest.address]);
  // await multiProxy.deployed();

  // console.log(`deployed multi proxy manager: ${multiProxy.address}`)

  // await upgrades.admin.changeProxyAdmin(uwuQuest.address, multiProxy.address);


  // let multisig = "0x354A70969F0b4a4C994403051A81C2ca45db3615";

  // for (let i = 0; i < stampIds.length; i++) {
  //   let tx = await uwuQuest.initializeStamp(multisig, stampIds[i], 3, `QmQQkCeD2EXEuuVUSH3Uu5ZSvfrHK27Z14AppSJF9z9ZJY/${stampIds[i]}.json`);
  //   await tx.wait()
  //   console.log(`Initialized Stamp #${stampIds[i]}`)
  // }

  // const uwuQuest = await ethers.getContr3actAt("uwuQuestStampsUpgradeable", "0x004097675a293be8d538258ad1a6e561304048f1")

  console.log("doneeee")

  // return

  let fixAddrs = [
    "0x2f2fce05bd2480c80f299b5be4c5db3d7e79959f",
    "0x7e7a55b11dd9a02b4da169620adfc36b930100fc",
    "0xe0c71f6c2fea87f2155de000e090b09f65d361df",
    "0x1b41ce1a2d4088e8e8d0321ecc20355119a841d1",
    "0xe3f27deff96fe178e87559f36cbf868b9e75967d",
    "0x0b6c716672ccf260ac97cad01c30abdf7016bc2a",
    "0xcd4e39bc20cd5fdca33b8ad2f3141f8e2dcf0cce",
    "0x5a8fa647eee27e78d7ab17b5930d9f654e9edcc8",
    "0xc6941e6bc40b43aaac49bc6c2d3c123da105991e",
    "0xb618aacb9dcdc21ca69d310a6fc04674d293a193",
  ]

  let addresses = fixAddrs;
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
      console.log(i, addresses[i], userInfo.ids, userInfo.amounts, (await uwuQuest.balanceOf(addresses[i], userInfo.ids[0])).toString())
      if (i+1 == addresses.length) 
        break
      i++
      userInfo = airdropInfo1155[addresses[i]];
      max = sendAddresses.length + userInfo.ids.length > batchSize ? sendAddresses.length : batchSize;
    }
    if (sendAddresses.length == 0) {
      continue
    }
    // console.log(max)
    // console.log(sendAddresses)
    // console.log(sendIds)
    // console.log(sendAmounts)

    let tx = await uwuQuest.mintManyUpTo(
      sendAddresses, sendIds, sendAmounts,
      {
        nonce: BigNumber.from(61),
        gasLimit: 2000000,
        gasPrice: 90000000000,
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
