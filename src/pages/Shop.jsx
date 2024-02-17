import React, { useEffect, useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Product from "../components/Product";
import { CategoryFilter } from "../components/shop/filters/Category";
import { PriceFilter } from "../components/shop/filters/Price";
import { RatingFilter } from "../components/shop/filters/Rating";
import { SortByFilter } from "../components/shop/filters/Sort";
import { OutOfStockFilter } from "../components/shop/filters/OutOfStock";
import { ClearButton } from "../components/shop/filters/Clear"
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

  const masterProductList = useSelector((state) => state.products.products);
  const [products, setProducts] = useState([]);
  const [clear, setClear] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedPrice, setSelectedPrice] = useState("");
  // const [selectedRating, setSelectedRating] = useState("");
  // const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    setProducts([...masterProductList]);
  }, [masterProductList]);

  useEffect(() => {
    let filteredProducts = masterProductList.filter(
      (product) =>
        (product.category === selectedCategory || selectedCategory === "")
    );
    if (!selectedCategory) {
      filteredProducts = masterProductList;
    }
    setProducts([...filteredProducts]);
  }, [selectedCategory]);

  // useEffect(()=>{
  //   if(selectedCategory || selectedPrice || selectedRating || selectedSort ){
  //     setClear(false);
  //   }
  //   else{
  //     setClear(true)
  //     setSelectedCategory("")
  //   }
  // },[selectedCategory])



  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  // const handlePriceChange = (price) => {
  //   setSelectedPrice(price);
  // };
  // priceValue={selectedPrice} priceChangeHandler={handlePriceChange}
  return (
    <>
      <div className="flex items-center justify-between m-2">
        <CategoryFilter categoryValue={selectedCategory} categoryChangeHandler={handleCategoryChange} />
        <PriceFilter  />
        <RatingFilter />
        <SortByFilter />
        <OutOfStockFilter />
        <ClearButton clearHandler={setClear} clearFlag={clear}/>
      </div>

      <div className="grid grid-cols-4 gap-1 mb-2 mx-1">
        {products?.map((product) => {
          return <Product key={product.id} details={product}></Product>;
        })}
      </div>

      {/* PAGINATION */}
      {/* <div className="flex items-center justify-center gap-2 mb-2">
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
      </div> */}
    </>
  );
}
