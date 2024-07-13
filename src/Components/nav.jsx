import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faBriefcase, faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="p-8 flex justify-between items-center bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 shadow">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faBriefcase} className="text-3xl text-red-100 mr-1" />
          <h1 className="text-2xl font-bold text-red-100">
            <span className="text-4xl">G</span>et
            <span className="text-4xl">H</span>ired
          </h1>
        </div>
        <div className="hidden md:flex space-x-8 text-xl">
          <a href="/Home" className="text-red-100 hover:text-orange-900">Home</a>
          <a href="#" className="text-red-100 hover:text-orange-900">My Job Application</a>
          <a href="/JobAlerts" className="text-red-100 hover:text-orange-900">Job Alerts</a>
          <a href="/JobLists" className="text-red-100 hover:text-orange-900">Find Jobs</a>
          <a href="#" className="text-red-100 hover:text-orange-900">Sign Up</a>
          <a href="#" className="text-red-100 hover:text-orange-900">Log In</a>
        </div>
        <div className="hidden md:flex space-x-8 mr-10 text-2xl">
          <a href="#" className="text-red-100 hover:text-orange-900">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#" className="text-red-100 hover:text-orange-900">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </div>
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-red-100 hover:text-black focus:outline-none text-4xl"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>
      
      {/* Nav for mobile view */}
      <div
        id="mobile-menu"
        className={`md:hidden flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 text-red-100 ${
          isMobileMenuOpen ? '' : 'hidden'
        }`}
      >
        <a href="/Home" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">My Job Application</a>
        <a href="/JobAlerts" className="hover:text-black">Job Alerts</a>
        <a href="/JobLists" className="hover:text-black">Find Jobs</a>
        <a href="#" className="hover:text-black">Sign Up</a>
        <a href="#" className="hover:text-black">Log In</a>
        <a href="#" className="text-red-100 hover:text-black">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#" className="text-red-100 hover:text-black">
          <FontAwesomeIcon icon={faBell} />
        </a>
      </div>
    </div>
  );
};

export default Nav;
