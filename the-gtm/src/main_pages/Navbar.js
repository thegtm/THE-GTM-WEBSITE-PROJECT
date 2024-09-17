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

  const closeMenu = () => {
    setIsOpen(false);
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
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
        <li><Link to="/PopularCourses" onClick={closeMenu}>Courses</Link></li>
        <li><Link to="/programs" onClick={closeMenu}>Programs</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li className="dropdown">
          <Link to="/gtm" onClick={closeMenu}>GTM <i className="fas fa-caret-down"></i></Link>
          <ul className="dropdown-content">
            <li><Link to="/gtm/team" onClick={closeMenu}>Team</Link></li>
            <li><Link to="/gtm/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/gtm/services" onClick={closeMenu}>Services</Link></li>
          </ul>
        </li>
        <li><Link to="/ContactUs" onClick={closeMenu}>Contact Us</Link></li>
        <li className="navbar-icons-item">
          <Link to="/cart" className="icon" onClick={closeMenu}><i className="fas fa-shopping-cart"></i></Link>
        </li>
        <li className="navbar-icons-item">
          <Link to="/search" className="icon" onClick={closeMenu}><i className="fas fa-search"></i></Link>
        </li>
        <li className="navbar-icons-item">
          <a href="tel:+254-712-359-913" className="icon" onClick={closeMenu}><i className="fas fa-phone"></i> +254-712-359-913</a>
        </li>
        <li className="navbar-icons-item">
          <Link to="/signin" className="sign-in-button" onClick={closeMenu}>Sign in</Link>
        </li>
        <li className="navbar-icons-item">
          <Link to="/ContactUs" className="contact-button" onClick={closeMenu}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
