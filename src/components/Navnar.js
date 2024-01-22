import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">EDWIN</a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
      <div className="menu">
        <ul className="list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
