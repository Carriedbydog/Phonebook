import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/docs/',
});

const setToken = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  contactsApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkApi) => {
    try {
      const { data } = contactsApi.post('users/signup', credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkApi) => {
    try {
      const { data } = contactsApi.post('users/login', credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await contactsApi.post('users/signup');
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (credentials, thunkApi) => {
    setToken();
    try {
    } catch (error) {}
  }
);
