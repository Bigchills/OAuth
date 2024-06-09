import React from 'react'
import { useState, useEffect, } from 'react'
import axios from 'axios'


const Mainnav = () => {

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken');
      if(token){
        console.log(token);
      }   
      // Check if token is expired or invalid

      try {
        const response = await fetch('https://roomie-app-1.onrender.com/auth/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

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
              <h5>{userData.email}</h5>
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
