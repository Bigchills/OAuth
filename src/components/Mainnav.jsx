import React from 'react'
import { useState, useEffect, } from 'react'
import axios from 'axios'


const Mainnav = () => {

  
  return (
    <div>
        <nav className="bg-blue-700 flex justify-between items-center
                         px-6 p-3 border-b-2 border-white                                             
                         ">
          <div className="font-semibold">
            <a href="">Logo</a>
          </div>
          <div className="flex gap-4 items-center min-w-6">
            <div className="rounded-full">
            <img src="/images/react.svg" alt="userPhoto" className=" rounded-full h-7 w-7"/>
            </div>
            <div>
            <h5> {userData.email}</h5>
            </div>
            <div>
              <button>
                logout
              </button>
            </div>
          </div>
        </nav>      
    </div>
  )
}

export default Mainnav
