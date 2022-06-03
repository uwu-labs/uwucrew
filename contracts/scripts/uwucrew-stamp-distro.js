// import { ethers } from 'hardhat';

let addressBalances = require("./holders.json");
let seedrandom = require('seedrandom');
let fs = require("fs");

var rng = seedrandom("uwuuwu2")

let stampIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let artists = [
  {
    address: "0x78f04Cdb715daFca5b24a0106298F115B3Ca63E6",
    id: 1,
  },
  {
    address: "0xe76091F84dDf27f9e773cA8bD2090830943f615C",
    id: 2,
  },
  {
    address: "0xa0c52ac931645fAC77d255ddc1903Fd840A89387",
    id: 3,
  },
  {
    address: "0x4cA2cac67E341de7C21c8B995B01a4d23564a20b",
    id: 4,
  },
  {
    address: "0x5f0416d03a1dde462a5abcb66a9ab57f184d6424",
    id: 5,
  },
  {
    address: "0xa6616f91d6a6d554213ca3f11f87dc525ea82803",
    id: 6,
  },
  {
    address: "0xD2f223de67d69E0c576A3a5f8A300CB02E79941d",
    id: 7,
  },
  {
    address: "0x88cc69E19d0A9239c89A9374614e3e07933BF545",
    id: 8,
  },
  {
    address: "0x3ac82d39f40a2094BCE3Dd6E25B7915d8F42C850",
    id: 9,
  }
]


let bidders = [
  {
    addresses: [
      "0xC6941e6bC40B43Aaac49Bc6c2d3C123da105991e",
      "0x44a26d3e86851bA3d624bA0e6169e0b45948b173",
      "0x6546184b3acc844205BF8297cb053aC48234522D",
      "0x0F045a0D77D24c326316E0315354E7Df28B4aC50",
      "0xC68D61757A9894f34871C0ae733AC034d9abF807",
      "0x13588FbE1ca4db24a0c1132b1B1763ceaa3E7d4C",
      "0xE27ae27612881d7073814357D9CF2421092355A9",
      "0xfE598c8DBEA6d78Dd06AE537B8171695d075106E",
      "0x1d842Fa7B6E657Ec7AA31Af4D1c0D6bCD2336dfe",
      "0xBb1a5027643D93de9F11a7EAE87d06Cc7F6c5f56",
      "0x8E80A3c6ca902603b3b76B44a2c608d9dA0fd083",
      "0x7B8a6e7777793614F27799199E32E80F03d18dBe",
      "0xBaCA135D297D17B584327F7BB436df5D271A2AC1",
      "0xAa13c3291AAB9b413AC762CEC85eE0c5e639307a",
      "0xF248a71Dc0b1bBD4ffB6093207C78A9eeCD1c2ca", 
    ],
    id: 1,
  },
  {
    addresses: [
      "0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f",
    ],
    id: 2,
  },
  {
    addresses: [
      "0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f",
    ],
    id: 3,
  },
  {
    addresses: [
      "0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f",
    ],
    id: 4,
  },
  {
    addresses: [
      "0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f",
    ],
    id: 5,
  },
  {
    addresses: [

    ],
    id: 6,
  },
  {
    addresses: [

    ],
    id: 7,
  },
  {
    addresses: [

    ],
    id: 8,
  },
  {
    addresses: [

    ],
    id: 9,
  },
]

function main() {

  let finalStampBalances = {};
  let formattedNFTBalances = {};

  let allAddrs = Object.keys(addressBalances)
  allAddrs.forEach((addr) => {
    let balance = addressBalances[addr.toLowerCase()];
    let newBalance = 0;
    if (balance >= 20) {
      newBalance = 3;
    } else if (balance >= 10) {
      newBalance = 2;
    } else if (balance >= 5) {
      newBalance = 1;
    }
    formattedNFTBalances[addr.toLowerCase()] = newBalance;
  })

  let total = 0;
  let stampStats = {};
  let holders = {};
  for ( let i = 0; i < stampIds.length; i++) {
    stampStats[stampIds[i]] = 0
    holders[stampIds[i]] = 0
  }

  let allValidAddrs = Object.keys(formattedNFTBalances).filter((addr) => formattedNFTBalances[addr] > 0);
  for (let i = 0; i < allValidAddrs.length; i++) {
    let addr = allValidAddrs[i].toLowerCase()
    finalStampBalances[addr] = {}
    let selectedStamps = getRandomNFromList(stampIds, formattedNFTBalances[addr])
    for ( let ii = 0; ii < selectedStamps.length; ii++) {
      if (!finalStampBalances[addr][selectedStamps[ii]])
        finalStampBalances[addr][selectedStamps[ii]] = 0
      finalStampBalances[addr][selectedStamps[ii]]++
      stampStats[selectedStamps[ii]]++
      holders[selectedStamps[ii]]++
      total++
    }
  }

  artists.forEach(({address, id}) => {
    let addr = address.toLowerCase();
    if (!finalStampBalances[addr]) {
      finalStampBalances[addr] = {}
    }
    if (!finalStampBalances[addr][id])
      finalStampBalances[addr][id] = 0

    finalStampBalances[addr][id]++
    stampStats[id]++
    total++

    let exclude = {}
    exclude[id] = true
    let newStamps = getRandomNFromList(stampIds, 1, exclude)
    newStamps.forEach((id) => {
      if (!finalStampBalances[addr][id])
        finalStampBalances[addr][id] = 0

      finalStampBalances[addr][id]++
      stampStats[id]++
      total++
    })
  })

  // bidders.forEach(({addresses, id}) => {
  //   addresses.forEach((address) => {
  //     let addr = address.toLowerCase();
  //     if (!finalStampBalances[addr]) {
  //       finalStampBalances[addr] = {}
  //     }
  //     if (!finalStampBalances[addr][id])
  //       finalStampBalances[addr][id] = 0
  //     finalStampBalances[addr][id]++
  //     stampStats[id]++
  //     total++
  //   })
  // })

  console.log(`Total uwucrew holders: ${allAddrs.length}`);
  Object.keys(stampStats).forEach((num) => {
    console.log(`ID #${num}: ${stampStats[num]} minted to ${holders[num]} holders`)
  })
  let totalHolders = allAddrs.length;
  console.log(`Distributed in total ${total} stamps to ${allValidAddrs.length} uwucrew holders`);

  let formattedStamps = {}
  Object.keys(finalStampBalances).forEach((key) => {
    formattedStamps[key] = {
      ids: [],
      amounts: [],
    }
    Object.keys(finalStampBalances[key]).forEach((id) => {
      formattedStamps[key].amounts.push(finalStampBalances[key][id])
      formattedStamps[key].ids.push(id)
    })
  })

  let stringed = JSON.stringify(formattedStamps)
  fs.writeFile("results.json", stringed, (err) => {
    console.log(err)
  })
}

function getRandomNFromList(listOfItems, amountToSelect, exclude) {
  if (!exclude) {
    exclude = {}
  }
  let selected = [];
  while (selected.length < amountToSelect) {
    let rand = rng();
    let randomSelected = listOfItems[Math.floor(rand * listOfItems.length)];
    let duplicate = false;
    for (let i = 0; i < selected.length; i++) {
      if (randomSelected == selected[i] || exclude[i]) {
        duplicate = true;
        break;
      }
    }

    if (duplicate) {
      continue
    } 
    selected.push(randomSelected);
  }

  return selected;
}

main()
