import React, { useState } from 'react';

const Application = () => {
  const [FullName, setFullName] = useState('');
  const [Email, setEmail] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');
  const [Resume, setResume] = useState(null);
  const [CoverLetter, setCoverLetter] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const handleFullName = (event) => {
    setFullName(event.target.value);
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePhoneNo = (event) => {
    setPhoneNo(event.target.value);
  }
  const handleResume = (event) => {
    setResume(event.target.files[0]);
  }
  const handleCoverLetter = (event) => {
    setCoverLetter(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!Resume) {
      setErrorMessage('Please upload a resume');
    } else {
      window.location.href = '/Success';
    }
  };

  return (
    <div className="bg-gradient-to-r from-white via-orange-100 to-white shadow-4xl">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Job Application Form</h1>
        <form className="px-6 rounded shadow-2xl lg:max-w-[60%] mx-auto py-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 text-2xl font mb-2" htmlFor="name">Full Name</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit mb-6"
              id="name"
              type="text"
              placeholder="Your full name"
              value={FullName}
              onChange={handleFullName}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-2xl mb-2" htmlFor="email">Email Address</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit mb-6"
              id="email"
              type="email"
              placeholder="Your email address"
              value={Email}
              onChange={handleEmail}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-2xl mb-2" htmlFor="phone">Phone Number</label>
            <input
              className="shadow-md appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit mb-6"
              id="phone"
              type="number"
              placeholder="Your phone number"
              value={PhoneNo}
              onChange={handlePhoneNo}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-2xl mb-2" htmlFor="resume">Upload Resume</label>
            <input
              className="shadow-md appearance-none py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
              id="resume"
              type="file"
              onChange={handleResume}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-2xl mb-2" htmlFor="cover-letter">Cover Letter</label>
            <textarea
              className="shadow-md appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-orange-100 focus:border-orange-500 bg-inherit mb-6"
              id="cover-letter"
              rows="5"
              placeholder="Your cover letter"
              value={CoverLetter}
              onChange={handleCoverLetter}
              required
            ></textarea>
          </div>
          {ErrorMessage && (
            <div className="mb-4 text-red-500">
              {ErrorMessage}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
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
