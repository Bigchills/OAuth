import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Mainnav from '../components/Mainnav';
import Createposts from '../components/Createposts';

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('auth');

    if (token) {
      localStorage.setItem('token', token);
      navigate('/home', { replace: true });
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [location.search, navigate]);

  return (
    <div>
      <Mainnav />
      <div>
        <Createposts />
        <h1 className="text-4xl font-bold text-center mt-48">Welcome</h1>
      </div>
    </div>
  );
};

export default Homepage;
