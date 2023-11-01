// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/forms/SignInForm';
import SideNav from './components/navbar/SideNav';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <SideNav />

        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<SignInForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
