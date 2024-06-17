import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginmodal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('https://roomie-app-1.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Login error details:', errorData);
        throw new Error(errorData.error || 'Failed to log in');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      localStorage.setItem('token', data.token);

      // Redirect to the homepage
      navigate('/home');
    } catch (error) {
      console.error('Error during login:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-full fixed py-5 top-0 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full h-full md:h-96 shadow-md md:w-1/2 rounded-md border border-slate-400 z-10 bg-white font-semibold">
        <div className="font-medium text-center">
          <h2>Logo</h2>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-3/5 mt-10 mx-auto space-y-1">
            <label className="font-medium" htmlFor="email">Email:</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-slate-100 rounded-lg p-3"
              placeholder="Your email"
              type="email"
              required
            />
          </div>

          <div className="flex flex-col w-3/5 mx-auto space-y-1 mt-5 mb-10">
            <label className="font-medium" htmlFor="password">Password:</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-slate-100 rounded-lg p-3"
              placeholder="Your password"
              type="password"
              required
            />
          </div>

          <div className="w-1/2 flex mx-auto space-x-5 justify-center">
            <button
              type="button"
              onClick={() => closeModal(false)}
              className="border bg-red-600 hover:bg-red-700 rounded-md text-white px-3 py-1 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border bg-black hover:bg-slate-800 rounded-md text-white px-3 py-1 text-sm"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginmodal;
