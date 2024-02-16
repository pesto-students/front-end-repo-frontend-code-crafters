import React from "react";
import Product from "../components/Product";
import useFetch from "../utils/useFetch";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Chip,
  Carousel,
  IconButton,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProduct,
  subtractProduct,
  removeProduct,
} from "../app/reducers/cartSlice.js";

import Button from "../components/Button";
import WishlistButton from "../components/WishlistButton.jsx";

import apple from "../assets/products/apple.png";
import cauliflower from "../assets/products/cauliflower.png";
import chinese_cabbage from "../assets/products/chinese_cabbage.png";
import corn from "../assets/products/corn.png";
import cucumber from "../assets/products/cucumber.png";
import eggplant from "../assets/products/eggplant.png";
import green_capsicum from "../assets/products/green_capsicum.png";
import green_chilly from "../assets/products/green_chilly.png";
import lettuce from "../assets/products/lettuce.png";
import mango from "../assets/products/mango.png";
import okra from "../assets/products/okra.png";
import potato from "../assets/products/potato.png";
import red_capsicum from "../assets/products/red_capsicum.png";
import red_chilly from "../assets/products/red_chilly.png";
import tomato from "../assets/products/tomato.png";

const data = [
  {
    label: "Description",
    value: "Description",
    desc: `Store in a cool and dry place, away from sunlight. Refrigerate perishable items, keep dry goods in cool, dry places, and ensure proper packaging to prevent spoilage and maintain flavor`,
  },
  {
    label: "Customer Feedback",
    value: "Customer Feedback",
    desc: `Proper storage of grocery items is crucial for maintaining freshness and maximizing shelf life. By following these storage guidelines, you can enjoy your grocery items at their best for longer periods, reducing waste and ensuring a satisfying culinary experience.`,
  },
];

function ProductDetail(props) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const onProductAdd = (details) => {
    dispatch(addProduct(details));
  };
  const onProductSubtract = (details) => {
    dispatch(subtractProduct(details));
  };
  const onProductDelete = (details) => {
    dispatch(removeProduct(details));
  };

  const { id } = useParams();

  const products = [
    {
      description: "200g cheese block",
      id: 1,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
      name: "Cheese",
      price: 50,
      stockStatus: 256,
      price_id: "price_1HuavSGuhXEITAut56IgndJf",
      isWishlist: false,
      category: "dairy",
      discount: 0,
    },
    {
      description: "200ml milk bottle",
      id: 2,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
      name: "Milk",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxVriGuhXEITAutt5KUKo2V",
      isWishlist: false,
      category: "dairy",
      discount: 0,
    },
    {
      description: "1kg tomato",
      id: 3,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
      name: "Tomato",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxW4YGuhXEITAutgcWugXH7",
      isWishlist: false,
      category: "vegetables",
      discount: 10,
    },
    {
      description: "500g pineapple",
      id: 4,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
      name: "Pineapple",
      price: 40,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
      isWishlist: false,
      category: "fruits",
      discount: 0,
    },
    {
      description: "250g cauliflower",
      id: 5,
      image: cauliflower,
      name: "Cauliflower",
      price: 21,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJc",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "500g chinese cabbage",
      id: 6,
      image: chinese_cabbage,
      name: "Chinese Cabbage",
      price: 30,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJcc",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "200g sweet corn",
      id: 7,
      image: corn,
      name: "Sweet Corn",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJsc",
      isWishlist: false,
      category: "vegetables",
      discount: 15,
    },
    {
      description: "1 piece green cucumber",
      id: 8,
      image: cucumber,
      name: "Green Cucumber",
      price: 40,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJgc",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "250g eggplant",
      id: 9,
      image: eggplant,
      name: "Eggplant",
      price: 35,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJegg",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "250g green capsicum",
      id: 10,
      image: green_capsicum,
      name: "Green Capsicum",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJcap",
      isWishlist: false,
      category: "vegetables",
      discount: 30,
    },
    ,
    {
      description: "250g green chilly",
      id: 11,
      image: green_chilly,
      name: "Green Chilly",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJgchilly",
      isWishlist: false,
      category: "vegetables",
      discount: 5,
    },
    {
      description: "250g lettuce",
      id: 12,
      image: lettuce,
      name: "Lettuce",
      price: 75,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJlett",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "1kg red mango",
      id: 13,
      image: mango,
      name: "Red Mango",
      price: 250,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJmango",
      isWishlist: false,
      category: "fruits",
      discount: 20,
    },
    {
      description: "500g Ladies Finger",
      id: 14,
      image: okra,
      name: "Ladies Finger (Okra)",
      price: 45,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJokra",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "1kg potato",
      id: 15,
      image: potato,
      name: "Potato",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJpotato",
      isWishlist: false,
      category: "vegetables",
      discount: 10,
    },
    {
      description: "250g red capsicum",
      id: 16,
      image: green_capsicum,
      name: "Green Capsicum",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
      isWishlist: false,
      category: "vegetables",
      discount: 30,
    },
    {
      description: "250g green capsicum",
      id: 17,
      image: red_capsicum,
      name: "Red Capsicum",
      price: 70,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJredcap",
      isWishlist: false,
      category: "vegetables",
      discount: 15,
    },
    {
      description: "250g Kashmiri red chilly",
      id: 18,
      image: red_chilly,
      name: "Kashmiri Red Chilly",
      price: 80,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJkash",
      isWishlist: false,
      category: "vegetables",
      discount: 0,
    },
    {
      description: "250g green apple",
      id: 19,
      image: apple,
      name: "Green Apple",
      price: 100,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJkash",
      isWishlist: false,
      category: "fruits",
      discount: 10,
    },
  ];

  const product = products.filter((val) => val.id == id);
  const [activeTab, setActiveTab] = React.useState("Description");
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-start mt-5">
          <Carousel
            className="rounded-lg border border-gray-300 !flex !items-center !justify-center"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-3/4 left-2 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-3/4 !right-2 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-3 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-primary" : "w-4 bg-gray-500"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img src={product[0]?.image} alt="fruit" />
          </Carousel>
          <div className="flex flex-col items-start ml-5 h-full">
            <div className="flex items-center mb-2">
              <h2 className="text-black font-semibold text-3xl mr-2">
                {product[0]?.name}
              </h2>
              <Chip
                className="bg-green-chip w-16 font-light capitalize text-primary justify-center"
                variant="filled"
                value="In Stock"
              />
            </div>
            <div className="flex items-center justify-start">
              <svg
                className="w-6 h-5 text-yellow-800 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="text-md font-bold text-gray-900">4.9</p>
            </div>
            <div className="flex my-1">
              {product[0].discount > 0 && (
                <span className="text-lg text-gray-400 line-through mr-1">
                  ₹{product[0]?.price}
                </span>
              )}
              <h3 className="text-lg font-medium text-primary mr-2">
                ₹{(product[0]?.price * (100 - product[0]?.discount)) / 100}
              </h3>
              {product[0].discount > 0 && (
                <Chip
                  className="capitalize font-light bg-red-chip text-red-error justify-center w-16 rounded-full"
                  variant="filled"
                  value={`${product[0].discount} % off`}
                />
              )}
            </div>
            {/* <hr className=" w-full bg-gray-100 border"></hr> */}
            <p className="text-xs text-gray-500 max-w-[300px]">
              {product[0]?.description}
            </p>
            <div className="flex border-t-2 border-b-2 border-gray-100 mt-2 py-2">
              <div className="flex items-center border border-gray-300 p-1 rounded-full w-30 text-black">
                <Button
                  className="flex items-center flex-grow justify-center rounded-full h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                  onClick={() => onProductSubtract(product[0])}
                >
                  -
                </Button>
                <p className="px-3 text-sm">{cart[0]?.quantity || 0}</p>
                <Button
                  className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                  onClick={() => onProductAdd(product[0])}
                >
                  +
                </Button>
              </div>

              <WishlistButton className="ml-5" />
            </div>
          </div>
        </div>

        <div className="px-10 my-10">
          <Tabs value={activeTab}>
            <TabsHeader
              className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-primary shadow-none rounded-none",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value ? "text-gray-900" : "text-gray-500"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {activeTab === "Description" &&
                data.map(({ value, desc }) => (
                  <div
                    key={value}
                    className="flex justify-center max-w-3xl border-b border-gray-200"
                  >
                    <span className="text-black text-sm my-2">{desc}</span>
                  </div>
                ))}
              {activeTab === "Customer Feedback" && (
                // data.map(({ value, desc }) => (
                //   <TabPanel key={value} value={value}>
                <div className="grid grid-cols-3 !min-w-4xl border-b border-gray-200">
                  <p className="col-span-3 text-sm pt-2 text-gray-900 font-small">
                    Kieron James
                  </p>
                  <div className="col-span-2 pt-1 flex items-center justify-start">
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
                  </div>
                  <span className="text-xs font-small text-right text-gray-700">
                    {"12/01/2024"}
                  </span>
                  <p className="text-xs pt-2 pb-2 font-small text-gray-700">
                    Duis at ullamcorper nulla, eu dictum eros.
                  </p>
                </div>
              )}
            </TabsBody>
          </Tabs>
        </div>
        {!(activeTab === "Customer Feedback") && (
          <div>
            <section className="flex flex-col justify-start px-5 mb-5">
              <div className="flex items-center justify-between">
                <h2 className="text-black font-semibold text-3xl">
                  Related Products
                </h2>
              </div>
              <div className="flex justify-between items-center">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetail;
