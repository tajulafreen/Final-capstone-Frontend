import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV, FaBars, FaTimes,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './nav.css';

const adminLinks = [
  { id: 1, path: '/doctors', text: 'Doctors' },
  { id: 2, path: '/New-reservation', text: 'New appointment' },
  { id: 3, path: '/My-reservations', text: 'My appointment' },
  { id: 4, path: '/add-doctor', text: 'Add Doctor' },
  { id: 5, path: '/delete-doctor', text: 'Delete Doctor' },
];

const SocialMedia = () => (
  <div className="mt-[7rem]">
    <div className="flex justify-center items-center text-[18px] text-gray-700 gap-1 font-medium mb-2">
      <FaTwitter />
      <FaFacebookF />
      <TiSocialGooglePlus />
      <FaVimeoV />
      <FaPinterestP />
    </div>
    <div>
      <p className="text-gray-800 font-medium text-[18px] text-center">&copy;Copyright 2023</p>
    </div>
  </div>
);

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`menu-bar ${isOpen ? 'open-btn' : 'close-btn'}`}>
      <div className="hidden md:block fixed h-screen bg-white md:border-r md:border-gray-300">
        <ul className="md:flex md:flex-col md:items-end font-bold text-[#000000] md:gap-4 uppercase mt-[10rem]">
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
        </ul>
        <SocialMedia />
      </div>
      <button type="button" onClick={handleToggle} className="menu-icon">
        {isOpen ? <FaTimes className="close" /> : <FaBars className="open" />}
      </button>
      {isOpen && (
        <div className="fabarLinks">
          <ul className="flex flex-col items-end font-bold text-[#000000] gap-4 uppercase mt-[10rem]">
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
            <SocialMedia />
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideNav;
