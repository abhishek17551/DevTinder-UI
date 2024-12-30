import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/store/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants.'

const Login = () => {
  const [emailId,setEmailId] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post(BASE_URL + "/login", {
        emailId,password
      }, {
        withCredentials : true
      })
      dispatch(addUser(response.data))
      navigate("/")
    } catch (err) {
      setError(err?.response?.data || 'Something went wrong!')
      console.error(err)
    }
  }
  return (
    <div className='flex justify-center mt-5'>
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">Login</h2>
          <div className="card-actions justify-center m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter your email address</span>
              </div>
              <input 
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-full max-w-xs" 
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter your password </span>
              </div>
              <input 
                type="password" 
                placeholder="Type here" 
                className="input input-bordered w-full max-w-xs" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
              />
            </label>
            <p className='text-red-600'>{error}</p>
            <button className="btn btn-primary mt-4 mx-8" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login