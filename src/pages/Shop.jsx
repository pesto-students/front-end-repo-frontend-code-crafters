import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducers/authSlice";
import FeaturedProductGrid from "../components/FeaturedProductGrid";



const Shop = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location = "/login";
  };

  return (
    <div className="text-black">
      <nav>
        
        <FeaturedProductGrid/>
       
        {/* <button
          className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-semibold bg-primary hover:bg-secondary"
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button> */}
      </nav>
    </div>
  );
};

export default Shop;
