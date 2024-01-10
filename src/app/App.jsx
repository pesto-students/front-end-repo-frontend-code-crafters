import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Navbar from "../components/Navbar.jsx";
import PageFooter from "../components/Footer.jsx";
import Landing from "../pages/Landing.jsx";
import Shop from "../pages/Shop.jsx";
import Cart from "../pages/Cart.jsx";
import Wishlist from "../pages/Wishlist.jsx";

export default function App() {
  return (
    <>
      <div className="overflow-y-scroll border-5 border-gray-800 rounded-lg bg-white flex flex-col m-auto overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <PageFooter />
      </div>
    </>
  );
}
