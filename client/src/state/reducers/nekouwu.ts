import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface NekoUwu {
	tokenIdsHeld: Array<number>;
	tokenIdsAvailable: Array<boolean>;
}

export const initialState: NekoUwu = {
	tokenIdsHeld: [],
	tokenIdsAvailable: []
};

export const nekoboxSlice = createSlice({
	name: 'nekobox',
	initialState,
	reducers: {
		setTokenIdsHeld: (state, action: PayloadAction<Array<number>>) => {
			state.tokenIdsHeld = action.payload;
		},
		setTokenIdsEligibility: (state, action: PayloadAction<Array<boolean>>) => {
			state.tokenIdsAvailable = action.payload;
		}
	}
});

export const { setTokenIdsHeld, setTokenIdsEligibility } = nekoboxSlice.actions;

export const selectTokenIdsHeld = (state: RootState): Array<number> => state.nekobox.tokenIdsHeld;

export const selectTokenIdEligibility = (state: RootState): Array<boolean> => state.nekobox.tokenIdsAvailable;

export default nekoboxSlice.reducer;
