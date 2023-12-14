// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
// import logo from '../logo.png'; // Import your logo file

const Navbar = () => {
  return (
    <>
      <nav>

        <div>
          <i>MARCHY</i>
        </div>

        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Pages">Pages</a></li>
            <li><a href="/service">Service</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className='but'>
          <button>Contact</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

