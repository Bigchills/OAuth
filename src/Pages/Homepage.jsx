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
  return (
    <div>
       <Mainnav/>
      <div>
        <h1 className="text-4xl font-bold text-center
                      mt-48"> Welcome 
        </h1>
      </div>
    </div>
  
  )
}
export default Homepage
