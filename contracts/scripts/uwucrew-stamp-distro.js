// import { ethers } from 'hardhat';

let addressBalances = require("./holders.json");

let stampIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let seed;

function main() {

  let formattedBalances = {};

  let allAddrs = Object.keys(addressBalances)
  allAddrs.forEach((addr) => {
    let balance = addressBalances[addr];
    let newBalance = 0;
    if (balance >= 20) {
      newBalance = 3;
    } else if (balance >= 10) {
      newBalance = 2;
    } else if (balance >= 5) {
      newBalance = 1;
    }
    formattedBalances[addr] = newBalance;
  })

  let total = 0;
  let stampStats = {};
  let holders = {};
  for ( let i = 0; i < stampIds.length; i++) {
    stampStats[stampIds[i]] = 0
    holders[stampIds[i]] = 0
  }

  let allValidAddrs = Object.keys(formattedBalances).filter((addr) => formattedBalances[addr] > 0);
  for (let i = 0; i < allValidAddrs.length; i++) {
    let selectedStamps = getRandomNFromList(stampIds, formattedBalances[allValidAddrs[i]])
    for ( let i = 0; i < selectedStamps.length; i++) {
      stampStats[selectedStamps[i]]++
      holders[selectedStamps[i]]++
      total++
    }
  }

  console.log(`Total uwucrew holders: ${allAddrs.length}`);
  Object.keys(stampStats).forEach((num) => {
    console.log(`ID #${num}: ${stampStats[num]} minted to ${holders[num]} holders`)
  })
  let totalHolders = allAddrs.length;
  console.log(`Distributed in total ${total} stamps to ${allValidAddrs.length} uwucrew holders`);
}

function getRandomNFromList(listOfItems, amountToSelect) {
  let selected = [];
  while (selected.length < amountToSelect) {
    let randomSelected = listOfItems[Math.floor(Math.random() * listOfItems.length)];
    let duplicate = false;
    for (let i = 0; i < selected.length; i++) {
      if (randomSelected == selected[i]) {
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
