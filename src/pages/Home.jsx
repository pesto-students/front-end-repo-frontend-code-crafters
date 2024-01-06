import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducers/authSlice";
import Cookies from "js-cookie";

const Home = () => {

  useEffect(()=>{
    let cookieValue = Cookies.get('token');
    sessionStorage.setItem("token", cookieValue);
  },[])

  return (
    <div className="text-black">
      <nav>
        <h1>Home Page</h1>
      </nav>
    </div>
  );
};

export default Home;
