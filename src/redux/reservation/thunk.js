import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1';

export const fetchReservations = createAsyncThunk('reservations/fetchReservations', async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`${url}/users/${userId}/reservations`);
    console.log(response.data, userId);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createReservation = createAsyncThunk('reservations/createReservation', async ({ data }, thunkAPI) => {
  try {
    const response = await axios.post(`${url}/users/${data.userId}/reservations`, data);
    window.location.reload();
    thunkAPI.dispatch(fetchReservations());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const cancelReservation = createAsyncThunk('reservations/cancelReservation', async (reservationId, thunkAPI) => {
  try {
    await axios.delete(`${url}/reservations/${reservationId}`);
    return reservationId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});