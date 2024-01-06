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
        <Link to={`/*`}>
          <img className="px-1 pt-1" src={apple} alt="Apple" />
        </Link>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="text-sm pl-2 text-gray-500">Product Name</p>
            <p className="text-sm pl-2 text-gray-900">
              ₹ Product Price{" "}
              {!(quantity > 0) && <span className="text-gray-400 line-through">₹29.99</span>}
            </p>
            <div className="h-3 w-3 pl-2 pb-2">
              <Rating value={4} size="small" readonly />
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
