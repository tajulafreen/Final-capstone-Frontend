import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/user/userSlice';
const SignInForm = () => (
  <div className="flex items-center justify-center h-screen">
    <form className="bg-white p-8 shadow-md rounded-md w-96">
      <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Sign In
      </button>
    </form>
  </div>
);

export default SignInForm;
