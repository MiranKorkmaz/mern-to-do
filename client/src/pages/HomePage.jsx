import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()


  function handleOnClick() {
    localStorage.removeItem("Backend-2")
    navigate("/")
  }
  
  return (
    <div>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  )
}
