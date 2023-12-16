import React from "react"
import harvestlyLogo from './assets/logo-white.svg'
import './App.css'
import { useEffect, useState } from 'react'
const url =  import.meta.env.VITE_API_URL

function App() {
  const [user, setUser] = useState("Demo")
  const User = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url + '/api');
      const json = await response.json();
      setUser(json.user);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='homepage'>
          <h1 className="text-6xl font-bold text-black mt-5 mb-5">Welcome to Harvestly, {user}!</h1>
          <img src={harvestlyLogo} className="logo" alt="Harvestly logo"/>
      </div>
      
    </>
  )
}

export default App
