import React, { useState } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import Product from "../components/Product";
import { CategoryFilter } from "../components/shop/filters/Category";
import { PriceFilter } from "../components/shop/filters/Price";
import { RatingFilter } from "../components/shop/filters/Rating";
import { SortByFilter } from "../components/shop/filters/Sort";
import { OutOfStockFilter } from "../components/shop/filters/OutOfStock";

export default function Shop() {
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "green",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  // Sample API to test Redux
  const products = [
    {
      description: "200g cheese block",
      id: 1,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
      name: "Cheese",
      price: 10,
      stockStatus: 1,
      price_id: "price_1HuavSGuhXEITAut56IgndJf",
      isWishlist: false,
      category: "dairy",
    },
    {
      description: "200ml milk bottle",
      id: 2,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/milk.png",
      name: "Milk",
      price: 5,
      stockStatus: 1,
      price_id: "price_1HxVriGuhXEITAutt5KUKo2V",
      isWishlist: false,
      category: "dairy",
    },
    {
      description: "1 piece of tomato",
      id: 3,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
      name: "Tomato",
      price: 2.75,
      stockStatus: 1,
      price_id: "price_1HxW4YGuhXEITAutgcWugXH7",
      isWishlist: false,
      category: "vegetables",
    },
    {
      description: "500g pineapple",
      id: 4,
      image:
        "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
      name: "Pineapple",
      price: 3.25,
      stockStatus: 1,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
      isWishlist: false,
      category: "fruits",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  console.log("Category", selectedCategory);
  let filteredProducts = products.filter(
    (product) =>
      product.category === selectedCategory || selectedCategory === ""
  );
  if(!selectedCategory) {
    filteredProducts = products
  }
  return (
    <>
      <div className="flex items-center justify-between m-2">
        <CategoryFilter categoryChangeHandler={handleCategoryChange} />
        <PriceFilter />
        <RatingFilter />
        <SortByFilter />
        <OutOfStockFilter />
      </div>

      <div className="grid grid-cols-4 gap-1 mb-2 mx-1">
        {filteredProducts.map((product) => {
          return <Product key={product.id} details={product}></Product>;
        })}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1, active, setActive)}>1</IconButton>
          <IconButton {...getItemProps(2, active, setActive)}>2</IconButton>
          <IconButton {...getItemProps(3, active, setActive)}>3</IconButton>
          <IconButton {...getItemProps(4, active, setActive)}>4</IconButton>
          <IconButton {...getItemProps(5, active, setActive)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={next}
          disabled={active === 5}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
