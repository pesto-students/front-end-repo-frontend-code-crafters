import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error/error.png";
import Button from "../components/Button";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center my-10">
      <img src={error} alt="404 error image" height={400} width={400}/>
      <h1 className="text-black font-bold text-2xl my-5">
        Oops! Page not found
      </h1>
      <Link to="/" className="text-black font-bold text-xl">
        <Button
          className="text-white bg-primary font-medium rounded-full text-sm px-4 py-2"
        >
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
