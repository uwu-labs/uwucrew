import { providers } from 'ethers';

export const SITE = 'uwucrew.art';
export const SITE_PROTOCOL = `https://${SITE}`;
export const INFURA_ID = '8aed9cce114f4ff78727037332122b08'; // TODO: Make env var
export const PRICE = 0.008;

export const DESCRIPTION =
	'uwucrew, released on September 5th 2021, is an art NFT collection of 9670 anime-style inspired avatars created by uwu Labs. Our mission is to keep it uwu and build a positive culture around empowering artists!';

// Rinkeby;
// export const SALE_CONTRACT: string = '0xA17e72b5172E12e9e3A37Ff0DE201aAF3fBA03b4';
// export const BSC_CLAIM: string = '0x838FDB438828FBF03fF1F5b1d1faB66B5302705A';
// export const UWU_CONTRACT: string = '0x64d7F507f3635ea5DFdD9FDec1f2fa3CbF66b7fb';
// export const SECONDS_PER_BLOCK = 16;

// Goerli;
export const goerliProvider = new providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`, 5);

// Prod
export const SALE_CONTRACT = '0x5E75Bc35955F9E196e5bb25ddDE09424B476a18D';
export const BSC_CLAIM = '0xa0e85Bbca0aB3ACc9d6404E55A3e6B6c147a3770';
export const UWU_CONTRACT = '0xF75140376D246D8B1E5B8a48E3f00772468b3c0c';
export const NEKOUWU_CONTRACT = '0xe55476A7Cd35646A7101605C97EbBd002A3BCB3E';

export const SECONDS_PER_BLOCK = 13.4;

export const waveLimits: number[] = [4, 16, 32, 32];
