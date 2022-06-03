import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers, network, upgrades } from 'hardhat';
import type { MultiProxyController, UwuQuestStampsUpgradeable } from '../typechain-types';
import { expectException, expectRevert } from '../utils/expectRevert';

chai.use(solidity);

describe('uwu Quest Test', () => {
	let signers: SignerWithAddress[];
	let primary: SignerWithAddress;
	let alice: SignerWithAddress;
	let bob: SignerWithAddress;
	let quest: UwuQuestStampsUpgradeable;
	let multiProxy: MultiProxyController;

	before('Setup', async () => {
		signers = await ethers.getSigners();
		[primary, alice, bob] = signers;

		const Quest = await ethers.getContractFactory('UwuQuestStampsUpgradeable');
		quest = (await upgrades.deployProxy(
			Quest, 
			[
				"ipfs://",
			],
      {
        initializer: "__UwuQuestStampsUpgradeable_init",
        unsafeAllow: ['delegatecall', "constructor"]
      }

		)) as UwuQuestStampsUpgradeable;
		await quest.deployed();

		const MultiProxy = await ethers.getContractFactory('MultiProxyController');
		multiProxy = (await MultiProxy.deploy(["Quest"], [quest.address])) as MultiProxyController;
		await multiProxy.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner', async () => {
		expect(await quest.owner()).to.equal(primary.address);
	});

	it('Should not let a non sales contract address mint', async () => {
		await expectException(quest.mint(alice.address, 0, 1), 'Ownable');
	});

	it('Should let the owner initialize', async () => {
		await quest.initializeStamp(primary.address, 0, 1, "amogus");
	});

	it('Should let the owner mint', async () => {
		await quest.mint(alice.address, 0, 1);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [1000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should let the alice transfer', async () => {
		await quest.connect(alice).safeTransferFrom(alice.address, bob.address, 0, 1, []);
	});

	it('Should mine some blocks', async () => {
		await network.provider.send('evm_increaseTime', [5000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	const newURI = 'https://api.uwucrew.art/uwu/';
	// it('Should not let a non-owner change base URI', async () => {
	// 	await expectRevert(quest.connect(alice).setBaseURI(newURI));
	// });

	it('Should let owner change base URI', async () => {
		const oldURI = await quest.baseURI();
		expect(oldURI).to.equal('ipfs://');
		const oldTokenURI = await quest.uri(0);
		expect(oldTokenURI).to.equal('ipfs://amogus');
		await quest.setBaseURI(newURI);
		const _newURI = await quest.baseURI();
		expect(_newURI).to.equal(newURI);
		const _newTokenURI = await quest.uri(0);
		expect(_newTokenURI).to.equal(`${newURI}amogus`);
	});

	it('Should properly update base URI for tokens', async () => {
		await quest.setBaseURI(newURI);
	});

});