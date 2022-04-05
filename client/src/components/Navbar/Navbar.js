import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate, useLocation} from "react-router-dom"

export default function Navbar() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const logout = () => {
        dispatch({ type: "LOGOUT" })
        navigate("/")
        setUser(null)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))
    }, [location])

    return (
        <>
            {user ? (
                <div>
                    <p>{user.user}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <button><a href="/auth">Login</a></button>
            )}
        </>
  )
}
