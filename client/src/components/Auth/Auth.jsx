import React from 'react'

export default function Auth() {
  const isSignup = true

  const handleOnSubmit = () => {

  }

  const handleOnChange = () => {

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
          handleOnChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="password"
          label="password"
          placeholder="Password"
          handleOnChange={handleOnChange}
          required
        />
        <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  )
}
