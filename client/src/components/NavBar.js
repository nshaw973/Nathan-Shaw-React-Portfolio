import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="items-center">
        <Link to="/" className="text-xl text-black font-bold no-underline font-sans ml-4 mb-4">
          Nathan Shaw
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black no-underline">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
