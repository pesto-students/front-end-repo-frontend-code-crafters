import { useState } from "react";
import { Link } from "react-router-dom";
import apple from "../assets/products/apple.png";
import Button from "../components/Button";
import { cartValueSelector } from "../app/reducers/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  subtractProduct,
  removeProduct,
} from "../app/reducers/cartSlice.js";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()
  console.log("Cart",cart)

  const onProductAdd = (details) => {
    dispatch(addProduct(details));
  };
  const onProductSubtract = (details) => {
    dispatch(subtractProduct(details));
  };
  const onProductDelete = (details) => {
    dispatch(removeProduct(details));
  };

  const totalPrice = useSelector(cartValueSelector);
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-black font-medium text-2xl my-5">
          My Shopping Cart
        </h1>
        {cart.cart.length === 0 && (
          <p className="text-black">
            You have not added any product to your cart yet
          </p>
        )}
        {/* CART TABLE */}
        {cart.cart.length > 0 && (
          <div className="flex items-center">
            <div className="grid grid-cols-3 gap-4">
              <table className="col-span-2 border border-gray-100 text-gray-500 min-w-[600px] mx-15 rounded-md border-separate border-tools-table-outline border-1">
                <thead className="font-normal">
                  <tr className="text-left border-b-2">
                    <th
                      width="30%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Product
                    </th>
                    <th
                      width="15%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Unit price
                    </th>
                    <th
                      width="20%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Quantity
                    </th>
                    <th
                      width="15%"
                      className=" pl-4 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      SubTotal
                    </th>
                    <th width="5%" className="pl-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cart.map((product) => {
                    return (
                      <tr
                        key={product.id}
                        className="text-black border-gray-100 border-b-4"
                      >
                        <td className="pl-4 py-4 flex items-center">
                          <img
                            src={product.image}
                            width="50"
                            height="50"
                            alt=""
                          />
                          <span className="pl-2 text-xs">{product.name}</span>
                        </td>
                        <td className="pl-2 text-xs">₹{product.price}</td>
                        {/* <td className="pl-2 text-xs">{product.quantity}</td> */}
                        <td className="">
                          {
                            <>
                              <div className="flex items-center border border-gray-300 p-1 rounded-full w-32">
                                <Button
                                  className="flex items-center flex-grow justify-center rounded-full h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                                  onClick={() => onProductSubtract(product)}
                                >
                                  -
                                </Button>
                                <p className="px-3 text-sm">{product.quantity}</p>
                                <Button
                                  className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                                  onClick={() => onProductAdd(product)}
                                >
                                  +
                                </Button>
                              </div>
                            </>
                          }
                        </td>
                        <td className="pl-6 text-xs">
                          ₹{product.price * product.quantity}
                        </td>
                        <td className="pl-2 text-xs">
                          <Button className="text-gray-600 font-medium text-sm" onClick={()=> onProductDelete(product)}>
                            x
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                {/* <Link to="/shop">                
            <Button className="text-gray-700 font-sm bg-gray-50 text-xs py-2 px-3 rounded-full text-center">Return to Shop</Button>
            </Link> */}
              </table>
              {/* CART TOTAL */}

              <div className="flex flex-col">
                <div className="px-4 ml-10 border border-gray-100 text-gray-700 rounded-md max-w-[200px] max-h-[200px]">
                  <h2 className="text-gray-900 text-lg font-medium py-2">
                    Cart Total
                  </h2>
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <p className="col-span-3 text-xs py-4 text-gray-700 font-small">
                      Subtotal
                    </p>
                    <span className="text-xs py-4 text-gray-700 font-small">
                      ₹{totalPrice || 100}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 border-b border-gray-200">
                    <p className="col-span-3 text-xs py-4 text-gray-700 font-small">
                      Shipping
                    </p>
                    <span className="text-xs py-4 text-gray-700 font-small">
                      Free
                    </span>
                  </div>
                  <div className="grid grid-cols-4">
                    <p className="col-span-3 text-xs py-4 text-gray-700 font-small">
                      Total
                    </p>
                    <span className="text-xs py-4 text-gray-700 font-small">
                      <strong>₹{totalPrice || 100}</strong>
                    </span>
                  </div>
                </div>
                <Link to="/checkout" className="ml-10 mt-5">
                  <Button className=" text-white font-sm bg-primary text-xs py-2 px-3 rounded-full text-center">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
              <Link to="/shop">
                <Button className="text-gray-700 font-sm bg-gray-50 text-xs py-2 px-3 rounded-full text-center">
                  Return to Shop
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
