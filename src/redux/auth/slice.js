import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations';
import { selectLoading } from 'redux/selectors';

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
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
      selectLoading = true;
    });
  },
});
