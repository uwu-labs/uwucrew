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
	const nft = await ethers.getContractAt('IERC1155', '0x2953399124f0cbb46d2cbacd8a89cf0599974963');
	const id = '39964800108860895143807417383496998947185873909971398938362030659400978400992';

	let nonce = await ethers.provider.getTransactionCount(await deployer.getAddress(), 'pending');
	console.log(nonce);
	const batchSize = 1;
	for (let i = 531; i < addresses.length; i += batchSize) {
		const addr = addresses[i];
		console.log(i, addr);

    // @ts-expect-error JSONs as files are funky
		const tx = await nft.safeTransferFrom(await deployer.getAddress(), addr, id, airdropInfo[addr], [], {
			nonce: BigNumber.from(nonce),
			gasLimit: 500000
		});
		await tx.wait();
		nonce++;

    await new Promise(r => setTimeout(r, 5000));
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
