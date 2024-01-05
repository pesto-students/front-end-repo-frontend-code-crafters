import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addProduct, removeProduct } from "./app/store.js";
import Button from "./Button.jsx";
import apple from "../assets/products/apple.png";
import { useState } from "react";

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
      <div className="ml-5 mt-5 h-80 w-64 border border-gray-100 rounded-lg text-black">
        <Link to={`/*`}>
          <img className="px-1 pt-1 mb-1" src={apple} alt="Apple" />
        </Link>
        <div className="flex justify-between items-center">
          <div className="mr-2  ">
            <p className="text-xs pl-2 text-gray-500">Product Name</p>
            <p className="text-xs pl-2 text-gray-900 mb-0.5">
              ₹Product Price{" "}
              <span className="text-gray-400 line-through">₹29.99</span>
            </p>
            <p className="text-xs pl-2 text-gray-700">Rating</p>
          </div>
          <div className="flex items-center border border-gray-300 rounded-full mr-1">
            <Button
              className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
              onClick={addQuantity}
            >
              +
            </Button>
            {quantity > 0 && (
              <>
                <p className="mx-2 text-sm">{quantity}</p>
                <Button
                  className="flex items-center flex-grow justify-center right-0 rounded-full h-8 w-8 text-xl bg-gray-100 hover:bg-gray-300"
                  onClick={subtractQuantity}
                >
                  -
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
