import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="The GTM Logo" className="logo" />
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/PopularCourses">Courses</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li className="dropdown">
          <Link to="/gtm">GTM <i className="fas fa-caret-down"></i></Link>
          <ul className="dropdown-content">
            <li><Link to="/gtm/team">Team</Link></li>
            <li><Link to="/gtm/about">About</Link></li>
            <li><Link to="/gtm/services">Services</Link></li>
          </ul>
        </li>
        <li><Link to="/ContactUs">Contact Us</Link></li>
        <li className="navbar-icons-item">
          <Link to="/cart" className="icon"><i className="fas fa-shopping-cart"></i></Link>
        </li>
        <li className="navbar-icons-item">
          <Link to="/search" className="icon"><i className="fas fa-search"></i></Link>
        </li>
        <li className="navbar-icons-item">
          <a href="tel:+254-712-359-913" className="icon"><i className="fas fa-phone"></i> +254-712-359-913</a>
        </li>
        <li className="navbar-icons-item">
          <Link to="/signin" className="sign-in-button">Sign in</Link>
        </li>
        <li className="navbar-icons-item">
          <Link to="/ContactUs" className="contact-button">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

