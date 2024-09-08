import React from 'react';
import './Footer.css';
import logo from './logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h2>Join us in our mission to protect the planet and ensure a sustainable future for generations to come.</h2>
                <p>Join us in creating a sustainable future for generations to come.</p>
                <button className="footer-button">Contact Us</button>
            </div>

            <div className="footer-middle">
                <div className="footer-section">
                    <h4>How can we help?</h4>
                    <p>Contact us anytime</p>
                </div>
                <div className="footer-section">
                    <h4>Call us</h4>
                    <p>+254 712 359 913</p>
                </div>
                <div className="footer-section">
                    <h4>Send us a message</h4>
                    <p>greenthumb@dkut.ac.ke</p>
                </div>
                <div className="footer-section">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <img src={logo} alt="The GTM Logo" className="footer-logo" />
                <ul className="footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/forum">Forum</a></li>
                </ul>
                <p className="footer-copy">Copyright © The GTM 2024</p>
            </div>
        </footer>
    );
}
export default Footer;
