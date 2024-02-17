import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
export default function Success() {
  return (
    <div className="flex flex-col items-center my-10">
      <h1 className="text-black font-bold text-2xl my-5">
        Order Placed!
      </h1>
      <Link to="/" className="text-black font-bold text-xl">
        <Button
          className="text-white bg-primary font-medium rounded-full text-sm px-4 py-2"
        >
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
