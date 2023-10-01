import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const contactsApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  contactsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  contactsApi.defaults.headers.common.Authorization = ``;
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await contactsApi.post('/users/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (_, { rejectWithValue, getState }) => {
    const savedToken = getState().auth.token;
    if (!savedToken) {
      return rejectWithValue('token was not found');
    }
    try {
      setToken(savedToken);
      const { data } = await contactsApi.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
