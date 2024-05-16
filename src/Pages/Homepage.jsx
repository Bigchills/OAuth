import React from 'react'
import Mainnav from '../components/Mainnav'
import Bottomnav from '../components/Bottomnav'
import { useEffect } from 'react'
import { useState } from 'react'

const Homepage = () => {
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
