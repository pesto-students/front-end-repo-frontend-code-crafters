import { Link } from "react-router-dom";
import { Chip } from "@material-tailwind/react";
import apple from "../assets/products/apple.png";
import Button from "../components/Button";

const cart = [
  {
    description: "200g cheese block",
    id: 1,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
    name: "Cheese",
    price: 10,
    price_id: "price_1HuavSGuhXEITAut56IgndJf",
    stockStatus: 1,
  },
  {
    description: "1 piece of tomato",
    id: 3,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
    name: "Tomato",
    price: 2.75,
    price_id: "price_1HxW4YGuhXEITAutgcWugXH7",
    stockStatus: 1,
  },
  {
    description: "500g pineapple",
    id: 4,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
    name: "Pineapple",
    price: 3.25,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
    stockStatus: 1,
  },
  {
    description: "200ml milk bottle",
    id: 2,
    image: apple,
    name: "Apple",
    price: 5,
    price_id: "price_1HxVriGuhXEITAutt5KUKo2V",
    stockStatus: 0,
  },
];

const totalPrice = cart.reduce((total, product) => {
  total + product.price * product.quantity, 0;
});

export default function Wishlist() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-black font-medium text-2xl my-5">My Wishlist</h1>
        {/* {cart.length === 0 && (
            <p className="text-black">
              You have not added any product to your cart yet
            </p>
          )} */}
        {/* WISHLIST */}
        {cart.length > 0 && (
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
                  {cart.map((product) => {
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

                        <td className="pl-2 text-xs">
                          <Button className="text-white font-sm bg-primary text-xs py-2 px-3 rounded-full text-center">
                            Add to Cart
                          </Button>
                        </td>
                        <td className="pl-2 text-xs">
                          <Button className="text-gray-600 font-medium text-sm">
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
