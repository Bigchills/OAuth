import React from 'react'

const Maincontent = ({user}) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 overflow-y-auto  ml-64 mr-64">
        <div className="bg-white p-4 rounded shadow">
            {
            user &&(
                <div className="flex items-center space-x-2">
                    <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
                    <input type="text" placeholder="What's on your mind?" className="w-full px-4 py-2 border rounded" />
                </div>
            )  
            }
            <div className="flex justify-between mt-4">
                <div className="flex space-x-3">
                    <button className="px-4 py-2 border rounded">Photo</button>
                    <button className="px-4 py-2 border rounded">Video</button>
                </div>
                <div>
                    <button className="px-4 py-1 flex items-center justify-center text-white font-medium rounded bg-blue-600">Post</button>
                </div>
            </div>
        </div>
        <div className="mt-4 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold">Lucky Andreas</h2>
            <p className="text-gray-600">12 minutes ago on 3D Stock Contributor</p>
            <p>What is the reason guys yesterday I uploaded same kind of content they approved it but when today I tried to upload they say we no longer accept this type of content</p>
            <img src="https://via.placeholder.com/400x200" alt="Post" className="w-full mt-4 rounded" />
            <div className="flex space-x-4 mt-4">
                <button className="px-4 py-2 border rounded">Liked post</button>
                <button className="px-4 py-2 border rounded">Comment</button>
                <button className="px-4 py-2 border rounded">Share</button>
            </div>
        </div>
    </div>

)
}

export default Maincontent
