import { ethers } from 'hardhat';
import type { NFTMerkleDistributor } from '../typechain-types';

async function main() {
	const signers = await ethers.getSigners();
	const primary = signers[0];

	console.log('deploying from: ', primary.address);
	const bscClaim = await ethers.getContractFactory('NFTMerkleDistributor');
	console.log('dadad');
	const claim = (await bscClaim.deploy(
		'0xF75140376D246D8B1E5B8a48E3f00772468b3c0c',
		'0xcd6669db3cd33a0dbb8c96cec6d582e9d2b4112e7865a90fceb5ce43f56e88b0'
	)) as NFTMerkleDistributor;
	console.log('dadad');
	await claim.deployed();

	console.log('Claim:', claim.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
