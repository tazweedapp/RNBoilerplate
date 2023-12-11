import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '@utils/axiosInstance';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err?.message);
    }
  }
);

export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await axiosInstance.post(`auth/signup`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
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
