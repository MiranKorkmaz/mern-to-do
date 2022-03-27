import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <p>{!data ? "Loading..." : data}</p>
      <Routes>
        <Route path="/home" element={HomePage} />
        <Route path="/login" element={LoginPage} />
        <Route path="/register" element={RegisterPage} />
      </Routes>
    </div>
  )
}
