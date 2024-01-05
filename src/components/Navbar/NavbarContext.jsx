// NavbarContext.js
import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NavbarContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </NavbarContext.Provider>
  );
};
