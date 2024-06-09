import React from 'react'
import Mainnav from '../components/Mainnav'
import Bottomnav from '../components/Bottomnav'
import Loginmodal from '../components/Loginmodal'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('auth');

    if (token) {
      // Store the token in localStorage
      localStorage.setItem('authToken', token);
      // Remove the token from the URL
      navigate('/home', { replace: true });
    }
  }, [location, navigate]);

  
  return (
    <div>
      <Mainnav/>
      <div>
        <h1 className="text-4xl font-bold text-center mt-48">
          WELCOME TO HOMEPAGE
        </h1>
      </div>
      <Bottomnav/>

    </div>
  )
}

export default Homepage
