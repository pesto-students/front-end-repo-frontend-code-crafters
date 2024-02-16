import React, { useEffect, useState } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import Product from "../components/Product";
import { CategoryFilter } from "../components/shop/filters/Category";
import { PriceFilter } from "../components/shop/filters/Price";
import { RatingFilter } from "../components/shop/filters/Rating";
import { SortByFilter } from "../components/shop/filters/Sort";
import { OutOfStockFilter } from "../components/shop/filters/OutOfStock";

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
import { useSelector } from "react-redux";

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

  const masterProductList = useSelector((state) => state.products.products);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  useEffect(() => {
    setProducts([...masterProductList]);
    console.log(masterProductList);
  }, [masterProductList]);
  
  useEffect(() => {
    let filteredProducts = masterProductList.filter(
      (product) =>
      product.category === selectedCategory || selectedCategory === ""
      );
      if (!selectedCategory) {
        filteredProducts = masterProductList;
      }
      setProducts([...filteredProducts]);
    }, [selectedCategory]);
    
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
    console.log(products);
    
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
        {products?.map((product) => {
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
