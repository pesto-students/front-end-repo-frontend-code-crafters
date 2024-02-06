import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoText from "./LogoText";
import greenLogo from "../assets/logo/logo-no-bg-green.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { logout } from "../app/reducers/authSlice";
import search from "../assets/shop/search.png";
import cart from "../assets/shop/cart.png";
import wishlist from "../assets/shop/wishlist.png";
import divider from "../assets/shop/divider.png";
import avatar from "../assets/shop/avatar.png";
import { useSelector } from "react-redux";
import { cartCountSelector } from "../app/reducers/cartSlice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchbarAllowed, setIsSearchbarAllowed] = useState(false);
  const [isWishlistAllowed, setIsWishlistAllowed] = useState(false);
  const [isCartAllowed, setIsCartAllowed] = useState(false);
  const [isAvatarAllowed, setIsAvatarAllowed] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartCount = useSelector(cartCountSelector);

  const token = sessionStorage.getItem("token")
    ? sessionStorage.getItem("token")
    : null;
  const path = window.location.pathname;

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };
  const handleSearchSubmit = () => {
    alert("Search clicked");
  };
  const paths = ["/shop", "/products", "/products/:id", "/wishlist"];

  useEffect(() => {
    if (path === "/shop") {
      setIsSearchbarAllowed(true);
      setIsWishlistAllowed(true);
      setIsCartAllowed(true);
      setIsAvatarAllowed(true)
    } else if (path === "/wishlist") {
      setIsSearchbarAllowed(false);
      setIsWishlistAllowed(false);
      setIsCartAllowed(true);
      setIsAvatarAllowed(true)
    } else if(path === "/cart"){
      setIsSearchbarAllowed(false);
      setIsWishlistAllowed(true);
      setIsCartAllowed(false);
      setIsAvatarAllowed(true)
    }else {
      setIsSearchbarAllowed(false);
      setIsWishlistAllowed(false);
      setIsCartAllowed(false);
      setIsAvatarAllowed(false)
    }

    // if (path === "/"){
    //   setIsSearchbarAllowed(false)
    //   setIsCartAllowed(false)
    // }
    // else setIsSearchbarAllowed(false)
  }, [path]);

  return (
    <header>
      <nav className="flex justify-between items-center w-full h-150px bg-white shadow-md">
        <Link to="/">
          <LogoText
            div="flex items-center space-x-2 h-20 w-auto ml-5"
            text="text-black text-2xl font-medium"
            src={greenLogo}
          />
        </Link>
        {isSearchbarAllowed ? (
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative ml-20 w-72">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <img src={search} />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-green-500 rounded-lg bg-white"
                placeholder="Fruits, vegetables..."
                required
              />
              {/* <Button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-primary focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
                  onClick={handleSearchSubmit}
                >
                  Search
                </Button> */}
            </div>
          </form>
        ) : null}
        {/* WISHLIST - CART */}

        <div className="relative flex items-center justify-between ml-auto">
          {isWishlistAllowed ? (
            <>
              <Link to="/wishlist">
                <img
                  className="h-8 w-8 mr-2"
                  src={wishlist}
                  alt="wishlist icon"
                />
              </Link>
              {isWishlistAllowed && isCartAllowed ? <img className="" src={divider} alt="divider icon" /> : null}
            </>
          ) : null}
          {isCartAllowed ? (
            <Link to="/cart">
              <div className="relative">
                <img className="h-8 w-8 ml-2" src={cart} alt="cart icon" />
                <p className="text-xs flex justify-center items-center absolute top-0 right-0 h-4 w-4 px-2 py-1 rounded-full bg-primary text-white">
                  {cartCount}
                </p>
              </div>
            </Link>
          ) : null}
          <div className="relative inline-block text-left ml-10 mb-2">
          {isAvatarAllowed ? <div>
              <button type="button" onClick={() => setIsOpen(!isOpen)}>
                <img
                  src={avatar}
                  className="inline-block h-8 w-8 rounded-full"
                  alt="Avatar"
                />
              </button>
            </div> : null }

            {isOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    onClick={handleLogout}
                    onMouseLeave={() => setIsOpen(!isOpen)}
                    className="w-full"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Logout
                    </a>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        {!token && path !== "/login" && path !== "/register" && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-medium bg-primary hover:bg-secondary"
            type="button"
            onClick={() => navigate("/login")}
          >
            Login / Register
          </Button>
        )}
        {token && (
          <Button
            className="flex items-center ml-auto mr-5 h-10 w-auto px-3 py-4 rounded-lg text-white font-medium bg-primary hover:bg-secondary"
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
