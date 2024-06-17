import React from 'react'
import Mainnav from '../components/Mainnav'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('auth');
    if (token) {
      localStorage.setItem('authToken', token);
      navigate('/home', { replace: true });
    }
  }, [location, navigate]);


  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      const storedUser = JSON.parse(localStorage.getItem('userId'));

      if (!token || !storedUser) {
        // Redirect to login page if no token or user data
        navigate('/');
        return;
      }

      try {
        const response = await fetch('https://roomie-app-1.onrender.com/auth/user', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, [navigate]);

  
  return (
    <div>
      <Mainnav user={user} />
      <div>
        <h1 className="text-4xl font-bold text-center
                      mt-48"> Welcome 
        </h1>
      </div>
    </div>
  
  )
}
export default Homepage
