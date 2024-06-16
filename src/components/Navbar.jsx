import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 flex justify-between items-center
                         px-6 p-3 border-b-2 border-white                                             
                         ">
        <div className="font-semibold">
            <a href="">Logo</a>
        </div>
        <div>
            <button className="bg-black text-white px-3 py-2 items-center
                                rounded-lg w-20 max-w-36                                
                                ">
                Join
            </button>
        </div>        
    </nav>
  )
}

export default Navbar
