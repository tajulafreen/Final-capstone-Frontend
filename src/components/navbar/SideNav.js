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
  <div className="absolute bottom-0 start-0 w-full">
    <div className="flex gap-3 p-3">
      <FaTwitter className="text-gray-700" />
      <FaFacebookF className="text-gray-700" />
      <TiSocialGooglePlus className="text-gray-700" />
      <FaVimeoV className="text-gray-700" />
      <FaPinterestP className="text-gray-700" />
    </div>
    <div>
      <p className="text-sm ps-5">&copy; 2023</p>
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
