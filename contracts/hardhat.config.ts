import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'hardhat-abi-exporter';
import 'hardhat-gas-reporter';
import 'hardhat-tracer';
import { task, HardhatUserConfig } from 'hardhat/config';
import { networks } from './hardhat.networks';
import { coinMarketCapApi } from './variables';

task('accounts', 'Prints the list of accounts', async (_, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

const config: HardhatUserConfig = {
	solidity: '0.8.4',
	...networks,
	abiExporter: {
		path: './abis',
		clear: true,
		flat: true,
		only: ['uwucrew.sol', 'uwucrewWaveLockMintSale.sol', 'uwucrewBSCClaim.sol']
	},
	gasReporter: {
		currency: 'CHF',
		gasPrice: 12,
		excludeContracts: ['token/'],
		coinmarketcap: coinMarketCapApi
	}
};

export default config;
