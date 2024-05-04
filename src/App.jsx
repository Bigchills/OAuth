import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Auth from './components/Auth'
import SignIn from './Pages/SignIn'
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'


const App = () => {
  const user=false;
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>       
      </>
    </BrowserRouter>
  )
}
export default App
