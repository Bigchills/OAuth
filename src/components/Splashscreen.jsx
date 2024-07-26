import React from 'react'
import { RingLoader } from 'react-spinners'

const Splashscreen = () => {
  return (
    <div className='h-full w-full'>
        <div className='flex flex-col justify-center items-center gap-4 h-screen'>
            <div className=' flex justify-center items-center' >
                <h2 className="text-4xl text-blue-600 font-semibold mb-2
                                ">
                    Roomieapp
                </h2>
            </div>
            <RingLoader
                color="#4B70F5"
                size={80}
                speedMultiplier={1}
                />
        </div>xl
      
    </div>
  )
}

export default Splashscreen
