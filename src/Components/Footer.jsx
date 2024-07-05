import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-red-800 via-orange-400 to-orange-700 py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-red-100 mb-8">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
              <i className="fas fa-briefcase text-2xl text-red-100 mr-2"></i>
              <h1 className="text-xl font-bold">
                <span className="text-2xl">G</span>et
                <span className="text-2xl">H</span>ired
              </h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-red-100 hover:text-white">About Us</a>
              <a href="#" className="text-red-100 hover:text-white">Blog</a>
              <a href="#" className="text-red-100 hover:text-white">Contact</a>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <a href="#" className="mx-2 text-red-100 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="mx-2 text-red-100 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="mx-2 text-red-100 hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="mx-2 text-red-100 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="text-center text-red-100">
            <p>&copy; 2024 GetHired. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
