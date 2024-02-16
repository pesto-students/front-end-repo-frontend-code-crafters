import { useState } from "react";
import { Link } from "react-router-dom";
import { Chip } from "@material-tailwind/react";
import apple from "../assets/products/apple.png";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  subtractProduct,
  removeProduct,
} from "../app/reducers/cartSlice.js";
import { removeProductWishlist } from "../app/reducers/wishlistSlice.js";
import { toggleProductWishlist } from "../app/reducers/productSlice.js";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const onProductAdd = (details) => {
    dispatch(addProduct(details));
  };

  const onProductDelete = (details) => {
    dispatch(removeProductWishlist(details));
    dispatch(toggleProductWishlist(details));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-black font-medium text-2xl my-5">My Wishlist</h1>
        {wishlist.length === 0 && (
          <p className="text-black">
            You have not added any product to your wishlist yet
          </p>
        )}
        {/* WISHLIST */}
        {wishlist.length > 0 && (
          <div className="flex items-center justify-center">
            <div className="grid">
              <table className="col-span-2 border border-gray-100 text-gray-500 min-w-[800px] mx-15 rounded-md border-separate border-tools-table-outline border-1">
                <thead className="font-normal">
                  <tr className="text-left border-b-2">
                    <th
                      width="30%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Product
                    </th>
                    <th
                      width="20%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Unit price
                    </th>
                    <th
                      width="20%"
                      className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                    >
                      Stock Status
                    </th>
                    {/* <th
                        width="15%"
                        className=" pl-2 text-xs font-medium uppercase text-gray-500 py-2 "
                      >
                        SubTotal
                      </th> */}
                    <th width="20%" className="pl-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((product) => {
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

                        {
                          <td className="pl-2 text-xs">
                            {product.stockStatus > 0 ? (
                              <Chip
                                className="bg-green-chip w-16 font-light capitalize text-primary justify-center"
                                variant="filled"
                                value="In Stock"
                              />
                            ) : (
                              <Chip
                                className="capitalize font-light bg-red-chip text-red-error justify-center w-24"
                                variant="filled"
                                value="Out of Stock"
                              />
                            )}
                          </td>
                        }

                        <td key={product.id} className="pl-2 text-xs">
                          <Button
                            className="text-white bg-primary font-sm  text-xs py-2 px-3 rounded-full text-center"
                            onClick={() => {
                              onProductAdd(product);
                              setIsAdded(true);
                            }}
                          > Add to Cart
                          </Button>
                        </td>
                        <td className="pl-2 text-xs">
                          <Button
                            className="text-gray-600 font-medium text-sm"
                            onClick={() => onProductDelete(product)}
                          >
                            x
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
