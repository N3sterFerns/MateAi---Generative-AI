import React, { useState } from 'react'
import { useUserContext } from '../context/user.context';
import axios from '../config/axios';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const { user } = useUserContext();
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate()


    const handleAvatarClick = () => {
        setShowLogout(!showLogout); 
      };
    
      const handleLogout = () => {   
        console.log("logout");
             
        axios.get("/users/logout").then(()=>{
          localStorage.removeItem("token")
          localStorage.removeItem("user")
          navigate("/login")
        })
    };
    
  return (
    <div className="ml-3 relative">
    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white cursor-pointer" onClick={handleAvatarClick}>
      <i className="ri-user-line"></i>
    </div>

    {showLogout &&(
      <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-[999]">
        {/* Email display */}
        <div className="text-sm text-gray-700 mb-2 text-center">
          <p className="font-semibold py-3">{user.email}</p>
        </div>

        <button
        onClick={handleLogout}
          className="w-full text-center border-[1px] rounded-md py-1 border-[#D1D5DB] text-red-500 hover:text-red-700 hover:bg-red-200 transition-all cursor-pointer">
          Logout
        </button>
      </div>
    )}
  </div>
  )
}

export default UserInfo