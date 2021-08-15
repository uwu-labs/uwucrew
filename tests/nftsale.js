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
let uwucrew;
let salesContract;

describe("NFT Sale Test", function () {
  before("Setup", async () => {
    signers = await ethers.getSigners();
    primary = signers[0];
    alice = signers[1];
    bob = signers[2];
    // await hre.network.provider.request({
    //   method: "hardhat_impersonateAccount",
    //   params: ["0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48"]}
    // );
    // punkOwner = await ethers.provider.getSigner("0x08D816526BdC9d077DD685Bd9FA49F58A5Ab8e48")

    // vault = await ethers.getContractAt("NFTXVaultUpgradeable", "0x269616d549d7e8eaa82dfb17028d0b212d11232a");
    // vaults.push(vault)

    // nftx = await ethers.getContractAt("NFTXVaultFactoryUpgradeable", "0xBE86f647b167567525cCAAfcd6f881F1Ee558216");
    // erc721 = await ethers.getContractAt("CryptoPunksMarket", "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB");

    let UwUCrew = await ethers.getContractFactory("uwucrew");
    uwucrew = await UwUCrew.deploy("uwucrew", "UWU", 140);
    await uwucrew.deployed();

    const block = await ethers.provider.getBlock("latest");
    let Sales = await ethers.getContractFactory("uwucrewWaveLockSaleWithMint");
    salesContract = await Sales.deploy(uwucrew.address, block.timestamp + 1000, 40, 40, 20);
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

  it("Should let Alice mint the other 3", async () => {
    let oldBal = await uwucrew.balanceOf(alice.getAddress());
    await salesContract.connect(alice).mint(3);
    let newBal = await uwucrew.balanceOf(alice.getAddress());
    expect(newBal).to.equal(oldBal.add(3))
  });

  it("Shouldn't let Alice buy again in this wave", async () => {
    const oldSold = await salesContract.amountSold();
    await expectException(salesContract.connect(alice).buy(4, {value: ethers.utils.parseEther("0.24")}), "Locked for this wave");
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold);
  });

  it("Should mine 30 blocks", async () => {
    for (let i = 0; i < 32; i++) {
      await ethers.provider.send("evm_mine", []);
    }
  });

  it("Shouldn't let Alice buy again more than a tx max", async () => {
    const oldSold = await salesContract.amountSold();
    await expectException(salesContract.connect(alice).buy(35, {value: ethers.utils.parseEther("0.84")}), "Max for TX in this wave");
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold);
  });

  it("Should let Alice buy more with eth", async () => {
    const oldSold = await salesContract.amountSold();
    await salesContract.connect(alice).buy(12, {value: ethers.utils.parseEther("0.72")});
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold.add(12))
  });

  it("Should let Alice mint the other 3", async () => {
    let oldBal = await uwucrew.balanceOf(alice.getAddress());
    await salesContract.forceMint(alice.getAddress(), 3);
    let newBal = await uwucrew.balanceOf(alice.getAddress());
    expect(newBal).to.equal(oldBal.add(3))
  });

  it("Should mine 30 blocks", async () => {
    for (let i = 0; i < 32; i++) {
      await ethers.provider.send("evm_mine", []);
    }
  });

  it("Should let cap off and refund if purchasing more than avail with eth", async () => {
    const oldSold = await salesContract.amountSold();
    const amountForSale = await salesContract.amountForSale();
    const remaining = amountForSale.sub(oldSold)
    const oldBal = await ethers.provider.getBalance(alice.getAddress());
    let tx = await salesContract.connect(alice).buy(32, {value: ethers.utils.parseEther("1.92")});
    let receipt = await tx.wait();
    const newBal = await ethers.provider.getBalance(alice.getAddress());
    const newSold = await salesContract.amountSold();
    expect(newSold).to.equal(oldSold.add(remaining))
    expect(newBal.add(ethers.utils.parseEther("0.01"))).to.be.gt(oldBal.sub(remaining.mul(ethers.utils.parseEther("0.06"))).sub(receipt.gasUsed))
  });

  it("Should not let someone else swap to rest of sale", async () => {
    await expectException(salesContract.connect(alice).closeSwapToSale(), "caller is not the owner");
  })

  it("Should let owner allocate swap amount to rest of sale", async () => { 
    let oldForSale = await salesContract.amountForSale();  
    const extra = await salesContract.amountForSwap();
    await salesContract.closeSwapToSale();
    let newForSale = await salesContract.amountForSale();  
    expect(newForSale).to.equal(oldForSale.add(extra));
  })

  it("Should not let someone else add extra to sale", async () => {
    await expectException(salesContract.connect(alice).addExtraToSale(5), "caller is not the owner");
  })

  it("Should let owner allocate extra to sale", async () => { 
    let oldForSale = await salesContract.amountForSale();  
    const oldBal = await salesContract.balance(primary.getAddress());
    await salesContract.addExtraToSale(5);
    const newBal = await salesContract.balance(primary.getAddress());
    let newForSale = await salesContract.amountForSale();  
    expect(newForSale).to.equal(oldForSale.add(5));
    expect(newBal).to.equal(oldBal.sub(5));
  })

  it("Should not let someone else add extra to sale", async () => {
    await expectException(salesContract.connect(alice).closeSwapToOwner(), "caller is not the owner");
  })

  it("Should let owner allocate extra to sale", async () => { 
    let oldBalance = await salesContract.balance(primary.getAddress());  
    const forSwap = await salesContract.amountForSwap();
    await salesContract.closeSwapToOwner();
    let newBalance = await salesContract.balance(primary.getAddress());   
    const newSwap = await salesContract.amountForSwap();
    expect(newBalance).to.equal(oldBalance.add(forSwap));
    expect(newSwap).to.equal(forSwap);
  })
})
