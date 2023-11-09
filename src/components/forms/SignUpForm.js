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