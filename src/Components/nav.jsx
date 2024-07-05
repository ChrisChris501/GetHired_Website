import React from 'react';

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 shadow">
        <div className="flex items-center">
          <i className="fas fa-briefcase text-2xl text-red-100 mr-1"></i>
          <h1 className="text-xl font-bold text-red-100">
            <span className="text-2xl">G</span>et
            <span className="text-2xl">H</span>ired
          </h1>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 font-semibold">
          <a href="index.html" className="text-red-100 hover:text-orange-900">Home</a>
          <a href="#" className="text-red-100 hover:text-orange-900">My Job Application</a>
          <a href="job-alerts.html" className="text-red-100 hover:text-orange-900">Job Alerts</a>
          <a href="JobLists.html" className="text-red-100 hover:text-orange-900">Find Jobs</a>
          <a href="#" className="text-red-100 hover:text-orange-900">Sign Up</a>
          <a href="#" className="text-red-100 hover:text-orange-900">Log In</a>
        </div>
        <div className="hidden md:flex space-x-3 mr-4">
          <a href="#" id="profile-link" className="text-red-100 hover:text-orange-900">
            <i className="fas fa-user"></i>
          </a>
          <a href="#" id="notification-link" className="text-red-100 hover:text-orange-900">
            <i className="fas fa-bell"></i>
          </a>
        </div>
        <div className="md:hidden">
          <button id="menu-button" className="text-red-100 hover:text-black focus:outline-none">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      {/* Nav for mobile view */}
      <div id="mobile-menu" className="md:hidden flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 text-red-100 hidden">
        <a href="index.html" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">My Job Application</a>
        <a href="JobAlerts.html" className="hover:text-black">Job Alerts</a>
        <a href="JobLists.html" className="hover:text-black">Find Jobs</a>
        <a href="#" className="hover:text-black">Sign Up</a>
        <a href="#" className="hover:text-black">Log In</a>
        <a href="#" id="profile-link-mobile" className="text-red-100 hover:text-black">
          <i className="fas fa-user"></i>
        </a>
        <a href="#" id="notification-link-mobile" className="text-red-100 hover:text-black">
          <i className="fas fa-bell"></i>
        </a>
      </div>

      <script>
        {`
          document.getElementById('menu-button').addEventListener('click', function () {
            var menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          });
        `}
      </script>
    </div>
  );
};

export default Nav;
