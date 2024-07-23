import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-64 bg-white p-4 h-screen overflow-y-auto fixed top-0 right-0">
      <h2 className="text-gray-700 text-xl font-bold">Today Trending</h2>
      <ul className="mt-4">
        <li className="mb-4">Figma maintenance <span className="text-gray-500">66 in 1 hour</span></li>
        <li className="mb-4">Blender Update <span className="text-gray-500">45 in 1 hour</span></li>
        <li className="mb-4">Slackoverflow server <span className="text-gray-500">42 in 1 hour</span></li>
        <li className="mb-4">Javascript new <span className="text-gray-500">24 in 1 hour</span></li>
      </ul>
      <h2 className="text-gray-700 text-xl font-bold mt-4">Suggested community</h2>
      <div className="mt-4">
        <div className="bg-gray-100 p-4 rounded flex items-center space-x-2">
          <img src="figma-logo.png" alt="Figma" className="w-8 h-8" />
          <div>
            <h3 className="font-bold">Figma Desainer</h3>
            <p className="text-gray-500">1425 members</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
