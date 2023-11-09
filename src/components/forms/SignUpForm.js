import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
          navigate.push('/doctors');
        } catch (error) {
          console.error('Sign Up Error:', error);
        }
      };

      return (
        <div className="flex items-center justify-center h-screen">
          <form className="bg-white p-8 shadow-md rounded-md w-96" onSubmit={handleSignUp}>
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
            <div className="mb-4">