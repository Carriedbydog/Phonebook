import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  loading: false,
  isRefresh: false,
};
export const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addMatcher(
        isAnyOf(loginThunk.pending, registerThunk.pending, state => {
          state.loading = true;
        })
      )
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.loading = false;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
