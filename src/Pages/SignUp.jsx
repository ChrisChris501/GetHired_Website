import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', { name, email, password });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Full name is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    return errors;
  };

  return (
    <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 min-h-screen flex items-center justify-center py-20">
      <div className="bg-white shadow-2xl rounded-lg w-full max-w-md md:max-w-lg lg:max-w-2xl px-6 py-8 lg:py-16">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="bg-red-50 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-red-50 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="bg-red-50 shadow-inner appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
            {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-orange-600 w-full text-white py-3 px-4 rounded-full text-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 mb-4">Or sign up with</p>
        <div className="flex justify-center gap-4 mb-4">
          <button className="bg-red-600 text-white py-3 px-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
            <FontAwesomeIcon icon={faGoogle} />
          </button>
          <button className="bg-blue-600 text-white py-3 px-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button className="bg-blue-500 text-white py-3 px-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
        <p className="text-center text-gray-700">
          Already have an account?{' '}
          <a href="/SignIn" className="text-orange-600 font-bold hover:text-red-600">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
