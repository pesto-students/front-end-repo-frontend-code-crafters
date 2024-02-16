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
  const masterProductList = useSelector((state) => state.products.products);

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

  const products = masterProductList;

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

              <WishlistButton
                className="ml-5"
                details={product[0]}
                isWishlist={product[0]?.isWishlist}
              />
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
