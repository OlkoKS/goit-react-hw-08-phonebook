import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: { handleFilter: (state, action) => action.payload },
});

export const { handleFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
