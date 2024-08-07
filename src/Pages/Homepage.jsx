import React, { useEffect, useState, createContext  } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Mainnav from '../components/Mainnav';
import Leftsidebar from '../components/Leftsidebar';
import Maincontent from '../components/Maincontent';
import RightSidebar from '../components/Rightsidebar';
import Loadingscreen from '../components/Loadingscreen';

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const userContext=createContext()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('auth');

    if (token) {
      localStorage.setItem('token', token);

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
        navigate('/home', { replace: true });
      })
      .catch(error => {
        setError(error);
      });
    } else {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        navigate('/', { replace: true });
      }
    }
  }, [location.search, navigate]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <div><Loadingscreen/></div>
  }

  return (

  
    <div className=''>
      <div className='flex h-screen'>
        <Leftsidebar />
        <div className='flex-1 flex flex-col overflow-y-auto'>
          <Mainnav user={user} />
          <Maincontent user={user} />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Homepage;
