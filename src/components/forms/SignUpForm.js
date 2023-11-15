import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signUpUser } from '../../redux/user/userSlice';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signUpUser({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
      navigate('/doctors');
    } catch (error) {
      console.error('Sign Up Error:', error);
    }
  };

  return (
    <div className="bg-lime-400 h-screen flex flex-col justify-center items-center">
      <form className="flex mb-4" onSubmit={handleSignUp}>
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-[.4rem] px-2 rounded-md text-[14px]"
            placeholder="Enter your name"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 font-semibold text-white px-2 py-1 rounded-md md:p-2 hover:bg-orange-600"
        >
          Sign Up
        </button>
      </form>
      <p className="text-white text-[14px] bg-orange-400 hover:bg-orange-600 px-2 py-1 rounded-md">
        have an account?
        {' '}
        <Link className="text-white text-[14px] no-underline" to="/login">Click here to log in</Link>
      </p>
    </div>
  );
};

export default SignUpForm;
