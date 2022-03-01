const { BigNumber } = require("@ethersproject/bignumber");
const { ethers, upgrades } = require("hardhat");
import airdropInfo from "../snapshots/14296680-roadmapv2.json";

const notZeroAddr = "0x000000000000000000000000000000000000dead";

async function main() {
  const [deployer] = await ethers.getSigners();

  const address = await deployer.getAddress();
  console.log("Deploying account:", address);
  console.log(
    "Deploying account balance:",
    (await deployer.getBalance()).toString(),
    "\n"
  );
  
  let addresses = Object.keys(airdropInfo);

  const distributor = await ethers.getContractAt("nft1155Distributor", "0x86a90727e2D27E84615766255980414B15Af67F4")
  const nft = await ethers.getContractAt("IERC1155", "0x2953399124f0cbb46d2cbacd8a89cf0599974963");
  const id = 0;

  await nft.setApprovalForAll("0x86a90727e2D27E84615766255980414B15Af67F4", true);

  let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), "pending");
  console.log(nonce)
  let batchSize = 5;
  for (let i = 0; i < addresses.length; i += batchSize) {
    let sendAddresses = [];
    let max = i+batchSize > addresses.length ? addresses.length : i+batchSize
    for (let ii = i; ii < max; ii++) {
      sendAddresses.push(addresses[ii])
    }
    if (sendAddresses.length == 0) {
      continue
    }
    console.log(i)
    console.log(sendAddresses.length)
    let tx = await distributor.send1155NFTs(
      nft.address, sendAddresses, id,
      {
        nonce: BigNumber.from(nonce),
        gasLimit: 5100000,
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
