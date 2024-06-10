import React from 'react'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import SignIn from './Pages/SignIn'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


const App = () => {
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
    <BrowserRouter>
      <>     
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/home' element={<Homepage user={user} />}/>
        </Routes>       
      </>
    </BrowserRouter>
  )
}
export default App
