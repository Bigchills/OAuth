import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Newaccountmodal = ({ closeModal }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      fullName,
      phoneNumber,
      email,
      password,
    };

    try {
      const response = await fetch('https://roomie-app-1.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Signup error details:', errorData); // Log detailed error response
        throw new Error(errorData.error || 'Failed to sign up');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      // Redirect to the homepage
      navigate('/home');
    } catch (error) {
      console.error('Error during signup:', error.message); // Log error message
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-full fixed top-0 backdrop-blur-sm md:py-5 flex justify-center items-center">
      <div className="w-full h-full md:max-w-2xl md:max-h-[550px] z-10 bg-white font rounded-lg border border-slate-400 mx-auto overflow-y-scroll overscroll-y-none">
        <div className="font-medium text-center">logo</div>
        <div className="font-medium flex justify-center items-center">
          <h2>Fill in your details</h2>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-3/4 md:max-w-sm mt-10 mx-auto space-y-1">
            <label className="font-medium" htmlFor="name">Full Name:</label>
            <input
              id="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="bg-slate-100 border-slate-600 rounded-lg p-3"
              placeholder="Your name"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col w-3/4 md:max-w-sm mx-auto space-y-1 mt-5 mb-10">
            <label className="font-medium" htmlFor="phonenumber">Phone number:</label>
            <input
              id="phonenumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-slate-100 border-slate-600 rounded-lg p-3"
              placeholder="Your phone number"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col w-3/4 md:max-w-sm mx-auto space-y-1 mt-5 mb-10">
            <label className="font-medium" htmlFor="email">Email:</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-100 border-slate-600 rounded-lg p-3"
              placeholder="Your email"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col w-3/4 md:max-w-sm mx-auto space-y-1 mt-5 mb-10">
            <label className="font-medium" htmlFor="password">Password:</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-100 border-slate-600 rounded-lg p-3"
              placeholder="Type a password"
              type="password"
              required
            />
          </div>
          <div className="w-1/2 flex mx-auto space-x-5 justify-center items-center mb-5">
            <button
              onClick={() => closeModal(false)}
              className="border bg-red-600 hover:bg-red-700 rounded-md text-white px-3 py-1 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border bg-black hover:bg-slate-800 rounded-md text-white px-3 py-1 text-sm"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newaccountmodal;
