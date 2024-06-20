import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginmodal = ({ closeModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

 
  return (
    <div className="w-full h-full fixed py-5 top-0 backdrop-blur-sm flex justify-center items-center">
      <div className="w-full h-full md:h-96 shadow-md md:w-1/2 rounded-md border border-slate-400 z-10 bg-white font-semibold">
        <div className="font-medium text-center">
          <h2>Logo</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-3/5 mt-10 mx-auto space-y-1">
            <label className="font-medium" htmlFor="email">Email:</label>
            <input
              id="email"
              value=''
              onChange=''
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
              value=''
              onChange=''
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
