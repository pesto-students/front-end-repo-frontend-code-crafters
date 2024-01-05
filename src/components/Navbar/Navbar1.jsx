// Navbar.js
import React, { useContext } from 'react';
import { NavbarContext } from './NavbarContext';
import Navbar from './Navbar'; // Your original Navbar component
import Navbar2 from './Navbar2'; // Your updated Navbar component

const Navbar1 = () => {
  const { loggedIn } = useContext(NavbarContext);

  return loggedIn ? <Navbar2 /> : <Navbar />;
};

export default Navbar1;
