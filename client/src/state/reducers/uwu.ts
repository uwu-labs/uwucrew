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

export const uwuSlice = createSlice({
	name: 'uwu',
	initialState,
	reducers: {
		setOwnedTickets: (state, action: PayloadAction<number>) => {
			state.balance = action.payload;
		},
		setBuyPrice: (state, action: PayloadAction<number>) => {
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
	setIsLocked
} = uwuSlice.actions;

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
