import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="overflow-y-scroll border-5 border-gray-800 rounded-lg bg-white h-[100vh] flex flex-col justify-between w-[100vw] m-auto overflow-x-hidden">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
