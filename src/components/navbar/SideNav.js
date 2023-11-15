import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const adminLinks = [
  { id: 1, path: '/doctors', text: 'Doctors' },
  { id: 2, path: '/New-reservation', text: 'New appointment' },
  { id: 3, path: '/My-reservations', text: 'My appointment' },
  { id: 4, path: '/add-doctor', text: 'Add Doctor' },
  { id: 5, path: '/delete-doctor', text: 'Delete Doctor' },
];

const SocialMedia = () => (
  <div className="mt-[5rem]">
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

const SideNav = () => (
  <div className=" hidden md:block fixed h-screen bg-white border-r border-gray-300 w-30">
    <ul className="flex flex-col items-end font-bold text-[#000000] gap-4 uppercase mt-[10rem]">
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
);

export default SideNav;
