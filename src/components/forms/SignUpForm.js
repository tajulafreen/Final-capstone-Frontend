import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signUpUser } from '../../redux/user/userSlice';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signUpUser({ name }));
      setName('');
      navigate('/doctors');
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[7rem]">
      <form className="bg-[#F5EEC8] rounded-md shadow py-[7rem] px-[3rem]" onSubmit={handleSignUp}>
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[100%] text-[#FCF5ED] first-letter:text-[16px] rounded-md py-[.7rem] px-[1.5rem] mb-4 border-none"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          className="bg-lime-500 w-[100%] hover:bg-[#0F0F0F] font-bold px-3 py-1 rounded-md text-white"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-1 font-bold">
        have an account?
        {' '}
        <Link className="no-underline text-black" to="/login">Click here to log in</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
