import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import SignInForm from './components/forms/SignInForm';
import SignUpForm from './components/forms/SignUpForm';
import SideNav from './components/navbar/SideNav';
import DoctorList from './components/doctor/DoctorList';
import AddDoctorForm from './components/doctor/AddDoctorForm';
import DoctorDetails from './components/doctor/DoctorDetails';
import NewReservation from './components/pages/newReservation';
import MyReservations from './components/pages/myReservations';
import DeleteDoctor from './components/doctor/DeleteDoctor';

const App = () => (
  <Router>
    <div className="flex">
      <SideNav />
      <div className="flex-1 ml-40 p-8">
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctorForm />} />
          <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
          <Route path="New-reservation" element={<NewReservation />} />
          <Route path="My-reservations" element={<MyReservations />} />
          <Route path="/delete-doctor" element={<DeleteDoctor />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
