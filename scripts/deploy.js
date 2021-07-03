const hre = require("hardhat");

async function main() {
  const WaifusionV2 = await hre.ethers.getContractFactory("WaifusionV2");
  const waifusionv2 = await WaifusionV2.deploy("WaifusionV2", "V2");
  await waifusionv2.deployed();
  console.log("WaifusionV2 deployed to:", waifusionv2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
