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
    const storedUserId = localStorage.getItem('userId');

    if (!storedUserId) {
      // Redirect to login or signup page if userId is not found
      navigate('/');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://roomie-app-1.onrender.com/auth/user/${storedUserId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary authorization headers if required
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await response.json();
        console.log(userData)
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        // Handle error (e.g., show error message to user)
      }
    };

    fetchUserData();
  }, [navigate]);

  
  
  return (
    <div>
      <Mainnav user={user}/>
      <div>
        <h1 className="text-4xl font-bold text-center
                      mt-48"> Welcome 
        </h1>
      </div>
    </div>
  
  )
}
export default Homepage
