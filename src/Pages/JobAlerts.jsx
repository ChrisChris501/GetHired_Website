import React, { useState } from 'react';

const JobAlerts = () => {
  const [alerts, setAlerts] = useState([
    { email: 'user@example.com', jobType: 'Full-Time', location: 'New York', title: 'Software Developer' },
    { email: 'user@example.com', jobType: 'Part-Time', location: 'Los Angeles', title: 'Graphic Designer' },
  ]);

  const [email, setEmail] = useState('');
  const [jobType, setJobType] = useState('full-time');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  const handleAddAlert = (event) => {
    event.preventDefault();
    const newAlert = { email, jobType, location, title };
    setAlerts([...alerts, newAlert]);
    setEmail('');
    setJobType('full-time');
    setLocation('');
    setTitle('');
  };

  const handleDelete = (index) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  return (
    <div className="bg-white py-20 lg:py-24 md:w-3/4 w-3/4 mx-auto">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Job Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white shadow-2xl rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Set Up Job Alerts</h3>
            <form id="job-alert-form" onSubmit={handleAddAlert}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 p-2 w-full border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="job-type" className="block text-lg font-semibold text-gray-700">
                  Job Type
                </label>
                <select
                  id="job-type"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  required
                  className="mt-2 p-2 w-full border rounded"
                >
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="location" className="block text-lg font-semibold text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="mt-2 p-2 w-full border rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-lg font-semibold text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-2 p-2 w-full border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
              >
                Set Alert
              </button>
            </form>
          </div>
          <div className="p-8 bg-white shadow-2xl rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Manage Your Alerts</h3>
            <ul className="space-y-4">
              {alerts.map((alert, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded">
                  <h4 className="text-xl font-bold">{`${alert.jobType} ${alert.title} in ${alert.location}`}</h4>
                  <p className="text-gray-700">Email sent to: {alert.email}</p>
                  <button
                    className="mt-2 bg-red-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300"
                    onClick={() => handleDelete(index)}
                  >
                    Unsubscribe
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAlerts;
