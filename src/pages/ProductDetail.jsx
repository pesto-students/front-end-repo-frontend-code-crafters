import React from "react";
import apple from "../assets/products/apple.png";
import Product from "../components/Product";
import { Link } from "react-router-dom";
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

import Button from "../components/Button";

const data = [
  {
    label: "Description",
    value: "Description",
    desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Customer Feedback",
    value: "Customer Feedback",
    desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];

function ProductDetail() {
  const [activeTab, setActiveTab] = React.useState("Description");
  console.log(activeTab);
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-start mt-5">
          <Carousel
            className="!w-72 !h-72 rounded-lg border border-gray-300"
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
            {/* <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className=""
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className=""
          /> */}
            <img src={apple} alt="fruit" className="" />
            <img src={apple} alt="fruit" />
          </Carousel>
          <div className="flex flex-col items-start ml-5 h-full">
            <div className="flex items-center mb-2">
              <h2 className="text-black font-semibold text-3xl mr-2">
                Product Name
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
              {/* <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
              <a
                          href="#"
                          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                        >
                          73 reviews
                        </a> */}
            </div>
            <div className="flex my-1">
              <span className="text-lg text-gray-400 line-through mr-1">
                ₹29.99
              </span>
              <h3 className="text-lg font-medium text-primary mr-2">₹24.99</h3>
              <Chip
                className="capitalize font-light bg-red-chip text-red-error justify-center w-16 rounded-full"
                variant="filled"
                value={`${64} % off`}
              />
            </div>
            {/* <hr className=" w-full bg-gray-100 border"></hr> */}
            <p className="text-xs text-gray-500 max-w-[300px]">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum. Nulla varius magna a consequat
              pulvinar.
            </p>
            <div className="flex border-t-2 border-b-2 border-gray-100 mt-2 py-2">
              <div className="flex items-center border border-gray-300 p-1 rounded-full w-30 text-black">
                <Button
                  className="flex items-center flex-grow justify-center rounded-full h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                  // onClick={subtractQuantity}
                >
                  -
                </Button>
                <p className="px-3 text-sm">1</p>
                <Button
                  className="flex items-center flex-grow justify-center rounded-full outline-offset-2 h-10 w-10 text-xl bg-gray-100 hover:bg-gray-300"
                  // onClick={addQuantity}
                >
                  +
                </Button>
              </div>
              <button
                className="ml-5"
                onClick={() => {
                  alert("Added product to fav");
                }}
              >
                <svg
                  width="53"
                  height="52"
                  viewBox="0 0 53 52"
                  className="hover:fill-primary"
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
                  // <TabPanel key={value} value={value}>
                  //   {desc}
                  // </TabPanel>
                  <div key={value} className="flex justify-center max-w-3xl border-b border-gray-200">
                    <span className="text-black text-sm my-2">{desc}</span>
                  </div>
                ))}
              {
                activeTab === "Customer Feedback" && (
                  // data.map(({ value, desc }) => (
                  //   <TabPanel key={value} value={value}>
                  <div className="grid grid-cols-3 !min-w-4xl border-b border-gray-200">
                    <p className="col-span-3 text-sm pt-2 text-gray-900 font-small">
                      Customer Name
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
                )
                //   </TabPanel>
                // )
                // )
              }
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
