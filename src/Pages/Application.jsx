import React from 'react';

const Application = () => {
  const handleSubmit = () => {
    window.location.href = 'success.html';
  };

  return (
    <div className="bg-gradient-to-r from-red-100 via-orange-200 to-orange-100 shadow-4xl">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Job Application Form</h1>
        <form className="px-6 rounded shadow-md lg:max-w-[60%] mx-auto py-10">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Full Name</label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
              id="name"
              type="text"
              placeholder="Your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
              id="email"
              type="email"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
              id="phone"
              type="tel"
              placeholder="Your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">Upload Resume</label>
            <input
              className="shadow appearance-none py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="resume"
              type="file"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover-letter">Cover Letter</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit"
              id="cover-letter"
              rows="5"
              placeholder="Your cover letter"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Application;
