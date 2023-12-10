import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/auth';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  console.log('CREDENTIAL:: ', credentials);
  const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('RESPONSE:: ', response.data);
  return response.data;
});

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.data;
});

const INITIAL_STATE = { user: null, token: null, theme: 'light' };

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
    resetAuth: () => INITIAL_STATE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, { payload }) => {
        const { token, ...rest } = payload;
        state.user = rest;
        state.token = token;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const selectTheme = (state) => state.auth.theme;
export const selectAuthToken = (state) => state.auth.token;

export default authSlice.reducer;
export const { setTheme, resetAuth } = authSlice.actions;
