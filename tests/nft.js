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
    let Sales = await ethers.getContractFactory("uwucrewWaveLockSale");
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
    await uwucrew.prepareSale(alice.address)
  });

  it("Should not let a non sales contract address mint", async () => {
    await expectException(uwucrew.mint(alice.address, 0), "Nice try lol");
  });

  it("Should let the sales contract address mint", async () => {
    await uwucrew.connect(alice).mint(alice.address, 0);
  });

  let newURI = "https://api.uwucrew.art/uwu/";
  it("Should not let a non-owner change base URI", async () => {
    await expectException(uwucrew.connect(alice).setBaseURI(newURI), "caller is not the owner");
  })

  it("Should let owner change base URI", async () => {
    let oldURI = await uwucrew.baseURI();
    expect(oldURI).to.equal("");
    let oldTokenURI = await uwucrew.tokenURI(0);
    expect(oldTokenURI).to.equal("");
    await uwucrew.setBaseURI(newURI);
    let _newURI = await uwucrew.baseURI();
    expect(_newURI).to.equal(newURI);
    let _newTokenURI = await uwucrew.tokenURI(0);
    expect(_newTokenURI).to.equal(newURI+"0");
  })

  it("Should properly update base URI for tokens", async () => {
    await uwucrew.setBaseURI(newURI);
  })
})
