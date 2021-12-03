import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers, network } from 'hardhat';
import type { Uwucrew, UwucrewWaveLockSale, UwuLoot } from '../typechain-types';
import { expectException } from '../utils/expectRevert';
import idToData from './id-to-data.json';

chai.use(solidity);

describe('NFT Sale Test', () => {
	let signers: SignerWithAddress[];
	let primary: SignerWithAddress;
	let alice: SignerWithAddress;
	let bob: SignerWithAddress;
	let uwucrew: Uwucrew;
	let salesContract: UwucrewWaveLockSale;

	before('Setup', async () => {
		signers = await ethers.getSigners();
		[primary, alice, bob] = signers;

		const UwUCrew = await ethers.getContractFactory('uwucrew');
		uwucrew = (await UwUCrew.deploy('uwucrew', 'UWU', 140)) as Uwucrew;
		await uwucrew.deployed();

		const block = await ethers.provider.getBlock('latest');
		const Sales = await ethers.getContractFactory('uwucrewWaveLockSale');
		salesContract = (await Sales.deploy(uwucrew.address, primary.address, block.timestamp + 1000, 40, 40, 20)) as UwucrewWaveLockSale;
		await salesContract.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner', async () => {
		expect(await uwucrew.owner()).to.equal(primary.address);
	});

	it('Should not let a non-owner prepare the sales contract', async () => {
		await expectException(uwucrew.connect(alice).prepareSale(salesContract.address), 'caller is not the owner');
	});

	it('Should let the owner prepare the sales contract', async () => {
		await uwucrew.prepareSale(alice.address);
	});

	it('Should not let a non sales contract address mint', async () => {
		await expectException(uwucrew.mint(alice.address, 0), 'Nice try lol');
	});

	it('Should have 0 hodl for none holders', async () => {
		const hodl = await uwucrew.cumulativeHODL(alice.address);
		expect(hodl).to.equal(0);
	});

	it('Should let the sales contract address mint', async () => {
		await uwucrew.connect(alice).mint(alice.address, 0);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [1000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should not have 0 hodl for tranferred holders', async () => {
		const hodl = await uwucrew.cumulativeHODL(alice.address);
		expect(hodl).to.equal(1004);
	});

	it('Should let the alice transfer', async () => {
		await uwucrew.connect(alice).transferFrom(alice.address, bob.address, 0);
	});

	it('Should report right hodl after tranasferning away', async () => {
		const hodl = await uwucrew.cumulativeHODL(alice.address);
		expect(hodl).to.equal(1005);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [5000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should report right hodl after tranasferning away + time', async () => {
		const hodl = await uwucrew.cumulativeHODL(alice.address);
		expect(hodl).to.equal(1005);
	});

	it('Should report right hodl after tranasferning away + time', async () => {
		const hodl = await uwucrew.cumulativeHODL(bob.address);
		expect(hodl).to.equal(5004);
	});

	it('Should mint more to bob', async () => {
		await uwucrew.connect(alice).mint(bob.address, 1);
		await uwucrew.connect(alice).mint(bob.address, 2);
		await uwucrew.connect(alice).mint(bob.address, 3);
		await uwucrew.connect(alice).mint(bob.address, 4);
	});

	it('Should not add to hodl for minting', async () => {
		const hodl = await uwucrew.cumulativeHODL(bob.address);
		expect(hodl).to.equal(5014);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [5000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should scale hodl with more nfts', async () => {
		const hodl = await uwucrew.cumulativeHODL(bob.address);
		expect(hodl).to.equal(30034);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [10000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should scale hodl with more nfts', async () => {
		const hodl = await uwucrew.cumulativeHODL(bob.address);
		expect(hodl).to.equal(80054);
	});

	const newURI = 'https://api.uwucrew.art/uwu/';
	it('Should not let a non-owner change base URI', async () => {
		await expectException(uwucrew.connect(alice).setBaseURI(newURI), 'caller is not the owner');
	});

	it('Should let owner change base URI', async () => {
		const oldURI = await uwucrew.baseURI();
		expect(oldURI).to.equal('');
		const oldTokenURI = await uwucrew.tokenURI(0);
		expect(oldTokenURI).to.equal('');
		await uwucrew.setBaseURI(newURI);
		const _newURI = await uwucrew.baseURI();
		expect(_newURI).to.equal(newURI);
		const _newTokenURI = await uwucrew.tokenURI(0);
		expect(_newTokenURI).to.equal(`${newURI}0`);
	});

	it('Should properly update base URI for tokens', async () => {
		await uwucrew.setBaseURI(newURI);
	});

	let uwuLoot: UwuLoot;
	it('Should deploy uwuLoot', async () => {
		const Loot = await ethers.getContractFactory('uwuLoot');
		uwuLoot = (await Loot.deploy(
			'0xf75140376d246d8b1e5b8a48e3f00772468b3c0c',
			'0x0dceec6a1d9d5f99f708aeb16555ce53f84deaa21d252e67841330dd16a9be9e'
		)) as UwuLoot;
		await uwuLoot.deployed();
	});

	it('Should let me register uwu 0', async () => {
		console.log(uwuLoot.address);
		await uwuLoot.registerNFT(0, (idToData as any)['0'].Metadata, (idToData as any)['0'].Proof);
	});

	it('Should let me register several uwus', async () => {
		const ids = [];
		const data = [];
		const proofs = [];
		for (let i = 1001; i < 1026; i++) {
			ids.push(i);
			data.push((idToData as any)[`${i}`].Metadata);
			proofs.push((idToData as any)[`${i}`].Proof);
		}
		await uwuLoot.registerNFTs(ids, data, proofs);
	});

	it('Should give accurate metadata', async () => {
		const loot = await uwuLoot.getAllLoot(0);
		const realLoot = ['Hot Pink', 'Bronze', 'Green Tanktop', 'Boba', 'Gold Claws', 'Brown Short Bangs', 'No Hat', 'Eyepatch', 'Hmph'];
		for (let i = 0; i < realLoot.length; i++) {
			expect(loot[i]).to.equal(realLoot[i]);
		}
	});

	it('Should give accurate registry indexes', async () => {
		const loot = await uwuLoot.getAllRegistryIndexes(0);
		const realLoot = [2, 2, 2, 1, 9, 3, 0, 3, 5];
		for (let i = 0; i < realLoot.length; i++) {
			expect(loot[i]).to.equal(realLoot[i]);
		}
	});

	it('Should give accurate metadata for another id', async () => {
		const loot = await uwuLoot.getAllLoot(1001);
		const realLoot = [
			'Pink',
			'Freckled',
			'YFI Tee',
			'No Right Accessory',
			'Peace Hand',
			'Black Long Bangs',
			'No Hat',
			'Green Determined',
			'Open Mouth'
		];
		for (let i = 0; i < realLoot.length; i++) {
			expect(loot[i]).to.equal(realLoot[i]);
		}
	});

	it('Should give accurate registry indexes', async () => {
		const loot = await uwuLoot.getAllRegistryIndexes(1001);
		const realLoot = [7, 1, 13, 0, 1, 18, 0, 4, 8];
		for (let i = 0; i < realLoot.length; i++) {
			expect(loot[i]).to.equal(realLoot[i]);
		}
	});
});
