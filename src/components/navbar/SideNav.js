import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV, FaBars, FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './nav.css';
import { logout } from '../../redux/user/userSlice';

const adminLinks = [
  { id: 1, path: '/doctors', text: 'Doctors' },
  { id: 2, path: '/New-reservation', text: 'New appointment' },
  { id: 3, path: '/My-reservations', text: 'My appointment' },
  { id: 4, path: '/add-doctor', text: 'Add Doctor' },
  { id: 5, path: '/delete-doctor', text: 'Delete Doctor' },
];

const SocialMedia = () => (
  <div className="mt-[10rem] md:mt-[12rem]">
    <div className="flex justify-center items-center text-[18px] text-gray-700 gap-3 font-medium ">
      <FaTwitter />
      <FaFacebookF />
      <TiSocialGooglePlus />
      <FaVimeoV />
      <FaPinterestP />
    </div>
    <div>
      <p className="text-gray-800 font-medium text-[18px] text-center mt-4">&copy;Copyright 2023</p>
    </div>
  </div>
);

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout);
    navigate('/login');
  };

  return (
    <div className={`menu-bar ${isOpen ? 'open-btn' : 'close-btn'}`}>
      <div className="hidden md:block fixed h-screen bg-white md:border-r md:border-gray-300">
        <ul className="md:flex md:flex-col md:items-end font-bold uppercase md:gap-4 mt-[10rem]">
          {adminLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `text-gray-700 py-2 px-4 no-underline${isActive ? ' my-active-class bg-lime-500 text-white' : ''}`}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
          <button type="button" className="d:flex md:flex-col md:items-end hover:bg-lime-500 py-2 px-4 text-gray-800 font-bold hover:text-white" onClick={handleLogout}>
            LOGOUT
          </button>
        </ul>
        <SocialMedia />
      </div>
      <button type="button" onClick={handleToggle} className="menu-icon text-[#DADDB1] mb-6">
        {isOpen ? <FaTimes className="close" /> : <FaBars className="open" />}
      </button>
      {isOpen && (
        <div className="fabarLinks">
          <ul className="flex flex-col items-center justify-center font-bold  gap-4 uppercase md:mt-[10rem]">
            {adminLinks.map((link) => (
              <li key={link.id} className="links">
                <NavLink
                  to={link.path}
                  onClick={handleClick}
                  className={({ isActive }) => `text-gray-700 py-2 px-4 no-underline${isActive ? ' my-active-class bg-lime-500 text-white' : ''}`}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
            <button type="button" className=" py-2 px-4 text-gray-800  font-bold hover:text-white" onClick={handleLogout}>
              LOGOUT
            </button>
            <SocialMedia />
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNav;
