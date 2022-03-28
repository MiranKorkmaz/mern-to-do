import React, { useState } from 'react'

export default function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  async function userRegister(event) {
    event.preventDefault()
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password})
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={userRegister}>
        <input 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text" 
          placeholder="Username"
        />
        <input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          placeholder="Password"
        />
        <input type="submit" value="Register"/>
      </form>
    </div>
  )
}
