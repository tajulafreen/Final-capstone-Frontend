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
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = 'Failed to fetch reservations.';
      })
      .addCase(createReservation.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(createReservation.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = 'Failed to create reservation.';
      });
  },
});

export default reservationsSlice.reducer;
