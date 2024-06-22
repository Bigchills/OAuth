import React from 'react'
import Mainnav from '../components/Mainnav'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Homepage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user,setUser]=useState(null)

    useEffect(()=>{
      const token= localStorage.getItem('token')
      const storedUser=localStorage.getItem('user')

      if(!token || !storedUser){
        navigate('/')
      }else{
        setUser(JSON.parse(storedUser))
      }

   


  },[navigate])

  return (
    <div>
       {user && <Mainnav user={user}/>}
      <div>
        <h1 className="text-4xl font-bold text-center
                      mt-48"> Welcome 
        </h1>
      </div>
    </div>
  
  )
}
export default Homepage
