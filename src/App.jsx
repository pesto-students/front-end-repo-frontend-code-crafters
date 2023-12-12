import harvestlyLogo from './assets/logo-white.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [user, setUser] = useState("Demo")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api');
      const json = await response.json();
      setUser(json.user);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='homepage'>
          <h1 className="text-6xl font-bold mt-5">Welcome to Harvestly, {user}!</h1>
          <img src={harvestlyLogo} className="logo" alt="Harvestly logo"/>
      </div>
      
    </>
  )
}

export default App
