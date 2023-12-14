// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
// import logo from '../logo.png'; // Import your logo file


const Navbar = () => {
  return (
    <>
      <nav>

        <div>
          <h2>MARCHY</h2>
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

        <div>
          <button className='but'>Contact us</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

