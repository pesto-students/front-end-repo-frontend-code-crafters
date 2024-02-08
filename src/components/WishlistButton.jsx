import React from "react";
import { useState } from "react";
import {
  addProductWishlist,
  removeProductWishlist,
} from "../app/reducers/wishlistSlice.js";
import { useSelector, useDispatch } from "react-redux";

function WishlistButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  const { details, isWishlist, classNames } = props;
  const dispatch = useDispatch();

  const onProductAddWishlist = (details) => {
    dispatch(addProductWishlist(details));
  };

  const onProductSubtractWishlist = (details) => {
    dispatch(removeProductWishlist(details));
  };

  const handleClick = () => {
    if (!isClicked) {
      onProductAddWishlist(details);
      console.log("added product");
    } else {
      onProductSubtractWishlist(details);
      console.log("removed product");
    }
  };
  console.log("details", details);
  return (
    <button onClick={handleClick} className={classNames}>
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        className={`${isWishlist ? "fill-primary" : ""} cursor-pointer`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          width="52"
          height="52"
          rx="26"
          fill="#20B526"
          fillOpacity="0.1"
        />
        <path
          d="M26.4996 33.5451C9.83328 24.3334 21.4999 14.3334 26.4996 20.6567C31.4999 14.3334 43.1666 24.3334 26.4996 33.5451Z"
          stroke="#096A2E"
          strokeWidth="1.5"
        />
      </svg>
    </button>
  );
}

export default WishlistButton;
