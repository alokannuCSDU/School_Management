import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar=()=>{
  return(
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/achievement">Achievement</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;