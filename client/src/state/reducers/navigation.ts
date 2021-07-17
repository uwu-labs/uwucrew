import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index';

export interface NavigationState {
	slide: string;
}

export const initialState: NavigationState = {
	slide: ''
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		setSlide: (state, action: PayloadAction<string>) => {
			state.slide = action.payload;
		}
	}
});

export const { setSlide } = navigationSlice.actions;

export const selectSlide = (state: RootState): string => state.navigation.slide;

export default navigationSlice.reducer;
