import React from 'react'
import { useState,useEffect } from 'react';

const Newaccountmodal = ({closeModal}) => {
    const[formData, setFormData]=useState({})
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const res=await fetch('https://roomie-app-1.onrender.com/signup', formData)
        const data =await res.json();
        console.log(data);

    }
  return (
<div className="w-full h-full fixed top-0 backdrop-blur-sm md:py-5  flex justify-center items-center">

    <div className="w-full h-full  md:max-w-2xl md:max-h-[550px] z-10 bg-white font rounded-lg border   border-slate-400 mx-auto overflow-y-scroll overscroll-y-none">
        <div className="font-medium text-center" >
            logo
        </div>

        <div className="font-medium flex justify-center items-center">
            <h2>
                Fill in your details
            </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-3/4 md:max-w-sm  mt-10 mx-auto space-y-1" >
                <label className="font-medium" htmlFor="">Full Name:</label>
                <input onChange={handleChange} id='name' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Your name' type="name" required />
            </div>

            <div className="flex flex-col w-3/4 md:max-w-sm  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Phone number:</label>
                <input onChange={handleChange} id='phonenumber' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Your phone number' type="" name="" required />
            </div>     

            <div className="flex flex-col w-3/4 md:max-w-sm   mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Email:</label>
                <input onChange={handleChange} id='email' className=" bg-slate-100 border-slate-600 rounded-lg p-3" placeholder='Your email' type="email" name=""  required />
            </div>

            <div className="flex flex-col w-3/4 md:max-w-sm  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Password:</label>
                <input onChange={handleChange} id='password' className=" bg-slate-100 border-slate-600  rounded-lg p-3" placeholder='Type a password' type="password" name="" required />
            </div>
            <div className=" w-1/2 flex mx-auto space-x-5 justify-center items-center mb-5">
                <button onClick={()=>{
                closeModal(false);
                }} className="border bg-red-600 hover:bg-red-700  rounded-md text-white px-3 py-1 text-sm " >Cancel</button>
                <button type='' className="border bg-black hover:bg-slate-800
                 rounded-md text-white px-3 py-1 text-sm">Sign up</button>
            </div>              

        </form>

    </div>     
</div>
  )
}

export default Newaccountmodal
