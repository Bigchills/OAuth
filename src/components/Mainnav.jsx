import React from 'react'
import { useState, useEffect, } from 'react'
import axios from 'axios'


const Mainnav = () => {

  const[userData, setUserData]=useState(null)
  
  const fetchUserData=async()=>{

    const token=localStorage.getItem('authToken');
    if (!token) {
      throw new Error('No auth token found');
    }

    try {
      const response = await axios.get('https://roomie-app-1.onrender.com/auth/user', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      throw error;
    }
  }

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

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
