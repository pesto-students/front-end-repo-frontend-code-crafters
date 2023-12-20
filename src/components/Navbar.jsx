import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoText from "./LogoText";
import Button from "./Button";
export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  // function fakeLogOut() {
  //   localStorage.removeItem("loggedin");
  // }

  return (
    <header>
      {/* <Link className="site-logo" to="/">#VanLife</Link> */}
      <nav className="flex justify-center items-center w-full h-150px bg-white shadow-md">
        <LogoText />
        {/* <NavLink 
                    to="host"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src="/assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link> */}
        <Button
          className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-semibold bg-primary hover:bg-secondary"
          type="button"
        >
          Login / Register
        </Button>
      </nav>
    </header>
  );
}
