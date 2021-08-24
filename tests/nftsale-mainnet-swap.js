const { expect } = require("chai");
const { expectRevert, expectException } = require("../utils/expectRevert");

const { BigNumber } = require("@ethersproject/bignumber");
const { ethers, upgrades } = require("hardhat");


const BASE = BigNumber.from(10).pow(18);
const PERC1_FEE = BASE.div(100);
const zeroAddr = "0x0000000000000000000000000000000000000000";
const notZeroAddr = "0x000000000000000000000000000000000000dead";

let signers;
let primary, alice, bob; 
let kiwi;
let uwucrew;
let salesContract;
let WET, WAIFUSION;

describe("NFT WET Sale Test", function () {
  before("Setup", async () => {    
    await network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_ETH_KEY}`,
            blockNumber: 12964000,
          },
        },
      ],
    });
    signers = await ethers.getSigners();
    primary = signers[0];
    alice = signers[1];
    bob = signers[2];
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: ["0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48"]}
    );
    kiwi = await ethers.provider.getSigner("0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48")

    WET = await ethers.getContractAt("IERC20", "0x76280af9d18a868a0af3dca95b57dde816c1aaf2");
    WAIFUSION = await ethers.getContractAt("ERC721", "0x2216d47494e516d8206b70fca8585820ed3c4946");

    const block = await ethers.provider.getBlock("latest");
    let Sales = await ethers.getContractFactory("uwucrewWaveLockSaleWithMint");
    salesContract = await Sales.deploy(block.timestamp + 1000, 40);
    await salesContract.deployed();
  });

  ////////////////////////////
  // NFT Testing            //
  ////////////////////////////

  it("Should properly recognize the owner", async () => {
    expect(await uwucrew.owner()).to.equal(primary.address);
  });

  it("Should not let a non-owner prepare the sales contract", async () => {
    await expectException(uwucrew.connect(alice).prepareSale(salesContract.address), "caller is not the owner");
  });

  it("Should let the owner prepare the sales contract", async () => {
    await uwucrew.prepareSale(salesContract.address)
  });

  it("Should not let Alice mint 1 before buying", async () => {
    await expectException(salesContract.connect(alice).mint(1), "Not enough balance");
  });

  it("Should not let Alice buy with eth before the starting block", async () => {
    const oldSold = await salesContract.amountSold();
    await expectException(salesContract.connect(alice).buy(4, {value: ethers.utils.parseEther("0.24")}), "Sale has not started");
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold);
  });

  it("Should let Kiwi swap v1 -> v2 tickets before the sale starts", async () => {
    await WET.connect(kiwi).approve(salesContract.address, BASE.mul(100000000000));

    let oldBal = await salesContract.balance(kiwi.getAddress());
    await salesContract.connect(kiwi).buy(1);
    let newBal = await salesContract.balance(kiwi.getAddress());
    expect(newBal).to.equal(oldBal.add(3))
  })

  it("Should not let Kiwi mint 1 before the sale starts", async () => {
    await expectException(salesContract.connect(kiwi).mint(1), "Can only mint after the sale has begun");
  });

  it("Should mine some blocks", async () => {
    const block = await ethers.provider.getBlock("latest");
    await network.provider.send("evm_increaseTime", [block.timestamp + 1000])
    await ethers.provider.send("evm_mine", []);
    await ethers.provider.send("evm_mine", []);
    await ethers.provider.send("evm_mine", []);
    await ethers.provider.send("evm_mine", []);
    await ethers.provider.send("evm_mine", []);
  });

  it("Should let Alice buy with eth", async () => {
    const oldSold = await salesContract.amountSold();
    await salesContract.connect(alice).buy(4, {value: ethers.utils.parseEther("0.24")});
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold.add(4));
  });

  it("Should let Alice mint 1 after buying", async () => {
    let oldBal = await uwucrew.balanceOf(alice.getAddress());
    await salesContract.connect(alice).mint(1);
    let newBal = await uwucrew.balanceOf(alice.getAddress());
    expect(newBal).to.equal(oldBal.add(1))
  });

  it("Should not Alice mint more than what they have", async () => {
    await expectException(salesContract.connect(alice).mint(4), "Not enough balance");
  });

  it("Should let Kiwi mint 1 after the sale starts", async () => {
    let oldBal = await uwucrew.balanceOf(kiwi.getAddress());
    await salesContract.connect(kiwi).mint(1);
    let newBal = await uwucrew.balanceOf(kiwi.getAddress());
    expect(newBal).to.equal(oldBal.add(1))
  });

  it("Should let Kiwi swap v1 -> v2 tickets after the sale starts and after minting one", async () => {
    let oldBal = await salesContract.balance(kiwi.getAddress());
    await salesContract.connect(kiwi).swapWFforUWU([5334, 398]);
    let newBal = await salesContract.balance(kiwi.getAddress());
    expect(newBal).to.equal(oldBal.add(2))
  })
})
