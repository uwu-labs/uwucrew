import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'hardhat-tracer';
import 'hardhat-abi-exporter';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { task } from 'hardhat/config';

task('accounts', 'Prints the list of accounts', async (_, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

export default {
	solidity: '0.8.4',
	networks: {
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_RINKEBY_ETH_KEY}`,
			accounts: [process.env.DEV_PRIVKEY]
		},
		ethereum: {
			url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_ETH_KEY}`,
			accounts: [process.env.DEV_PRIVKEY]
		},
		binance: {
			url: 'https://bsc-dataseed1.defibit.io/',
			accounts: [process.env.DEV_PRIVKEY]
		},
    polygon: {
      url: "https://polygon-rpc.com",
      accounts: [process.env.DEV_PRIVKEY],
      gasPrice: 45000000000
    },
	},
	abiExporter: {
		path: './abis',
		clear: true,
		flat: true,
		only: ['uwucrew.sol', 'uwucrewWaveLockMintSale.sol', 'uwucrewBSCClaim.sol']
	},
	gasReporter: {
		currency: 'CHF',
		gasPrice: 12,
		excludeContracts: ['token/']
	}
};
