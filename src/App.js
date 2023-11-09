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

const App = () => (
  <Router>
    <div className="flex">
      <SideNav />
      <div className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/add-doctor" element={<AddDoctorForm />} />
          <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
