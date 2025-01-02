import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/store/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants.'

const Login = () => {
  const [emailId,setEmailId] = useState('')
  const [password,setPassword] = useState('')
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
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

  const handleSignup = async () => {
    try {
      const res = await axios.post(BASE_URL + "/signup", 
        {firstName, lastName, emailId, password},
        {withCredentials : true}
      )
      dispatch(addUser(res?.data?.data))
      return navigate("/profile")
    }

    catch (err) {
      setError(err?.response?.data || 'Something went wrong!')
     
    }
  }
  return (
    <div className='flex justify-center mt-5'>
      <div className="card bg-base-200 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl justify-center">{isLoginForm ? "Login" : "Sign Up"}</h2>
          <div className="card-actions justify-center m-4">
          {!isLoginForm && (
            <>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter Your First Name </span>
              </div>
              <input 
                type="text" 
                placeholder="First Name" 
                className="input input-bordered w-full max-w-xs" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter Your Last Name</span>
              </div>
              <input 
                type="text" 
                placeholder="Last Name" 
                className="input input-bordered w-full max-w-xs" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            </>
          )}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter Your Email Address</span>
              </div>
              <input 
                type="text" 
                placeholder="Email Address" 
                className="input input-bordered w-full max-w-xs" 
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Enter Your Password </span>
              </div>
              <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
              />
            </label>

            <div className='justify-center mt-4'>
            <p className='text-red-600'>{error}</p>
            <button className="btn btn-primary btn-lg " onClick={isLoginForm ? handleLogin : handleSignup}>{isLoginForm ? "Login" : "Sign Up"}</button>
            <p 
              className="cursor-pointer p-4"
              onClick={() => setIsLoginForm(value => !value)}
            >
              {isLoginForm ? "New User? Signup Here" : "Existing User? Login Here"}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login