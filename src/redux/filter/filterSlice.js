import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  filter: '',
};
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterContacts } = filterSlice.actions;

export default filterSlice.reducer;
