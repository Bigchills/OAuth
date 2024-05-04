import React from 'react'

const Mainnav = () => {
  return (
    <div>
        <nav className="bg-blue-700 flex justify-between items-center
                         px-6 p-3 border-b-2 border-white                                             
                         ">
          <div className="font-semibold">
            <a href="">Logo</a>
          </div>
          <div className="flex gap-3">
            <img src="src/assets/react.svg" alt="userPhoto" className="rounded-full" />
            <h4>Username</h4>
          </div>
        </nav>      
    </div>
  )
}

export default Mainnav
