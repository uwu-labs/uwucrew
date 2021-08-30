import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SALE_CONTRACT } from 'core/constants';
import { BigNumber, Contract } from 'ethers';
import type { RootState } from '../index';
import abi from '../../contracts/uwucrewWaveLockSale.json';
import { bnToNumber } from 'lib/bigNumber';

export interface UserState {
	balance: number;
	buyPrice: number;
	amountForSale: number;
	amountSold: number;
	startTime: number;
	startBlock: number;
	wave: number;
	waveBlockLength: number;
	isLocked: boolean;
}

export const initialState: UserState = {
	balance: 0,
	buyPrice: 0,
	amountForSale: 0,
	amountSold: 0,
	startTime: 0,
	startBlock: 0,
	wave: 1,
	waveBlockLength: 1,
	isLocked: false
};

export const refresh = createAsyncThunk(
	'uwu/refresh',
	async ({ library, account }: { library: any; account: string | null | undefined }): Promise<UserState> => {
		const contract = new Contract(SALE_CONTRACT, abi, library.getSigner());
		let newState = { ...initialState };

		const getBalance = async () => {
			if (!account) return;
			const response = await contract.balance(account);
			newState.balance = response;
		};
		const getBuyPrice = async () => {
			const response: BigNumber = await contract.buyPrice();
			newState.buyPrice = bnToNumber(response);
		};
		const getStartTime = async () => {
			const response: BigNumber = await contract.startTime();
			const startTime = bnToNumber(response);
			newState.startTime = startTime;
		};
		const getStartBlock = async () => {
			const response: BigNumber = await contract.startBlock();
			const startBlock = bnToNumber(response);
			newState.startBlock = startBlock;
		};
		const getAmountForSale = async () => {
			const response: BigNumber = await contract.amountForSale();
			newState.amountForSale = bnToNumber(response);
		};
		const getAmountSold = async () => {
			const response: BigNumber = await contract.amountSold();
			newState.amountSold = bnToNumber(response);
		};
		const getWave = async () => {
			const response: BigNumber = await contract.wave();
			newState.wave = bnToNumber(response);
		};
		const getWaveBlockLength = async () => {
			const response: BigNumber = await contract.waveBlockLength();
			newState.waveBlockLength = bnToNumber(response);
		};
		const getIsLocked = async () => {
			if (!account) return;
			const response: boolean = await contract.waveLock(account);
			newState.isLocked = response;
		};

		await Promise.all([
			getBalance(),
			getBuyPrice(),
			getStartTime(),
			getStartBlock(),
			getAmountForSale(),
			getAmountSold(),
			getWave(),
			getWaveBlockLength(),
			getIsLocked()
		]);
		return newState;
	}
);
export const uwuSlice = createSlice({
	name: 'uwu',
	initialState,
	reducers: {
		setOwnedTickets: (state, action: PayloadAction<number>) => {
			state.balance = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(refresh.fulfilled, (state, action: PayloadAction<UserState>) => {
			state.balance = action.payload.balance;
			state.buyPrice = action.payload.buyPrice;
		});
	}
});

export const { setOwnedTickets } = uwuSlice.actions;

export const selectOwnedTickets = (state: RootState): number => state.uwu.balance;
export const selectBuyPrice = (state: RootState): number => state.uwu.buyPrice;
export const selectWave = (state: RootState): number => state.uwu.wave + 1;
export const selectRemaining = (state: RootState): number => state.uwu.amountForSale - state.uwu.amountSold;
export const selectIsLocked = (state: RootState): boolean => state.uwu.isLocked;
export const selectStartTime = (state: RootState): Date => {
	const d = new Date(0);
	d.setUTCSeconds(state.uwu.startTime);
	return d;
};

export default uwuSlice.reducer;
