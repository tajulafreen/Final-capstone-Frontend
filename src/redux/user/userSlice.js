import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signUpUser = createAsyncThunk('user/signUp', async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/sign_up', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });
  export const signInUser = createAsyncThunk('user/signIn', async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/login', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  });

  const userSlice = createSlice({
    name: 'user',
    initialState: { user: null, status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signUpUser.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })