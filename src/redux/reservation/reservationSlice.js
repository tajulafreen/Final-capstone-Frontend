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
     
  },
});

export default reservationsSlice.reducer;
