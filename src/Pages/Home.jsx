import React from 'react';
import Hiring from '../assets/Hiring.jpg';

const Home = () => {
  return (
    <div className="bg-red-100">
       <section
        className="hero bg-cover bg-center py-32 opacity-80"
        style={{ backgroundImage: `url(${Hiring})` }}
      >
        <div className="container mx-auto px-6 text-center text-white bg-opacity-50 bg-black rounded-lg py-10">
          <h2 className="text-5xl font-bold mb-2">Welcome to GetHired</h2>
          <h3 className="text-2xl mb-8">Find your dream job with us</h3>
          <p className="text-lg mb-8">
            Join our community and get access to thousands of job listings, personalized job alerts, and career resources to help you succeed.
          </p>
          <a
            href="#"
            className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </section>
      <section className="bg-red-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white shadow-2xl rounded-lg">
              <i className="fas fa-briefcase text-4xl text-red-600 mb-4"></i>
              <h4 className="text-2xl font-semibold mb-2">Wide Range of Jobs</h4>
              <p className="text-gray-700">
                Explore a variety of job opportunities across different industries and locations.
              </p>
            </div>
            <div className="p-8 bg-white shadow-2xl rounded-lg">
              <i className="fas fa-bell text-4xl text-red-600 mb-4"></i>
              <h4 className="text-2xl font-semibold mb-2">Job Alerts</h4>
              <p className="text-gray-700">Get notified about new job openings that match your preferences and skills.</p>
            </div>
            <div className="p-8 bg-white shadow-2xl rounded-lg">
              <i className="fas fa-user text-4xl text-red-600 mb-4"></i>
              <h4 className="text-2xl font-semibold mb-2">Career Resources</h4>
              <p className="text-gray-700">
                Access valuable resources to enhance your resume, cover letter, and interview skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-red-800 via-orange-600 to-yellow-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12 text-white">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-800 mb-6">
                GetHired helped me find my dream job in just a few weeks. The job alerts feature is amazing!
              </p>
              <h4 className="text-2xl font-bold text-orange-600">- Jane Doe</h4>
            </div>
            <div className="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-800 mb-6">
               &quot;The career resources on GetHired are top-notch. I improved my resume and landed more interviews.&quot;
              </p>
              <h4 className="text-2xl font-bold text-orange-600">- John Smith</h4>
            </div>
            <div className="p-8 bg-white shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-lg text-gray-800 mb-6">
                &quot;I love the wide range of job opportunities available. There&lsquo;s something for everyone on GetHired.&quot;
              </p>
              <h4 className="text-2xl font-bold text-orange-600">- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-orange-800 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-orange-800 text-center">
            <div className="p-8 border-2 border-orange-400 shadow-2xl rounded-lg">
              <i className="fas fa-user-plus text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">1. Sign Up</h3>
              <p className="text-lg">Create your free account to get started and access thousands of job listings.</p>
            </div>
            <div className="p-8 border-2 border-orange-400 shadow-2xl rounded-lg">
              <i className="fas fa-search text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">2. Search Jobs</h3>
              <p className="text-lg">Use our powerful search tools to find job opportunities that match your skills and interests.</p>
            </div>
            <div className="p-8 border-2 border-orange-400 shadow-2xl rounded-lg">
              <i className="fas fa-paper-plane text-4xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">3. Apply</h3>
              <p className="text-lg">Submit your application with a few clicks and track your application status.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-white py-5 pb-10">
        <div className="container mx-auto px-6 flex flex-col gap-10 md:flex-row items-center justify-between text-orange-900">
          <div className="md:w-2/4 text-center md:text-left mb-6 md:mb-0 p-10 shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300 h-full">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Hired?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied job seekers who have found their dream job with GetHired.
            </p>
            <a
              href="#"
              className="bg-red-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Join Now
            </a>
          </div>
          <div className="md:w-1/2">
            <img src="./assets/Action.jpg" alt="Call to Action" className="w-full sm:w-full md:w-5/4 rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
