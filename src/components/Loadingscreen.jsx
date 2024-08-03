import React from 'react'
import { ClipLoader } from 'react-spinners'

const Loadingscreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">

        <div className='bg-white h-96 w-96'>
            <ClipLoader
                color="#4B70F5"
                speedMultiplier={0}
                />
        </div>
      
    </div>
  )
}

export default Loadingscreen
