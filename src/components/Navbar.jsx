import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoText from "./LogoText";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { logout } from "../app/reducers/authSlice";
export default function Header() {
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location = "/login";
  };

  return (
    <header>
      <nav className="flex justify-center items-center w-full h-150px bg-white shadow-md">
        <LogoText />
        {token && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-semibold bg-primary hover:bg-secondary"
            type="button"
          >
            Login / Register
          </Button>
        )}
        {token && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-semibold bg-primary hover:bg-secondary"
            type="button"
            onClick={handleLogout}
          >
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
}
