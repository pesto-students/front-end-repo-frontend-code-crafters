import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  subtractProduct,
  removeProduct,
} from "../app/reducers/cartSlice.js";

import Button from "./Button.jsx";
import apple from "../assets/products/apple.svg";
import WishlistButton from "./WishlistButton.jsx";
import { addProductWishlist } from "../app/reducers/wishlistSlice.js";

export default function Product(props) {
  // const [quantity, setQuantity] = useState(0);
  const { details } = props;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  let qty;
  if (cart.length === 0) {
    qty = 0;
  } else {
    const productFromCart = cart?.find(
      (product) => product?.id === details?.id
    );
    qty = productFromCart ? productFromCart?.quantity : 0;
  }

  const onProductAdd = (details) => {
    dispatch(addProduct(details));
  };
  const onProductSubtract = (details) => {
    dispatch(subtractProduct(details));
  };
  const onProductDelete = () => {
    dispatch(removeProduct(details));
  };
  const onProductAddWishlist = (details) => {
    dispatch(addProductWishlist(details));
  };

  const handleClick = (ID) => {
    console.log("inside function handleClick = ", ID);
  };

  return (
    <>
      <div className="h-80 w-64 border border-gray-100 rounded-lg text-black">
        <div className="flex items-center justify-center">
          <div>
            <Link to={`/products/${details?.id}`}>
              <img
                className="px-1 pt-1"
                src={details?.image}
                onClick={() => handleClick(details?.id)}
                alt="Apple"
              />
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center">
            <WishlistButton
              className="absolute top-0 right-0"
              details={details}
              isWishlist={details?.isWishlist}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="pl-2">
            <p className="text-sm  text-gray-500">{details?.name}</p>
            <p className="text-sm  text-gray-900">
              ₹{details?.price}{" "}
              {!(qty > 0) && (
                <span className="text-gray-400 line-through">₹29.99</span>
              )}
            </p>
            <div className="flex items-center justify-start">
              <svg
                className="w-4 h-3 text-yellow-800 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="text-sm font-bold text-gray-900">4.9</p>
              {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span> */}
              {/* <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a> */}
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full mr-2 p-1">
            {qty > 0 && (
              <>
                <Button
                  className="flex items-center flex-grow justify-center rounded-full h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
                  onClick={() => onProductSubtract(details)}
                >
                  -
                </Button>
                <p className="px-3 text-sm">{qty}</p>
              </>
            )}
            <Button
              className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
              onClick={() => onProductAdd(details)}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
