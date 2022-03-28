import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()


  async function userLogin(event) {
    event.preventDefault()

    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password
      })
    })
    const data = await response.json()
    if (data.user) {
      navigate("/home")
    } else {
      alert("Wrong username or password")
    }
  }


  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={userLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}
