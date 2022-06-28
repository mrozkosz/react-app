import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
  },
  reducers: {
    increment: (state,action) => {
      // eslint-disable-next-line no-param-reassign
      state.value += action.payload;
    },
    decrement: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, fetchItems } = counterSlice.actions;

export default counterSlice.reducer;
