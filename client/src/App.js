import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage"


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>} />
         <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}
