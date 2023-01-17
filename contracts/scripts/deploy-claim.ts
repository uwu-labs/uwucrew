import { ethers } from 'hardhat';
import type { UwuClaim } from '../typechain-types';
const fs = require('fs').promises;

import type { NumberObject } from "../test/utils/NumberTree";
import NumberTree from "../test/utils/NumberTree";

export interface ProofsObject {
  tokenId: number;
}

let nftxUwus: number[] = [
	69,
	118,
	218,
	308,
	345,
	351,
	486,
	490,
	565,
	592,
	599,
	645,
	650,
	782,
	859,
	885,
	968,
	1016,
	1023,
	1024,
	1076,
	1082,
	1102,
	1122,
	1126,
	1268,
	1284,
	1319,
	1441,
	1442,
	1470,
	1506,
	1514,
	1595,
	1609,
	1626,
	1663,
	1711,
	1744,
	1757,
	1765,
	1793,
	1854,
	1866,
	1868,
	1872,
	1969,
	1998,
	2023,
	2180,
	2207,
	2221,
	2320,
	2355,
	2356,
	2447,
	2488,
	2665,
	2720,
	2732,
	2738,
	2810,
	2817,
	2848,
	2943,
	2948,
	3011,
	3023,
	3031,
	3092,
	3138,
	3210,
	3212,
	3298,
	3302,
	3318,
	3354,
	3412,
	3417,
	3424,
	3529,
	3547,
	3557,
	3558,
	3571,
	3631,
	3671,
	3673,
	3812,
	3818,
	3877,
	3926,
	3944,
	3949,
	3957,
	4007,
	4056,
	4125,
	4133,
	4172,
	4224,
	4227,
	4273,
	4305,
	4370,
	4379,
	4495,
	4510,
	4542,
	4576,
	4595,
	4633,
	4639,
	4682,
	4685,
	4736,
	4795,
	4852,
	4893,
	4923,
	4954,
	4977,
	4987,
	5022,
	5036,
	5061,
	5098,
	5134,
	5143,
	5311,
	5319,
	5344,
	5367,
	5374,
	5386,
	5431,
	5432,
	5434,
	5463,
	5471,
	5504,
	5521,
	5565,
	5585,
	5596,
	5642,
	5669,
	5896,
	5948,
	5956,
	5996,
	6022,
	6174,
	6202,
	6269,
	6287,
	6325,
	6381,
	6436,
	6459,
	6470,
	6476,
	6506,
	6537,
	6613,
	6615,
	6787,
	6816,
	6845,
	6870,
	6892,
	6910,
	6994,
	7062,
	7126,
	7145,
	7146,
	7160,
	7163,
	7183,
	7230,
	7251,
	7256,
	7294,
	7298,
	7303,
	7398,
	7423,
	7657,
	7749,
	7797,
	7827,
	7926,
	8030,
	8086,
	8157,
	8217,
	8221,
	8268,
	8307,
	8341,
	8395,
	8425,
	8439,
	8452,
	8498,
	8639,
	8640,
	8667,
	8758,
	8906,
	9021,
	9043,
	9065,
	9100,
	9115,
	9137,
	9237,
	9266,
	9267,
	9277,
	9279,
	9289,
	9324,
	9328,
	9345,
	9454,
	9523,
	9537,
	9538,
	9569,
	9588,
	9607
];

interface idProofs {
	[id: string]: string[];
}
async function main() {
	const signers = await ethers.getSigners();
	const primary = signers[0];

	console.log('deploying from: ', primary.address);

	const tokenIds: NumberObject[] = [];
	for (let i = 0; i < nftxUwus.length; i++) {
		tokenIds.push({
			tokenId: nftxUwus[i],
		});
	}
	let tokenTree = new NumberTree(tokenIds);

	let proofs: idProofs = {};
	nftxUwus.forEach((id: number) => {
		proofs[id.toString()] = tokenTree.getProof(id);
	})

	await fs.writeFile('./nftxuwuproofs.json', JSON.stringify(proofs));

	const Claim = await ethers.getContractFactory('uwuClaim');
	// Total: 9670
	const claimContract = (await Claim.connect(primary).deploy(
		'Nekobox uwus',
		'NEKOUWU',
		"0xf75140376d246d8b1e5b8a48e3f00772468b3c0c",
		tokenTree.getHexRoot()
	)) as UwuClaim;
	await claimContract.deployed();
	console.log("claim deployed");

	let tx = await claimContract.setBaseURI("https://uwulabs.mypinata.cloud/ipfs/QmazfpXArCXaoXKQcBnSGR9ZoKhmcNME9ywYAD9Yy2DVbU/");
	await tx.wait();

	console.log('claim contract deployed to:', claimContract.address);

	console.log('claim owner:', await claimContract.owner());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
