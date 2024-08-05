import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loadingscreen from './Loadingscreen';

const Input = ({ label, id, value, onChange, type = 'text', placeholder, required = true }) => (
  <div className="flex flex-col w-3/4 md:max-w-sm mx-auto space-y-1 mt-5">
    <label className="font-medium" htmlFor={id}>{label}</label>
    <input
      id={id}
      value={value}
      onChange={onChange}
      className="bg-slate-100 border-slate-600 rounded-lg p-3"
      placeholder={placeholder}
      type={type}
      required={required}
    />
  </div>
);

const NewAccountModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const DEFAULT_AVATAR_URL = 'https://cdn-icons-png.flaticon.com/512/147/147144.png';

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const signupData = {
      ...formData,
      avatar: DEFAULT_AVATAR_URL,
    };

    try {
      const response = await fetch('https://roomie-app-1.onrender.com/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Signup error details:', errorData);
        throw new Error(errorData.error || 'Failed to sign up');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      localStorage.setItem('token', data.cookie);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/home');
    } catch (error) {
      console.error('Error during signup:', error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full fixed top-0 backdrop-blur-sm md:py-5 flex justify-center items-center">
      {isLoading && <Loadingscreen />}
      {showModal && (
        <div className="w-full h-full md:max-w-2xl md:max-h-[550px] z-10 bg-white rounded-lg border border-slate-400 mx-auto overflow-y-scroll">
          <div className="font-medium text-center">logo</div>
          <div className="font-medium flex justify-center items-center">
            <h2>Fill in your details</h2>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <Input
              label="Full Name:"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your name"
            />
            <Input
              label="Email:"
              id="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email"
            />
            <Input
              label="Password:"
              id="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="Type a password"
            />
            <div className="w-1/2 flex mx-auto mt-10 space-x-5 justify-center items-center mb-5">
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
                Sign up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewAccountModal;
