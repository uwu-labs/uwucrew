import { BigNumber, ethers } from 'ethers';

export const bnToNumber = (bigNumber: BigNumber): number => {
	return Number(ethers.utils.formatEther(bigNumber.toString()));
};
