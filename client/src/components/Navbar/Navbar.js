import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate, useLocation} from "react-router-dom"
import decode from "jwt-decode"

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
        const token = user?.token

        if(token) {
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()) logout()
        }
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
