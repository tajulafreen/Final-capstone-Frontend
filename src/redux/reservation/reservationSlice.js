import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations, createReservation } from './thunk';

const initialState = {
  reservations: [],
  isLoading: false,
  error: false,
  errMsg: '',
};

const reservationsSlice = createSlice({
  name: 'reservationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

  },
});

export default reservationsSlice.reducer;
