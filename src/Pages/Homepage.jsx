import React from 'react'
import Mainnav from '../components/Mainnav'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Createposts from '../components/Createposts'

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user,setUser]=useState(null)

    useEffect(()=>{
      const token= localStorage.getItem('token')
      const storedUser=localStorage.getItem('user')

      // if(!token || !storedUser){
      //   navigate('/')
      // }else{
      //   setUser(JSON.parse(storedUser))
      // }
    const searchParams = new URLSearchParams(location.search);
    const authToken = searchParams.get('auth');

    if (token) {
      // Store the token in localStorage
      localStorage.setItem('authToken', token);

      // Remove the token from the URL
      navigate('/home', { replace: true });
    }

   


  },[location, navigate])

  return (
    <div>
       {user && <Mainnav user={user}/>}
      <div>
        <Createposts/>
        {/* <h1 className="text-4xl font-bold text-center
                      mt-48"> Welcome 
        </h1> */}
      </div>
    </div>
  
  )
}
export default Homepage
