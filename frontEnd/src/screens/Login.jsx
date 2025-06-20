import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "../config/axios.js"
import { useUserContext } from '../context/user.context.jsx'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const {setUser} = useUserContext()

    const navigate = useNavigate()

    function submitHandler(e){
        e.preventDefault()
        axios.post("/users/login", {
            email: email,
            password: password
        }).then((res)=>{
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.userExists))
            setUser(res.data.userExists)            
            navigate("/")
            toast.success("Logged In Successfully")           
            
        }).catch((err)=>{      
            toast.error("Invalid Email or Password")           
        })
    }

  return (
    <>
        <ToastContainer/>
        <div className="h-dvh flex items-center justify-center bg-gray-900 flex-col px-5">
            <div className='mb-5 text-white'>
                <h1 className='text-6xl font-semibold'>Mate <span className='text-blue-500'>Ai</span></h1>
            </div>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
                    <form
                    onSubmit={submitHandler}
                    >
                        <div className="mb-4">
                            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
                            <input
                            onChange={e => setpassword(e.target.value)}
                                type="password"
                                id="password"
                                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>
                    <p className="text-gray-400 mt-4">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Create one</Link>
                    </p>
                </div>
            </div>
    </>
  )
}

export default Login