const { expect } = require('chai');
const { expectRevert, expectException } = require('../utils/expectRevert');

const { BigNumber } = require('@ethersproject/bignumber');
const { ethers, upgrades } = require('hardhat');

const BASE = BigNumber.from(10).pow(18);
const PERC1_FEE = BASE.div(100);
const zeroAddr = '0x0000000000000000000000000000000000000000';
const notZeroAddr = '0x000000000000000000000000000000000000dead';

let signers;
let primary;
let alice;
let bob;
let kiwi;
let uwucrew;
let salesContract;
let WET;
let WAIFUSION;

describe('NFT Sale Test', function () {
	before('Setup', async () => {
		await network.provider.request({
			method: 'hardhat_reset',
			params: [
				{
					forking: {
						jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_ETH_KEY}`,
						blockNumber: 12964000
					}
				}
			]
		});
		signers = await ethers.getSigners();
		primary = signers[0];
		alice = signers[1];
		bob = signers[2];
		await hre.network.provider.request({
			method: 'hardhat_impersonateAccount',
			params: ['0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48']
		});
		kiwi = await ethers.provider.getSigner('0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48');

		WET = await ethers.getContractAt('IERC20', '0x76280af9d18a868a0af3dca95b57dde816c1aaf2');
		WAIFUSION = await ethers.getContractAt('ERC721', '0x2216d47494e516d8206b70fca8585820ed3c4946');

		const UwUCrew = await ethers.getContractFactory('uwucrew');
		uwucrew = await UwUCrew.deploy('uwucrew', 'UWU', 140);
		await uwucrew.deployed();

		const block = await ethers.provider.getBlock('latest');
		const Sales = await ethers.getContractFactory('uwucrewWaveLockSale');
		salesContract = await Sales.connect(alice).deploy(uwucrew.address, primary.address, block.timestamp + 1000, 40, 40, 20);
		await salesContract.deployed();
	});

	// //////////////////////////
	// NFT Testing            //
	// //////////////////////////

	it('Should properly recognize the owner of the NFT', async () => {
		expect(await uwucrew.owner()).to.equal(primary.address);
	});

	it('Should not let a non-owner prepare the sales contract', async () => {
		await expectException(uwucrew.connect(alice).prepareSale(salesContract.address), 'caller is not the owner');
	});

	it('Should let the owner prepare the sales contract', async () => {
		await uwucrew.prepareSale(salesContract.address);
	});

	it('Should not let Alice mint 1 before buying', async () => {
		await expectException(salesContract.connect(alice).mint(1), 'Not enough balance');
	});

	it('Should not let Alice buy with eth before the starting block', async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(alice).buy(4, { value: ethers.utils.parseEther('0.24') }), 'Sale has not started');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should let Kiwi swap v1 -> v2 tickets before the sale starts', async () => {
		await WAIFUSION.connect(kiwi).setApprovalForAll(salesContract.address, true);
		await WET.connect(kiwi).approve(salesContract.address, BASE.mul(100000000000));

		const oldBal = await salesContract.balance(await kiwi.getAddress());
		await salesContract.connect(kiwi).swapWFforUWU([377, 1173, 11110]);
		const newBal = await salesContract.balance(await kiwi.getAddress());
		expect(newBal).to.equal(oldBal.add(3));
	});

	it('Should not let Kiwi mint 1 before the sale starts', async () => {
		await expectException(salesContract.connect(kiwi).mint(1), 'Can only mint after the sale has begun');
	});

	it('Should have correct sale state', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(0);
		expect(max).to.equal(4);
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

	it('Should let Alice buy with eth', async () => {
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(alice).buy(4, { value: ethers.utils.parseEther('0.24') });
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(4));
	});

	it('Should let Alice mint 1 after buying', async () => {
		const oldBal = await uwucrew.balanceOf(await alice.getAddress());
		await salesContract.connect(alice).mint(1);
		const newBal = await uwucrew.balanceOf(await alice.getAddress());
		expect(newBal).to.equal(oldBal.add(1));
	});

	it('Should not Alice mint more than what they have', async () => {
		await expectException(salesContract.connect(alice).mint(4), 'Not enough balance');
	});

	it('Should let Kiwi mint 1 after the sale starts', async () => {
		const oldBal = await uwucrew.balanceOf(await kiwi.getAddress());
		await salesContract.connect(kiwi).mint(1);
		const newBal = await uwucrew.balanceOf(await kiwi.getAddress());
		expect(newBal).to.equal(oldBal.add(1));
	});

	it('Should let Kiwi swap v1 -> v2 tickets after the sale starts and after minting one', async () => {
		const oldBal = await salesContract.balance(await kiwi.getAddress());
		await salesContract.connect(kiwi).swapWFforUWU([5334, 398]);
		const newBal = await salesContract.balance(await kiwi.getAddress());
		expect(newBal).to.equal(oldBal.add(2));
	});

	it('Should let Alice mint the other 3', async () => {
		const oldBal = await uwucrew.balanceOf(await alice.getAddress());
		await salesContract.connect(alice).mint(3);
		const newBal = await uwucrew.balanceOf(await alice.getAddress());
		expect(newBal).to.equal(oldBal.add(3));
	});

	it("Shouldn't let Alice buy again in this wave", async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(alice).buy(4, { value: ethers.utils.parseEther('0.24') }), 'Locked for this wave');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should mine 15 blocks', async () => {
		for (let i = 0; i < 15; i++) {
			await ethers.provider.send('evm_mine', []);
		}
	});

	it("Shouldn't let Alice buy again more than a tx max", async () => {
		const oldSold = await salesContract.amountSold();
		await expectException(salesContract.connect(alice).buy(35, { value: ethers.utils.parseEther('0.84') }), 'Max for TX in this wave');
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold);
	});

	it('Should update sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(0);
		expect(max).to.equal(4);
	});

	it('Should let Alice buy more with eth', async () => {
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(alice).buy(12, { value: ethers.utils.parseEther('0.72') });
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(12));
	});

	it('Should update sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(1);
		expect(max).to.equal(16);
	});

	it('Should let Alice mint the other 3', async () => {
		const oldBal = await uwucrew.balanceOf(await alice.getAddress());
		await salesContract.connect(primary).forceMint(alice.getAddress(), 3);
		const newBal = await uwucrew.balanceOf(await alice.getAddress());
		expect(newBal).to.equal(oldBal.add(3));
	});

	it('Should mine 18 blocks', async () => {
		for (let i = 0; i < 18; i++) {
			await ethers.provider.send('evm_mine', []);
		}
	});

	it('Should show sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(1);
		expect(max).to.equal(16);
	});

	it('Should let owner mint from owner share', async () => {
		const oldBal = await uwucrew.balanceOf(await primary.getAddress());
		await salesContract.connect(primary).mint(3);
		const newBal = await uwucrew.balanceOf(await primary.getAddress());
		expect(newBal).to.equal(oldBal.add(3));
	});

	it('Should let cap off and refund if purchasing more than avail with eth', async () => {
		const oldWave = await salesContract.wave();
		const oldMax = await salesContract.currentMaxPerTX();
		const oldSold = await salesContract.amountSold();
		const amountForSale = await salesContract.amountForSale();
		const remaining = amountForSale.sub(oldSold);
		const oldBal = await ethers.provider.getBalance(await alice.getAddress());
		const tx = await salesContract.connect(alice).buy(32, { value: ethers.utils.parseEther('1.92') });
		const receipt = await tx.wait();
		const newWave = await salesContract.wave();
		const newMax = await salesContract.currentMaxPerTX();
		expect;
		expect(oldMax).to.equal(16);
		expect(newMax).to.equal(32);
		const newBal = await ethers.provider.getBalance(await alice.getAddress());
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(remaining));
		expect(newBal.add(ethers.utils.parseEther('0.01'))).to.be.gt(oldBal.sub(remaining.mul(ethers.utils.parseEther('0.06'))).sub(receipt.gasUsed));
	});

	it('Should update sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(2);
		expect(max).to.equal(32);
	});

	it('Should not let someone else swap to rest of sale', async () => {
		await expectException(salesContract.connect(alice).closeSwapToSale(), 'caller is not the owner');
	});

	it('Should let owner allocate swap amount to rest of sale', async () => {
		const oldForSale = await salesContract.amountForSale();
		const forSwap = await salesContract.amountForSwap();
		const swapped = await salesContract.amountSwapped();
		await salesContract.connect(primary).closeSwapToSale();
		const newForSale = await salesContract.amountForSale();
		expect(newForSale).to.equal(oldForSale.add(forSwap.sub(swapped)));
	});

	it('Should not let someone else add extra to sale', async () => {
		await expectException(salesContract.connect(alice).addExtraToSale(5), 'caller is not the owner');
	});

	it('Should let owner allocate extra to sale', async () => {
		const oldForSale = await salesContract.amountForSale();
		const oldBal = await salesContract.balance(await primary.getAddress());
		await salesContract.connect(primary).addExtraToSale(5);
		const newBal = await salesContract.balance(await primary.getAddress());
		const newForSale = await salesContract.amountForSale();
		expect(newForSale).to.equal(oldForSale.add(5));
		expect(newBal).to.equal(oldBal.sub(5));
	});

	it('Should not let someone else add extra to sale', async () => {
		await expectException(salesContract.connect(alice).closeSwapToOwner(), 'caller is not the owner');
	});

	it('Should let owner allocate extra to sale', async () => {
		const oldBalance = await salesContract.balance(await primary.getAddress());
		const forSwap = await salesContract.amountForSwap();
		const swapped = await salesContract.amountSwapped();
		await salesContract.connect(primary).closeSwapToOwner();
		const newBalance = await salesContract.balance(await primary.getAddress());
		const newSwap = await salesContract.amountForSwap();
		expect(newBalance).to.equal(oldBalance.add(forSwap.sub(swapped)));
		expect(newSwap).to.equal(swapped);
	});

	it('Should mine 18 blocks', async () => {
		for (let i = 0; i < 18; i++) {
			await ethers.provider.send('evm_mine', []);
		}
	});

	it('Should show sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(2);
		expect(max).to.equal(32);
	});

	it('Should let Alice buy more with eth', async () => {
		const oldMax = await salesContract.currentMaxPerTX();
		const oldSold = await salesContract.amountSold();
		await salesContract.connect(alice).buy(12, { value: ethers.utils.parseEther('0.72') });
		const newMax = await salesContract.currentMaxPerTX();
		expect(oldMax).to.equal(32);
		expect(newMax).to.equal(32);
		const newSold = await salesContract.amountSold();
		expect(newSold).to.equal(oldSold.add(12));
	});

	it('Should update sale info', async () => {
		const wave = await salesContract.wave();
		const max = await salesContract.currentMaxPerTX();
		expect(wave).to.equal(3);
		expect(max).to.equal(32);
	});

	it('Should not let a non-owner withdraw eth', async () => {
		await expectException(salesContract.connect(alice).withdrawETH(), 'caller is not the owner');
	});

	it('Should let owner withdraw eth', async () => {
		const oldUwuBal = await ethers.provider.getBalance(salesContract.address);
		const oldBal = await ethers.provider.getBalance(await primary.getAddress());
		await salesContract.connect(primary).withdrawETH();
		const newBal = await ethers.provider.getBalance(await primary.getAddress());
		const newUwuBal = await ethers.provider.getBalance(salesContract.address);
		expect(oldUwuBal).to.not.equal(0);
		expect(newUwuBal).to.equal(0);
		newUwuBal;
		expect(newBal).to.be.gt(oldBal.add(oldUwuBal).sub(BASE.div(20)));
	});
});
