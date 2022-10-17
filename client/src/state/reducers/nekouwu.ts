import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface NekoUwu {
	tokenIdsHeld: Array<number>;
}

export const initialState: NekoUwu = {
	tokenIdsHeld: []
};

export const nekoboxSlice = createSlice({
	name: 'nekobox',
	initialState,
	reducers: {
		setTokenIdsHeld: (state, action: PayloadAction<Array<number>>) => {
			state.tokenIdsHeld = action.payload;
		}
	}
});

export const { setTokenIdsHeld } = nekoboxSlice.actions;

export const selectTokenIdsHeld = (state: RootState): Array<number> => state.nekobox.tokenIdsHeld;

export default nekoboxSlice.reducer;
