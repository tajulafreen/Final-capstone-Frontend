import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/doctorSlice';
import userSlice from './user/userSlice';
import reservationsReducer from './reservation/reservationSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userSlice,
    reservationsList: reservationsReducer,
  },
});

export default store;
