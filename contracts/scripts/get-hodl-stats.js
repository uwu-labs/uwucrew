const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs").promises;

const { Contract, Provider } = require('ethers-multicall');

const holders = require("./uwu-holders.json");

const provider = new ethers.providers.AlchemyProvider('homestead', process.env.ALCHEMY_ETH_KEY);

const daiAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';

async function generate() {
  let uwucrew = await ethers.getContractAt("uwucrew", "0xf75140376d246d8b1e5b8a48e3f00772468b3c0c");
  console.log(`Check holders of: ${uwucrew.address}`)

  const ethcallProvider = new Provider(provider);

  await ethcallProvider.init(); // Only required when `chainId` is not provided in the `Provider` constructor

  const uwucrewMulti = new Contract("0xf75140376d246d8b1e5b8a48e3f00772468b3c0c", uwucrew.interface.fragments);

  let batchSize = 30;
  // let fullResults = {};

  // for (let i = 0; i < 200; i += batchSize) {
  //   console.log(`Checking ${i} - ${i + batchSize}`)
  //   let timestampCalls = [];
  //   let max = i + batchSize > 9670 ? 9670 : i + batchSize;
  //   for (let id = i; id < max; id++) {
  //     timestampCalls.push(uwucrewMulti.lastTransferTimestamp(id));
  //   }
  //   const timestampsPerID = await ethcallProvider.all(timestampCalls);
  //   for (let ii = 0; ii < timestampsPerID.length; ii++) {
  //     fullResults[`${i + ii}`] = timestampsPerID[ii].toNumber();
  //     console.log(`${i+ii}: ${fullResults[ii]}`)
  //   }
  // } 

  // await fs.writeFile("./results/nfttimestamps.json", JSON.stringify(fullResults));
  console.log("NFT Timestamps Collected")

  const uwuHolders = Object.keys(holders);
  let hodlStats = {};

  for (let i = 0; i < uwuHolders.length; i += batchSize) {
    console.log(`Checking ${i} - ${i + batchSize}`)
    let hodlStatsCalls = [];
    let addrsCalled = [];
    let max = i + batchSize > uwuHolders.length ? uwuHolders.length : i + batchSize;
    for (let id = i; id < max; id++) {
      hodlStatsCalls.push(uwucrewMulti.cumulativeHODL(uwuHolders[id]));
      addrsCalled.push(uwuHolders[id])
    }
    const hodlStatsPerAddr = await ethcallProvider.all(hodlStatsCalls);
    for (let ii = 0; ii < addrsCalled.length; ii++) {
      hodlStats[addrsCalled[ii]] = hodlStatsPerAddr[ii].toNumber();
    }
  } 

  const jsonAsArray = Object.keys(hodlStats).map(function (key) {
    return { address: key, hodlTime: hodlStats[key]};
  })
  .sort(function (itemA, itemB) {
    return itemA.hodlTime < itemB.hodlTime;
  });

  await fs.writeFile("./scripts/results/hodlstats.json", JSON.stringify(jsonAsArray));
  console.log("Hodl Stats Collected")

  // Adjusted hodl time for currently held uwus

  for (let i = 0; i < uwuHolders.length; i += batchSize) {
    console.log(`Checking adjusted hodl time ${i} - ${i + batchSize}`)
    let max = i + batchSize > uwuHolders.length ? uwuHolders.length : i + batchSize;

    let balanceCalls = [];
    let usersCalled = [];
    for (let id = i; id < max; id++) {
      balanceCalls.push(uwucrewMulti.balanceOf(uwuHolders[id]));
      usersCalled.push(uwuHolders[id]);
    }

    const curBalances = await ethcallProvider.all(balanceCalls);
    for (let userId = 0; userId < usersCalled.length; userId++) {
      let adjustedHodl = 0;

      let userBal = curBalances[userId];

      let hodldIdsPerAddr = [];

      let idBatch = 20;
      for (let id = 0; id < userBal; id += idBatch) {
        let longedHodlIdCalls = [];
        let max = id + idBatch > userBal ? userBal : id + idBatch;
        console.log(`Checking adjusted hodl for ${usersCalled[userId]}: IDs ${id} - ${max}`)
        for (let hodlId = 0; hodlId < max; hodlId++) {
          longedHodlIdCalls.push(uwucrewMulti.tokenOfOwnerByIndex(usersCalled[userId], id));
        }
        const batchHodldIdsPerAddr = await ethcallProvider.all(longedHodlIdCalls);
        hodldIdsPerAddr = hodldIdsPerAddr.concat(batchHodldIdsPerAddr)
      }

      
      let hodlTimePerId = [];
      for (let id = 0; id < hodldIdsPerAddr.length; id += idBatch) {
        let hodlStatsCalls = [];
        let max = id + idBatch > userBal ? userBal.length : id + idBatch;
        for (let hodlId = 0; hodlId < max; hodlId++) {
          hodlStatsCalls.push(uwucrewMulti.lastTransferTimestamp(hodldIdsPerAddr[id]));
        }
        const batchHodlStatsPerId = await ethcallProvider.all(hodlStatsCalls);
        hodlTimePerId = hodlTimePerId.concat(batchHodlStatsPerId)
      }

      for (let idHodl = 0; idHodl < hodlTimePerId.length; idHodl++) {
        adjustedHodl += Math.ceil(Date.now()/1000 - hodlTimePerId[idHodl].toNumber());
      }

      hodlStats[usersCalled[userId]] += adjustedHodl;
    }
  } 

  const adjustedHodlJson = Object.keys(hodlStats).map(function (key) {
    return { address: key, adjustHodl: hodlStats[key]};
  })
  .sort(function (itemA, itemB) {
    return itemA.adjustHodl < itemB.adjustHodl;
  });

  await fs.writeFile("./scripts/results/adjustedhodlstats.json", JSON.stringify(adjustedHodlJson));

  // longest hodling uwu id 

  let longestHodled = {};

  for (let i = 0; i < uwuHolders.length; i += batchSize) {
    console.log(`Checking ${i} - ${i + batchSize}`)
    let max = i + batchSize > uwuHolders.length ? uwuHolders.length : i + batchSize;

    let balanceCalls = [];
    for (let id = i; id < max; id++) {
      balanceCalls.push(uwucrewMulti.balanceOf(uwuHolders[id]));
    }

    let addrsCalled = [];
    const curBalances = await ethcallProvider.all(balanceCalls);
    for (let id = 0; id < curBalances.length; id++) {
      if (curBalances[id].toNumber() > 0) {
        addrsCalled.push(uwuHolders[i + id])
      }
    }

    let longedHodlIdCalls = [];
    for (let id = 0; id < addrsCalled.length; id++) {
      longedHodlIdCalls.push(uwucrewMulti.tokenOfOwnerByIndex(addrsCalled[id], 0));
    }
    const longestHodledPerAddr = await ethcallProvider.all(longedHodlIdCalls);

    let longedHodlStatsCalls = []
    for (let id = 0; id < addrsCalled.length; id++) {
      longedHodlStatsCalls.push(uwucrewMulti.lastTransferTimestamp(longestHodledPerAddr[id]));
    }
    
    const longedHodlStatsPerAddrCalls = await ethcallProvider.all(longedHodlStatsCalls);
    for (let ii = 0; ii < addrsCalled.length; ii++) {
      longestHodled[addrsCalled[ii]] = Math.ceil(Date.now()/1000 - longedHodlStatsPerAddrCalls[ii].toNumber());
    }
  } 

  const longestJson = Object.keys(longestHodled).map(function (key) {
    return { address: key, longestHodl: longestHodled[key]};
  })
  .sort(function (itemA, itemB) {
    return itemA.longestHodl < itemB.longestHodl;
  });

  await fs.writeFile("./scripts/results/longesthodl.json", JSON.stringify(longestJson));
  console.log("Longest hodl Collected")
}

async function view() {
  // let hodlStats = await fs.readFile("./results/hodlstats.json");

  // let longestHodl = await fs.readFile("./results/longesthodl.json");

  let longestHodled = {};

  for (let i = 0; i < uwuHolders.length; i += batchSize) {
    console.log(`Checking ${i} - ${i + batchSize}`)
    let longedHodlStatsCalls = [];
    let addrsCalled = [];
    let max = i + batchSize > uwuHolders.length ? uwuHolders.length : i + batchSize;
    for (let id = i; id < max; id++) {
      longedHodlStatsCalls.push(uwucrewMulti.tokenOfOwnerByIndex(uwuHolders[id], 0));
      addrsCalled.push(uwuHolders[id])
    }
    const longestHodledPerAddr = await ethcallProvider.all(longedHodlStatsCalls);
    for (let ii = 0; ii < addrsCalled.length; ii++) {
      longestHodled[addrsCalled[ii]] = longestHodledPerAddr[ii].toNumber();
    }
  } 

  const longestJson = Object.keys(longestHodled).map(function (key) {
    return { address: key, longestHodl: longestHodled[key]};
  })
  .sort(function (itemA, itemB) {
    return itemA.longestHodl < itemB.longestHodl;
  });

  await fs.writeFile("longesthodl.json", JSON.stringify(longestJson));
  console.log("Longest hodl Collected")
}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });

generate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
