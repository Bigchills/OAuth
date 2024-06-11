import React from 'react'
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Newaccountmodal = ({closeModal}) => {
    const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload={ fullname, phonenumber, email, password };
    console.log('Request Payload:', payload);
    try {
        const response = await fetch('https://roomie-app-1.onrender.com/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }, body: JSON.stringify({ fullname, phonenumber, email, password })
        });
    //   const response= await axios.post('https://roomie-app-1.onrender.com/signup', payload)
    //   console.log('Response:', response);
    //     {
    //     fullname,
    //     phonenumber,
    //     email,
    //     password,
    //   });
      if (response.status === 201) {
        setMessage('Signup successful!');
        // Optionally, you can redirect the user to the login page or home page
        // window.location.href = '/login';
      } else {
        setMessage('Signup failed. Please try again.');
      }
    } catch (error) {
        console.error('Error during signup:', error.response ? error.response.data : error.message);
        setMessage('Signup failed. Please try again.');
    }
  }
  return (
<div className="w-full h-full fixed top-0 backdrop-blur-sm md:py-5  flex justify-center items-center">

    <div className="w-full h-full  md:max-w-2xl md:max-h-[550px]
        z-10 bg-white font rounded-lg border  border-slate-400
          mx-auto overflow-y-scroll overscroll-y-none">
        <div className="font-medium text-center" >
            logo
        </div>

        <div className="font-medium flex justify-center items-center">
            <h2>
                Fill in your details
            </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-3/4 md:max-w-sm mt-10 mx-auto space-y-1" >
                <label className="font-medium" htmlFor="">Full Name:</label>
                <input value={fullname} onChange={(e) => setFullname(e.target.value)} id='name' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Your name' type="name" required />
            </div>

            <div className="flex flex-col w-3/4 md:max-w-sm  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Phone number:</label>
                <input value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}   id='phonenumber' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Your phone number' type="" name="" required />
            </div>     

            <div className="flex flex-col w-3/4 md:max-w-sm   mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Email:</label>
                <input value={email}  onChange={(e) => setEmail(e.target.value)} id='email' className=" bg-slate-100 border-slate-600 rounded-lg p-3" placeholder='Your email' type="email" name=""  required />
            </div>

            <div className="flex flex-col w-3/4 md:max-w-sm  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Type a password' type="password" name="" required />
            </div>
            <div className=" w-1/2 flex mx-auto space-x-5 justify-center items-center mb-5">
                <button onClick={()=>{
                closeModal(false);
                }} className="border bg-red-600 hover:bg-red-700  rounded-md text-white px-3 py-1 text-sm " >Cancel</button>
                <button type='submit' className="border bg-black hover:bg-slate-800
                 rounded-md text-white px-3 py-1 text-sm">Sign up</button>
            </div>              
        </form>
        {message && <p>{message}</p>}

    </div>     
</div>
  )
}

export default Newaccountmodal
