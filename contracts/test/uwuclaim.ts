import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers } from 'hardhat';
import type { Uwucrew, UwuClaim } from '../typechain-types';
import { expectException } from '../utils/expectRevert';
import type { NumberObject } from "./utils/NumberTree";
import NumberTree from "./utils/NumberTree";

chai.use(solidity);

describe('NFT Sale Test', () => {
	let signers: SignerWithAddress[];
	let primary: SignerWithAddress;
	let alice: SignerWithAddress;
	let bob: SignerWithAddress;
	let uwucrew: Uwucrew;
	let uwuClaim: UwuClaim;
	let tokenTree: NumberTree;

	before('Setup', async () => {
		signers = await ethers.getSigners();
		[primary, alice, bob] = signers;

    const tokenIds: NumberObject[] = [];
    for (let i = 0; i < 140; i += 10) {
      tokenIds.push({
        tokenId: i,
      });
    }
    tokenTree = new NumberTree(tokenIds);

		const UwUCrew = await ethers.getContractFactory('uwucrew');
		uwucrew = (await UwUCrew.deploy('uwucrew', 'UWU', 140)) as Uwucrew;
		await uwucrew.deployed();

		const UwUClaim = await ethers.getContractFactory('uwuClaim');
		uwuClaim = (await UwUClaim.deploy('Nekobox uwus', 'NFTXUWU', uwucrew.address, tokenTree.getHexRoot())) as UwuClaim;
		await uwuClaim.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner', async () => {
		expect(await uwucrew.owner()).to.equal(primary.address);
	});

	it('Should let the owner prepare the sales contract', async () => {
		await uwucrew.prepareSale(alice.address);
	});

	it('Should let the sales contract address mint', async () => {
		await uwucrew.connect(alice).mint(bob.address, 0);
	});

	it('Should mint all valid NFTs to bob', async () => {
    for (let i = 10; i < 140; i += 10) {
			await uwucrew.connect(alice).mint(bob.address, i);
		}
	});

	it('Should mint all unvalid NFTs to alice', async () => {
    for (let i = 12; i < 48; i += 12) {
			await uwucrew.connect(alice).mint(alice.address, i);
		}
	});

	it('Should let bob claim all his valid NFTs', async () => {
    for (let i = 0; i < 140; i += 10) {
			await uwuClaim.connect(bob).claim(i, tokenTree.getProof(i));
		}
	});

	it('Shouldnt let alice claim for bob', async () => {
    for (let i = 0; i < 140; i += 10) {
			await expectException(uwuClaim.connect(alice).claim(i, tokenTree.getProof(i)), "dumb");
		}
	});

	it('Shouldnt let alice claim unvalid', async () => {
    for (let i = 12; i < 48; i += 12) {
			await expectException(uwuClaim.connect(alice).claim(i, []), "dumb");
		}
	});
});