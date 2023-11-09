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
