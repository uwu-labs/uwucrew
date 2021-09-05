import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BigNumber } from 'ethers';
import { bnToNumber } from 'lib/bigNumber';
import type { RootState } from '../index';

export interface UserState {
	balance: number;
	buyPrice: BigNumber;
	amountForSale: number;
	amountSold: number;
	startTime: number;
	startBlock: number;
	wave: number;
	waveBlockLength: number;
	isLocked: boolean;
	reload: number;
}

export const initialState: UserState = {
	balance: 0,
	buyPrice: BigNumber.from('0'),
	amountForSale: 0,
	amountSold: 0,
	startTime: 0,
	startBlock: 0,
	wave: 1,
	waveBlockLength: 1,
	isLocked: false,
	reload: 0
};

export const uwuSlice = createSlice({
	name: 'uwu',
	initialState,
	reducers: {
		setOwnedTickets: (state, action: PayloadAction<number>) => {
			state.balance = action.payload;
		},
		setBuyPrice: (state, action: PayloadAction<BigNumber>) => {
			state.buyPrice = action.payload;
		},
		setStartTime: (state, action: PayloadAction<number>) => {
			state.startTime = action.payload;
		},
		setStartBlock: (state, action: PayloadAction<number>) => {
			state.startBlock = action.payload;
		},
		setAmountForSale: (state, action: PayloadAction<number>) => {
			state.amountForSale = action.payload;
		},
		setAmountSold: (state, action: PayloadAction<number>) => {
			state.amountSold = action.payload;
		},
		setWave: (state, action: PayloadAction<number>) => {
			state.wave = action.payload;
		},
		setWaveBlockLength: (state, action: PayloadAction<number>) => {
			state.waveBlockLength = action.payload;
		},
		setIsLocked: (state, action: PayloadAction<boolean>) => {
			state.isLocked = action.payload;
		},
		reload: (state) => {
			state.reload = Math.random();
		}
	}
});

export const {
	setOwnedTickets,
	setBuyPrice,
	setStartTime,
	setStartBlock,
	setAmountForSale,
	setAmountSold,
	setWave,
	setWaveBlockLength,
	setIsLocked,
	reload
} = uwuSlice.actions;

export const selectOwnedTickets = (state: RootState): number => state.uwu.balance;
export const selectBuyPrice = (state: RootState): BigNumber => state.uwu.buyPrice;
export const selectBuyPriceNumber = (state: RootState): number => bnToNumber(state.uwu.buyPrice);
export const selectRemaining = (state: RootState): number => state.uwu.amountForSale - state.uwu.amountSold;
export const selectIsLocked = (state: RootState): boolean => state.uwu.isLocked;
export const selectWaveBlockLength = (state: RootState): number => state.uwu.waveBlockLength;
export const selectStartTime = (state: RootState): number => state.uwu.startTime;
export const selectReload = (state: RootState): number => state.uwu.reload;

export default uwuSlice.reducer;
