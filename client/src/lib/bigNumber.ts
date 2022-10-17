import type { BigNumber } from 'ethers';

export const bnToNumber = (bigNumber: BigNumber): number => {
	return Number(bigNumber.toString());
};
