import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faTimesCircle, faClock, faEdit } from '@fortawesome/free-solid-svg-icons';
import ProfilePic from '../assets/profile-pic.jpg';

const JobApplication = () => {
  const applications = [
    {
      id: 1,
      jobTitle: 'Frontend Developer',
      company: 'Tech Corp',
      status: 'Pending',
      appliedDate: '2023-06-01',
    },
    {
      id: 2,
      jobTitle: 'Backend Developer',
      company: 'Web Solutions',
      status: 'Interview',
      appliedDate: '2023-05-15',
    },
    {
      id: 3,
      jobTitle: 'Full Stack Developer',
      company: 'Innovative Apps',
      status: 'Rejected',
      appliedDate: '2023-04-25',
    },
    {
      id: 4,
      jobTitle: 'UI/UX Designer',
      company: 'Creative Designs',
      status: 'Accepted',
      appliedDate: '2023-03-10',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-orange-100">
      <h2 className="text-4xl font-bold text-center mb-6">My Job Applications</h2>

      {/* Profile Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-10 flex items-center">
        <img
          src={ProfilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full shadow-lg mr-6"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-900">John Doe</h3>
          <p className="text-gray-600">Frontend Developer</p>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
      </section>

      {/* Job Applications Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Applications</h3>
        <div className="space-y-6">
          {applications.map((application) => (
            <div
              key={application.id}
              className="flex justify-between items-center bg-red-50 shadow-inner p-4 rounded-lg"
            >
              <div>
                <h4 className="text-xl font-semibold text-gray-800">{application.jobTitle}</h4>
                <p className="text-gray-600">{application.company}</p>
                <p className="text-gray-500">Applied on {application.appliedDate}</p>
              </div>
              <div className="flex items-center space-x-4">
                {application.status === 'Pending' && (
                  <FontAwesomeIcon icon={faClock} className="text-yellow-500 text-2xl" />
                )}
                {application.status === 'Interview' && (
                  <FontAwesomeIcon icon={faEdit} className="text-blue-500 text-2xl" />
                )}
                {application.status === 'Rejected' && (
                  <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-2xl" />
                )}
                {application.status === 'Accepted' && (
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                )}
                <span className="text-gray-600 text-lg">{application.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center bg-red-50 shadow-inner p-4 rounded-lg">
            <FontAwesomeIcon icon={faBriefcase} className="text-red-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Total Applications</h4>
              <p className="text-gray-600 text-lg">{applications.length}</p>
            </div>
          </div>
          <div className="flex items-center bg-red-50 shadow-inner p-4 rounded-lg">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Accepted</h4>
              <p className="text-gray-600 text-lg">
                {applications.filter((app) => app.status === 'Accepted').length}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-red-50 shadow-inner p-4 rounded-lg">
            <FontAwesomeIcon icon={faTimesCircle} className="text-red-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Rejected</h4>
              <p className="text-gray-600 text-lg">
                {applications.filter((app) => app.status === 'Rejected').length}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-red-50 shadow-inner p-4 rounded-lg">
            <FontAwesomeIcon icon={faClock} className="text-yellow-500 text-4xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Pending</h4>
              <p className="text-gray-600 text-lg">
                {applications.filter((app) => app.status === 'Pending').length}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobApplication;
