import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducers/authSlice";
const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location = "/login";
  };

  return (
    <div className="text-black">
      <nav>
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Home;
