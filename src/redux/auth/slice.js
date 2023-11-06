import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, signUp } from './operations';

const initialState = {
  token: null,
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefreshing: false,
};

const handleAuthFulfilled = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};

const handleLogOut = state => {
  state.token = null;
  state.user = { name: null, email: null };
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, handleAuthFulfilled)
      .addCase(logIn.fulfilled, handleAuthFulfilled)
      .addCase(logOut.fulfilled, handleLogOut)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
