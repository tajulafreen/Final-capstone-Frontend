import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { signInUser } from '../../redux/user/userSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signInUser({ name: email }));
      navigate('/doctors');
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };

  return (
    <div className="bg-lime-400 h-screen flex flex-col justify-center items-center">
      <form className="flex mb-4" onSubmit={handleSignIn}>
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-[.4rem] px-2 rounded-md text-[14px]"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-400 text-white font-semibold px-2 py-1 rounded-md md:p-2 hover:bg-orange-600"
        >
          Sign In
        </button>
      </form>
      <p className="text-white text-[14px] bg-orange-400 hover:bg-orange-600 px-2 py-1 rounded-md">
        Don&apos;t have an account?
        {' '}
        <Link className="text-white text-[14px] no-underline" to="/">Click here to sign_up</Link>
      </p>
    </div>
  );
};

export default SignInForm;
