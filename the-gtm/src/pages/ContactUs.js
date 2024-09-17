import React from 'react';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="header">
        <h1>Contact Us</h1>
      </div>

      <div className="form-container">
        <div className="left-section">
          <p>
            Contact us about anything related to GTM's Mission.<br />
            We'll do our best to get back to you as soon as possible.
          </p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization</label>
              <input type="text" id="organization" placeholder="Enter your organization" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input type="text" id="subject" placeholder="Enter the subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="question">Question *</label>
              <textarea id="question" placeholder="Enter your question" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="right-section">
          <div className="contact-info">
            <p><strong>Contact Information</strong></p>
            <p>
              <i className="fas fa-map-marker-alt"></i> Dedan Kimathi University, Nyeri<br />
              <i className="fas fa-phone"></i> +254-712-359-913<br />
              <i className="fas fa-envelope"></i> greenthumb@dkut.ac.ke
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
