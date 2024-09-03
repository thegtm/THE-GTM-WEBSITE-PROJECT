import React from 'react';
import './Navbar.css'; 
import logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="The GTM Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/programs">Programs</a></li>
        <li className="dropdown">
          <a href="/gtm">GTM</a>
          <ul className="dropdown-content">
            <li><a href="/gtm/team">Team</a></li>
            <li><a href="/gtm/about">About</a></li>
            <li><a href="/gtm/services">Services</a></li>
          </ul>
        </li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="/cart" className="icon"><i className="fas fa-shopping-cart"></i></a>
        <a href="/search" className="icon"><i className="fas fa-search"></i></a>
        <a href="tel:+254-712-359-913" className="icon"><i className="fas fa-phone"></i> +254-712-359-913</a>
        <button className="sign-in-button">Sign in</button>
        <button className="contact-button">Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
