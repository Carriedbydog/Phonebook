import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = contactsApi.post('users/signup', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = contactsApi.post('users/login', credentials);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await contactsApi.post('users/signup');
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (credentials, { rejectWithValue, getState }) => {
    const savedToken = getState().userAuth.token;
    setToken(savedToken);
    if (!savedToken) {
      toast.warning('token was not found');
      return rejectWithValue('token was not found');
    }
    try {
    } catch (error) {}
  }
);
