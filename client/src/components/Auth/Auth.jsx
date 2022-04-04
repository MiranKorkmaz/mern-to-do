import React, { useState }from 'react'
import {useDispatch} from "react-redux"
import { signin, signup } from "../../actions/auth"
import {useNavigate} from "react-router-dom"

const initialState = { username: "", password: "" }

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(isSignup) {
      dispatch(signup(formData))
      navigate("/")
    } else {
      dispatch(signin(formData))
      navigate("/")
    }
  }

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
  }

  return (
    <div>
      {isSignup ? "Sign Up" : "Sign In"}
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="username"
          label="username"
          placeholder="Username"
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="password"
          label="password"
          placeholder="Password"
          onChange={handleOnChange}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
        <button onClick={switchMode}>{ isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}</button>
      </form>
    </div>
  )
}
