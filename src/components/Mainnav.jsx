import React from 'react'
import { useState, useEffect, } from 'react'
import axios from 'axios'


const Mainnav = () => {

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve the authentication token from localStorage
    const authToken = localStorage.getItem('authToken');
    // Define the URL of your backend endpoint to fetch user data
    const apiUrl = 'https://roomie-app-1.onrender.com/auth/user';

    // Make a fetch request to the backend API
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}` // Include the token in the Authorization header
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      setUserData(data); // Set the user data state
    })
    .catch(error => {
      setError(error.message); // Set the error state
    });
  }, []); // Empty dependency array to ensure useEffect runs only once




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
            <h5>{userData.username}</h5>
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
