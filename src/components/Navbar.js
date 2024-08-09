// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#7D6F52] text-white flex items-center justify-between p-4 shadow-lg z-50">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-2" />
        <span className="text-lg font-semibold">Admissions Solution</span>
      </div>
      <div className="flex items-center">
        <a href="tel:+919228163299" className="flex items-center mr-4">
          <i className="fas fa-phone-alt mr-1"></i> +91 9228163299
        </a>
        <a href="mailto:marketing@admissionssolution.com" className="flex items-center">
          <i className="fas fa-envelope mr-1"></i> marketing@admissionssolution.com
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
