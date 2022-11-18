import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Screen } from '../../types/types';

const initialState: Screen = {
  screen: 'Splash'
}
export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setScreen: (state, action: PayloadAction<Screen>) => {
      const {screen} = action.payload;
      console.log(screen);
      state.screen = screen;
    }
  }
})

export const {setScreen} = screenSlice.actions;
export const screenSelect = (state: RootState) => state.screen;
export default screenSlice.reducer;