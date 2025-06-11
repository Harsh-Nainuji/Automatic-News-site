// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Optional: if you still want background animation

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 position-relative">
      <div className="container text-center">
        <h5 className="mb-3">Stay Connected</h5>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedin size={28} />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaTwitter size={28} />
          </a>
        </div>
        <p className="mb-0">&copy; {new Date().getFullYear()} News Now. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
