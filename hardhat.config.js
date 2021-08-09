require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("solidity-coverage");
require("hardhat-gas-reporter");

// var secrets = require("./secrets");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",
  networks: {
    // rinkenby: {
    //   url: "https://eth-rinkeby.alchemyapi.io/v2/" + secrets.rinkebyAlchemyKey,
    //   accounts: [secrets.walletPrivateKey],
    // },
    // ethereum: {
    //   url: "https://eth-mainnet.alchemyapi.io/v2/" + secrets.ethAlchemyKey,
    //   accounts: [secrets.walletPrivateKey],
    // },
  },
  abiExporter: {
    path: "./client/src/contracts",
    clear: true,
    flat: true,
    only: ["uwucrew.sol"],
  },
  gasReporter: {
    currency: "CHF",
    gasPrice: 12,
    excludeContracts: ["token/"],
  },
};
