import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com/auth';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post(`${API_BASE_URL}/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
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

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {},
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

export default authSlice.reducer;
