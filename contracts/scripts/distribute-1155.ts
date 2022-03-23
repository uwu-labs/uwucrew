import { BigNumber } from 'ethers';
import { ethers } from 'hardhat';
import airdropInfo from '../snapshots/lamps-banner.json';

async function main() {
	const [deployer] = await ethers.getSigners();

	const address = await deployer.getAddress();
	console.log('Deploying account:', address);
	console.log('Deploying account balance:', (await deployer.getBalance()).toString(), '\n');

	const addresses: string[] = Object.keys(airdropInfo);
	console.log(addresses.length);
	console.log(airdropInfo);
	const nft = await ethers.getContractAt('IERC1155', '0x2953399124f0cbb46d2cbacd8a89cf0599974963');
	const id = '66450628800353115039952438590945603205850694131236567417649397736429085266024';

	let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), 'pending');
	console.log(nonce);
	const batchSize = 1;
	for (let i = 0; i < addresses.length; i += batchSize) {
		console.log(i);
		const addr = addresses[i];
		// @ts-expect-error JSONs as files are funky
		const tx = await nft.safeTranserFrom(await deployer.getAddress(), addr, id, airdropInfo[addr], [], {
			nonce: BigNumber.from(nonce),
			gasLimit: 200000
		});
		await tx.wait();
		nonce++;
	}
}

main()
	.then(() => {
		console.log('\nDeployment completed successfully ✓');
		process.exit(0);
	})
	.catch((error) => {
		console.log('\nDeployment failed ✗');
		console.error(error);
		process.exit(1);
	});
