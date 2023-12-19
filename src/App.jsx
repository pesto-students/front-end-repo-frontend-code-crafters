import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import './App.css'
import "./index.css";
const url =  import.meta.env.VITE_API_URL

function App() {

  const user = localStorage.getItem("token");
  console.log("token", user);

  return (
    <>
    <BrowserRouter>
      <Routes>
        {user && <Route path="/home" exact element={<Home />} />}
        <Route path="/" element={<Navigate replace to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
