import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../../redux/user/userSlice';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await dispatch(signInUser({ name: email }));
      navigate.push('/doctors');
    } catch (error) {
      console.error('Sign In Error:', error);
    }
  };
  eturn(
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSignIn}>
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
    </div>,
  );
};

export default SignInForm;
