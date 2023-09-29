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
  error: '',
  loading: false,
  isRefresh: false,
};
export const slice = createSlice({
  name: 'userAuth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.pending, (state, { payload }) => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoggedIn = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addMatcher(
        isAnyOf(
          loginThunk.pending,
          registerThunk.pending,
          (state, { payload }) => {
            state.loading = true;
          }
        )
      )
      .addMatcher(
        isAnyOf(
          loginThunk.fulfilled,
          registerThunk.fulfilled,
          (state, { payload }) => {
            state.user = payload.user;
            state.token = payload.token;
            state.loading = false;
            state.isLoggedIn = true;
          }
        )
      );
  },
});
