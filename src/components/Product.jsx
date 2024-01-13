import { useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addProduct, removeProduct } from "./app/store.js";
import { Rating } from "@material-tailwind/react";

import Button from "./Button.jsx";
import apple from "../assets/products/apple.png";

export default function Product(props) {
  const [quantity, setQuantity] = useState(0);
  // const { details } = props;

  // const dispatch = useDispatch();

  // const cart = useSelector((state) => state.cart);
  // const productFromCart = cart.find((product) => product.id === details.id);
  // const quantity = productFromCart ? productFromCart.quantity : 0;

  // const onProductAdd = () => {
  //   dispatch(addProduct(details));
  // };
  // const onProductDelete = () => {
  //   dispatch(removeProduct(details));
  // };
  // if (quantity >0){
  //   setClick(prevValue => !prevValue);
  // }

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const subtractQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setClick(!click);
    }
  };
  return (
    <>
      <div className="mt-1 h-80 w-64 border border-gray-100 rounded-lg text-black">
        <Link to={`/products/id}`}>
          <img className="px-1 pt-1" src={apple} alt="Apple" />
        </Link>
        <div className="flex justify-between items-center">
          <div className="pl-2">
            <p className="text-sm  text-gray-500">Product Name</p>
            <p className="text-sm  text-gray-900">
              ₹ Product Price{" "}
              {!(quantity > 0) && (
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
          <div className="flex items-center border border-gray-300 rounded-full mr-2">
            {quantity > 0 && (
              <>
                <Button
                  className="flex items-center flex-grow justify-center rounded-full h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
                  onClick={subtractQuantity}
                >
                  -
                </Button>
                <p className="px-3 text-sm">{quantity}</p>
              </>
            )}
            <Button
              className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
              onClick={addQuantity}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
