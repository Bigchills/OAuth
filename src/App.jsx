import React from 'react'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import SignIn from './Pages/SignIn'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import { useEffect,useState } from 'react'



const App = () => {
  return (
    <BrowserRouter>
      <>     
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/home' element={<Homepage />}/>
        </Routes>       
      </>
    </BrowserRouter>
  )
}
export default App
