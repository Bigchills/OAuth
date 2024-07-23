import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Mainnav from '../components/Mainnav';
import Createposts from '../components/Createposts';

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('auth');

    if (token) {
      // Store token in local storage
      localStorage.setItem('token', token);

      // Fetch authenticated user using the token
      fetch('https://roomie-app-1.onrender.com/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUser(data);
        localStorage.setItem('user', JSON.stringify(data));
        // Redirect to the home page
        navigate('/home', { replace: true });
        console.log(data);
      })
      .catch(error => {
        setError(error);
      });
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [location.search, navigate]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Mainnav user={user} />
      <div>
        <Createposts />
        <h1 className="text-4xl font-bold text-center mt-48">Welcome</h1>
      </div>
    </div>
  );
};

export default Homepage;
