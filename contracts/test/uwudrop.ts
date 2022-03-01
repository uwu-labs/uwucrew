import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { ethers, upgrades } from 'hardhat';
import type { Uwucrew, /* UwudropCollectionDynamic, */ UwudropCollectionFactory } from '../typechain-types';
// import { expectException } from '../utils/expectRevert';

chai.use(solidity);

let uwudropFactory: UwudropCollectionFactory;

describe('uwudrop Test', () => {
	let signers: SignerWithAddress[];
	let primary: SignerWithAddress;
	// let alice: SignerWithAddress;
	// let bob: SignerWithAddress;
	let uwucrew: Uwucrew;

	before('Setup', async () => {
		signers = await ethers.getSigners();
		[primary] = signers;

    const UwudropFactory = await ethers.getContractFactory(
      "uwudropCollectionFactory"
    );
		upgrades.silenceWarnings();
    uwudropFactory = (await upgrades.deployProxy(
      UwudropFactory,
      [],
      {
        initializer: "__uwudropCollectionFactory__init__",
				unsafeAllow: "delegatecall",
      }
    )) as UwudropCollectionFactory;
    await uwudropFactory.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner', async () => {
		expect(await uwucrew.owner()).to.equal(primary.address);
	});

	it('Should let someone deploy a collection', async () => {
		await uwudropFactory.createCollection("amogus", "AMOGUS", primary.address, primary.address);
	})
});