import React from 'react'
import Mainnav from '../components/Mainnav'
import { useEffect } from 'react'
import { useState } from 'react'

const Homepage = () => {
  return (
    <div>
      <Mainnav/>
      <div>
        <h1 className="text-5xl font-bold text-center">
          WELCOME TO HOMEPAGE
        </h1>
      </div>
      
    </div>
  )
}

export default Homepage
