import React from 'react'
import Mainnav from '../components/Mainnav'
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
      localStorage.setItem('authToken', token);
      navigate('/home', { replace: true });
    }
  }, [location, navigate]);
  const [user, setUser]=useState(null)

  const token=localStorage.getItem("authToken")
  console.log(token);
    useEffect(()=>{
    const getUser=async()=>{
      fetch('https://roomie-app-1.onrender.com/auth/user',{
        method:"GET",
        credentials:"include",
        headers:{
           'Authorization': `Bearer ${token}`
        }
      }).then(response=>{
        if(response.status===201)return response.json();
        throw new Error('Authentication failed!')
      }).then(resObject=>{
        setUser(resObject.user)
      }).catch ((err)=>{
        console.log(err);
      })
    }
    getUser();
  },[])
  console.log(user);



  
  return (
    <div>
      <Mainnav/>
      <div>
        <h1 className="text-4xl font-bold text-center mt-48">
          Welcome {user.username}
        </h1>
      </div>
    </div>
  
  )
}

export default Homepage
