import React from 'react'

const nav = () => {
  return (
    <div>
      <nav class="flex justify-between items-center p-4 bg-gradient-to-r from-red-700 via-orange-500 to-orange-800 shadow">
        <div class="flex items-center">
            <i class="fas fa-briefcase text-2xl text-red-100 mr-1"></i>
            <h1 class="text-xl font-bold text-red-100"><span class="text-2xl">G</span>et<span class="text-2xl">H</span>ired
            </h1>
        </div>
        <div class="hidden md:flex space-x-8 md:space-x-4 font-semibold">
            <a href="index.html" class="text-red-100 hover:text-orange-900">Home</a>
            <a href="#" class="text-red-100 hover:text-orange-900">My Job Application</a>
            <a href="job-alerts.html" class="text-red-100 hover:text-orange-900">Job Alerts</a>
            <a href="JobLists.html" class="text-red-100 hover:text-orange-900">Find Jobs</a>
            <a href="#" class="text-red-100 hover:text-orange-900">Sign Up</a>
            <a href="#" class="text-red-100 hover:text-orange-900">Log In</a>
        </div>
        <div class="hidden md:flex space-x-3 mr-4">
            <a href="#" id="profile-link" class="text-red-100 hover:text-orange-900">
                <i class="fas fa-user"></i>
            </a>
            <a href="#" id="notification-link" class="text-red-100 hover:text-orange-900">
                <i class="fas fa-bell"></i>
            </a>
        </div>
        <div class="md:hidden">
            <button id="menu-button" class="text-red-100 hover:text-black focus:outline-none">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </nav>
    </div>
  )
}

export default nav
