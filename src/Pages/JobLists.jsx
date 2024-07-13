import React from 'react';

const JobLists = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Available Job Roles</h1>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">Software Engineer</h2>
        <p className="mb-4 text-xl">Develop and maintain web applications.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 text-xl rounded"
        >
          Apply
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">Product Manager</h2>
        <p className="mb-4 text-xl">Oversee product development and strategy.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold rounded px-6 py-3 text-xl"
        >
          Apply
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">Quality Manager</h2>
        <p className="mb-4 text-xl">Oversee product development, quality, and strategy.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 text-xl rounded"
        >
          Apply
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">IT Support Intern</h2>
        <p className="mb-4 text-xl">Help the IT Support officer in his/her job.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 text-xl rounded"
        >
          Apply
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">Backend Developer</h2>
        <p className="mb-4 text-xl">Manages codes for the backend.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 text-xl rounded"
        >
          Apply
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md mb-4">
        <h2 className="text-2xl font-bold">Sales Representative</h2>
        <p className="mb-4 text-xl">Oversee product sales and manage customers.</p>
        <a
          href="/Application"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-3 text-xl rounded"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default JobLists;
