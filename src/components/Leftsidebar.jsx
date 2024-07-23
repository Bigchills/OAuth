import React from 'react'

const Leftsidebar = () => {
  return (
    <div className="w-64 bg-white p-4">
      <div className="text-blue-500 text-2xl font-bold flex items-center space-x-2">
        <img src="logo.png" alt="Logo" className="w-8 h-8" />
        <span>Kaloka</span>
      </div>
      <input type="text" placeholder="Explore kaloka..." className="mt-4 w-full px-4 py-2 rounded border" />
      <nav className="mt-4">
        <ul>
          <li className="mb-4 flex items-center space-x-2">
            <i className="home-icon"></i>
            <span>Home</span>
          </li>
          <li className="mb-4 flex items-center space-x-2">
            <i className="community-icon"></i>
            <span>Community</span>
          </li>
          <li className="mb-4 flex items-center space-x-2">
            <i className="marketplace-icon"></i>
            <span>Marketplace</span>
          </li>
          <li className="mb-4 flex items-center space-x-2">
            <i className="events-icon"></i>
            <span>Kaloka events</span>
          </li>
          <li className="mb-4 flex items-center space-x-2">
            <i className="newsfeed-icon"></i>
            <span>News feed</span>
          </li>
        </ul>
      </nav>
      <div className="mt-4">
        <h2 className="text-gray-700">My community</h2>
        <ul>
          <li className="mt-2">Indonesia UI Designer</li>
          <li className="mt-2">Indonesia UX Researcher</li>
          <li className="mt-2">Frontend Developer Indonesia</li>
        </ul>
      </div>
    </div>
  )
}

export default Leftsidebar
