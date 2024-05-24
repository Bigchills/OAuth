import React from 'react'

const Newaccountmodal = ({closeModal}) => {
  return (
<div className="w-full h-full fixed top-0 backdrop-blur-sm md:py-8 flex justify-center items-center">

    <div className="w-full md:w-3/4 bg-white font rounded-lg border py-4 border-slate-400 mx-auto">
        <div className="font-medium text-center" >
            logo
        </div>

        <div className="font-medium flex justify-center items-center">
            <h2>
                Fill in your details
            </h2>
        </div>
        
        <form action="">
            <div className="flex flex-col w-3/4 md:w-2/5  mt-10 mx-auto space-y-1" >
                <label className="font-medium" htmlFor="">Name:</label>
                <input className="border border-slate-600 h-9 rounded-lg p-2" placeholder='' type="name" required />
            </div>

            <div className="flex flex-col w-3/4 md:w-2/5  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Phone number:</label>
                <input className="border border-slate-600 h-9 rounded-lg p-2" placeholder='' type="number" name="" id="" required />
            </div>     

            <div className="flex flex-col w-3/4 md:w-2/5  mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Email:</label>
                <input className="border border-slate-600 h-9 rounded-lg p-2" placeholder='' type="email" name="" id="" required />
            </div>

            <div className="flex flex-col w-3/4 md:w-2/5 mx-auto space-y-1 mt-5 mb-10">
                <label className="font-medium" htmlFor="">Password:</label>
                <input className="border border-slate-600 h-9 rounded-lg p-2" placeholder='' type="password" name="" id="" required />
            </div>
        </form>

        <div className=" w-1/2 flex mx-auto space-x-5 justify-center items-center mb-5">
            <button onClick={()=>{
                closeModal(false);
            }} className="border bg-red-600 hover:bg-red-700  rounded-md text-white px-3 py-1 text-sm " >Cancel</button>
            <button type='submit' className="border bg-black hover:bg-slate-800 rounded-md text-white px-3 py-1 text-sm">Sign up</button>
        </div>              
    </div>     
</div>
  )
}

export default Newaccountmodal
