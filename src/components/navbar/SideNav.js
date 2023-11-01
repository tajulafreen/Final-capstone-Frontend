import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';

const adminLinks = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
  { id: 4, path: '/add', text: 'ADD' },
  { id: 5, path: '/delete', text: 'DELETE' },
];

const links = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
];

const SocialMedia = () => (
  <div className="absolute bottom-0 start-0">
    <div className="flex gap-3 p-5">
      <FaTwitter className="text-gray-700" />
      <FaFacebookF className="text-gray-700" />
      <TiSocialGooglePlus className="text-gray-700" />
      <FaVimeoV className="text-gray-700" />
      <FaPinterestP className="text-gray-700" />
    </div>
    <div>
      <p className="text-sm">&copy; 2023</p>
    </div>
  </div>
);

const SideNav = () => {
  const data = JSON.parse(localStorage.getItem('user'));
  const { user } = data || {};
  return (
    <div className="bg-light">
      <div className="w-200 h-screen">
        <ul className="flex flex-col justify-center items-end mt-14">
          {user && user.role === 'admin' ? (adminLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="btn-light btn w-full"
                activeClassName="bg-green-500 text-white"
              >
                {link.text}
              </NavLink>
            </li>
          ))) : links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="btn-light btn w-full"
                activeClassName="bg-green-500 text-white"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideNav;
