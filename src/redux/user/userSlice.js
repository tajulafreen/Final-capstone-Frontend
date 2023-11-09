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