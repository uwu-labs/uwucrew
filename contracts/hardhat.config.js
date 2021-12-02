require("@nomiclabs/hardhat-waffle");
require("hardhat-abi-exporter");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("dotenv").config();

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
    rinkeby: {
      url:
        "https://eth-rinkeby.alchemyapi.io/v2/" +
        process.env.ALCHEMY_RINKEBY_ETH_KEY,
      accounts: [process.env.DEV_PRIVKEY],
    },
    ethereum: {
      url:
        "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_ETH_KEY,
      accounts: [process.env.DEV_PRIVKEY],
    },
    binance: {
      url: "https://bsc-dataseed1.defibit.io/",
      accounts: [process.env.DEV_PRIVKEY],
    },
  },
  abiExporter: {
    path: "./client/src/contracts",
    clear: true,
    flat: true,
    only: ["uwucrew.sol", "uwucrewWaveLockMintSale.sol", "uwucrewBSCClaim.sol"],
  },
  gasReporter: {
    currency: "CHF",
    gasPrice: 12,
    excludeContracts: ["token/"],
  },
};
