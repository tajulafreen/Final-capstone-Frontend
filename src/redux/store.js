import { configureStore } from '@reduxjs/toolkit';
import doctorReducer from './doctor/doctorSlice';
import userSlice from './user/userSlice';

const store = configureStore({
  reducer: {
    doctor: doctorReducer,
    user: userSlice,
  },
});

export default store;
