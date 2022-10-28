import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  name: 'Dare',
};
const countSlice = createSlice({
  name: 'countState',
  initialState,
  reducers: {
    increaseCount: (state) => {
      return {
        count: state.count + 1,
      };
    },
    decreaseCount: (state) => {
      return {
        count: state.count - 1,
      };
    },
    increaseByUserInput: (state, action) => {
      return {
        count: state.count + action.payload,
      };
    },
  },
});

export const { increaseCount, decreaseCount, increaseByUserInput } =
  countSlice.actions;

export default countSlice.reducer;
