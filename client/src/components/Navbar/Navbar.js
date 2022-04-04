import React from 'react'

export default function Navbar() {
    const user = null

    return (
        <>
            {user ? (
                <div>
                    <p>User</p>
                    <button>Logout</button>
                </div>
            ) : (
                <button><a href="/auth">Login</a></button>
            )}
        </>
  )
}
