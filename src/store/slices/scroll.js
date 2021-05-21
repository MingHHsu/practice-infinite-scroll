import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startScroll: false,
};

const { actions, reducer } = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    startScroll(state) {
      return {
        ...state,
        startScroll: true,
      };
    },
    stopScroll(state) {
      return {
        ...state,
        startScroll: false,
      };
    },
  },
});

export const {
  startScroll,
  stopScroll,
} = actions;

export default reducer;
