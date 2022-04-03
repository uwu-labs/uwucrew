import type { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import chai, { expect } from 'chai';
import { solidity } from 'ethereum-waffle';
import { BigNumber, Contract, Signer } from 'ethers';
import { ethers, network } from 'hardhat';
import type { UwucrewBSCWaveLockSale } from '../typechain-types';
import { expectException } from '../utils/expectRevert';
import { alchemyEthMainnet } from '../variables';

chai.use(solidity);

const BASE = BigNumber.from(10).pow(18);

describe('NFT Sale Test', () => {
	let signers: SignerWithAddress[];
	let primary: SignerWithAddress;
	let alice: SignerWithAddress;
	let kiwi: Signer;
	let salesContract: UwucrewBSCWaveLockSale;
	let WET: Contract;
	let WAIFUSION: Contract;

	before('Setup', async () => {
		await network.provider.request({
			method: 'hardhat_reset',
			params: [
				{
					forking: {
						jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${alchemyEthMainnet}`,
						blockNumber: 12964000
					}
				}
			]
		});
		signers = await ethers.getSigners();
		[primary, alice] = signers;

		await network.provider.request({
			method: 'hardhat_impersonateAccount',
			params: ['0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48']
		});
		kiwi = await ethers.provider.getSigner('0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48');

		WAIFUSION = await ethers.getContractAt('IERC721', '0x2216d47494E516d8206B70FCa8585820eD3C4946');
		WET = await ethers.getContractAt('IERC20WET', '0x76280af9d18a868a0af3dca95b57dde816c1aaf2');

		const block = await ethers.provider.getBlock('latest');
		const Sales = await ethers.getContractFactory('uwucrewBSCWaveLockSale');
		salesContract = (await Sales.deploy(block.timestamp + 1000, 20)) as UwucrewBSCWaveLockSale;
		await salesContract.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner', async () => {
		expect(await salesContract.owner()).to.equal(primary.address);
	});

	it('Should not let Alice buy with WET before the starting block', async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(alice).buy(4, await kiwi.getAddress()), 'Sale has not started');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should mine some blocks', async () => {
		const block = await ethers.provider.getBlock('latest');
		await network.provider.send('evm_increaseTime', [block.timestamp + 1000]);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
		await ethers.provider.send('evm_mine', []);
	});

	it('Should let Kiwi buy with WET', async () => {
		await WET.connect(kiwi).approve(salesContract.address, BASE.mul(100000000000));
		await WET.connect(kiwi).claim([
			521, 4916, 2733, 2047, 325, 289, 12272, 7556, 13204, 3020, 496, 12269, 5759, 7397, 12106, 15655, 3897, 9746, 10751, 719, 14302, 10035,
			2045, 3154
		]);
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(kiwi).buy(4, await alice.getAddress());
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(4));
	});

	it("Shouldn't let Kiwi buy again in this wave", async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(kiwi).buy(4, await kiwi.getAddress()), 'Locked for this wave');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should mine 30 blocks', async () => {
		for (let i = 0; i < 60; i++) {
			await ethers.provider.send('evm_mine', []);
		}
	});

	it("Shouldn't let Kiwi buy again more than a tx max", async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(kiwi).buy(35, await kiwi.getAddress()), 'Max for TX in this wave');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should let Kiwi buy more with WET', async () => {
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(kiwi).buy(12, await alice.getAddress());
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(12));
	});

	it('Shouldnt let Alice buy some without a waifu', async () => {
		await expectException(salesContract.connect(alice).buy(2, await kiwi.getAddress()), 'Must hold BNB waifus');
	});

	it('Should let Alice buy after a waifu', async () => {
		await WAIFUSION.connect(kiwi).transferFrom(kiwi.getAddress(), alice.getAddress(), 4916);
		await WET.connect(kiwi).transfer(alice.getAddress(), BASE.mul(10980 * 2));
		await WET.connect(alice).approve(salesContract.address, BASE.mul(10980 * 2));
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(alice).buy(2, await kiwi.getAddress());
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(2));
	});

	it('Should mine 30 blocks', async () => {
		for (let i = 0; i < 60; i++) {
			await ethers.provider.send('evm_mine', []);
		}
	});

	it('Should let cap off and refund if purchasing more than avail with wet', async () => {
		const oldSold = await salesContract.amountSold();
		const amountForSale = await salesContract.amountForSale();
		const remaining = amountForSale.sub(oldSold);
		const oldBal = await WET.balanceOf(kiwi.getAddress());
		const newBal = await WET.balanceOf(kiwi.getAddress());
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(remaining));
		expect(newSold).to.not.equal(oldSold.add(5));
		expect(newBal).to.be.equal(oldBal.sub(remaining.mul(ethers.utils.parseEther('10980'))));
	});

	it('Should properly return all contributors', async () => {
		const contributors = await salesContract.allContributors();
		expect(contributors.length).to.equal(2);
		const allBalances = await salesContract.allContributorsBalance();
		expect(allBalances[0]).to.equal(18);
		expect(allBalances[1]).to.equal(2);
	});

	it('Should properly return all contributors eth addrs', async () => {
		const contributors = await salesContract.allContributors();
		expect(contributors.length).to.equal(2);
		const allAddrs = await salesContract.allContributorsEthAddrs();
		expect(allAddrs[0]).to.equal(await alice.getAddress());
		expect(allAddrs[1]).to.equal(await kiwi.getAddress());
	});
});
