import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import user from '../assets/images/user.svg';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink className="logo" to="/">
          Bookstore CMS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          BOOKS
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/Categories"
        >
          CATEGORIES
        </NavLink>
      </li>
    </ul>
    <NavLink
      className={({ isActive }) => (isActive ? 'active' : '')}
      to="/bookstore"
    >
      <figure>
        <img className="user-icon" alt="User settings" src={user} />
      </figure>
    </NavLink>
  </nav>
);

export default NavBar;
