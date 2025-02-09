import React, { useEffect, useState,  } from 'react'
import { useUserContext } from '../context/user.context';
import { useNavigate } from 'react-router-dom';

const UserAuth = ({children}) => {
  const {user, setUser} = useUserContext();
  const [loading, setLoading] = useState(true)
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  
  useEffect(() => {
    // if(user){
    //   setLoading(false)
    // }
    // if(!token){
    //   navigate("/login")
    // }
    
    // if(!user){
    //   navigate("/login")
    // }

    const storedUser = JSON.parse(localStorage.getItem("user"))    

    if(storedUser){
      setUser(storedUser)
    }

    if(!token){
      navigate("/login")
      return
    }

    if (storedUser && !user) {
      setUser(storedUser); 
    }

    setLoading(false)

  }, [setUser, token])
  
  if(loading){
    return <div>Loading...</div>
  }
  

  return (
    <>{children}</>
  )
}

export default UserAuth