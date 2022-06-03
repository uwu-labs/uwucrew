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
});