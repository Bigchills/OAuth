import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Mainnav from '../components/Mainnav';
import Leftsidebar from '../components/Leftsidebar';
import Maincontent from '../components/Maincontent';
import RightSidebar from '../components/Rightsidebar';

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
        setUser(data.data);
        localStorage.setItem('user', JSON.stringify(data.data));
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
    <div className=''>
      <div className='flex '>
        <Leftsidebar/>
        <div className='flex-1 flex flex-col'>
          <Mainnav user={user} />
          <Maincontent user={user}/>
        </div>
        <RightSidebar/>

      </div>
    </div>
  );
};

export default Homepage;
