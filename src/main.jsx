import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./index.css";

function Main(){
  const user = localStorage.getItem("token");
  return(
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            {user && <Route path="/" exact element={<Main />} />}
            <Route path="/" element={<Navigate replace to="/login" />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
