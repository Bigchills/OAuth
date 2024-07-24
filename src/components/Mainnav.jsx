import React from 'react';
import { useNavigate } from 'react-router-dom';

const Mainnav = ({user}) => {

  const navigate=useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <div className=' bg-white sticky top-0 z-20'>

      {
        user &&(
          <nav className=" flex justify-between items-center px-6 p-3 border-b-2 border-white">
          <div className="font-semibold">
            <a href="">Logo</a>
          </div>
          
            <div className="flex gap-2 items-center min-w-6">
              <div className="rounded-full">
                <img src={user.avatar} alt="userPhoto" className="rounded-full h-7 w-7" />
              </div>
              <div>
                <h5>{user.username}</h5>
              </div>
              <div>
                <button onClick={handleLogout}>
                  logout
                </button>
              </div>
            </div>
        </nav>
  

        )
      }
    </div>
  );
};
export default Mainnav;
