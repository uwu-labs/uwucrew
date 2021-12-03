import { ethers } from 'hardhat';
import type { UwucrewBSCWaveLockSale } from '../typechain-types';

async function main() {
	const signers = await ethers.getSigners();
	const primary = signers[0];

	console.log('deploying from: ', primary.address);

	const Sales = await ethers.getContractFactory('uwucrewBSCWaveLockSale');
	const salesContract = (await Sales.connect(primary).deploy(1630729800, 200)) as UwucrewBSCWaveLockSale;
	// Purposely leaving out 50 for team, and 200 for BSC.
	await salesContract.deployed();
	console.log('sales contract deployed to:', salesContract.address);

	console.log('sale owner:', await salesContract.owner());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
