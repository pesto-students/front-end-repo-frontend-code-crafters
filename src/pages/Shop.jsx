import React, { useState } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import Product from "../components/Product";
import { CategoryFilter } from "../components/shop/filters/Category";
import { PriceFilter } from "../components/shop/filters/Price";
import { RatingFilter } from "../components/shop/filters/Rating";
import { SortByFilter } from "../components/shop/filters/Sort";
import { OutOfStockFilter } from "../components/shop/filters/OutOfStock";

import apple from "../assets/products/apple.png"
import cauliflower from "../assets/products/cauliflower.png"
import chinese_cabbage from "../assets/products/chinese_cabbage.png"
import corn from "../assets/products/corn.png"
import cucumber from "../assets/products/cucumber.png"
import eggplant from "../assets/products/eggplant.png"
import green_capsicum from "../assets/products/green_capsicum.png"
import green_chilly from "../assets/products/green_chilly.png"
import lettuce from "../assets/products/lettuce.png"
import mango from "../assets/products/mango.png"
import okra from "../assets/products/okra.png"
import potato from "../assets/products/potato.png"
import red_capsicum from "../assets/products/red_capsicum.png"
import red_chilly from "../assets/products/red_chilly.png"
import tomato from "../assets/products/tomato.png"


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
      price: 50,
      stockStatus: 256,
      price_id: "price_1HuavSGuhXEITAut56IgndJf",
      isWishlist: false,
      category: "dairy",
      discount: 0
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
      discount: 0
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
      discount: 10
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
      discount: 0
    },
    {
      description: "250g cauliflower",
      id: 5,
      image:
        cauliflower,
      name: "Cauliflower",
      price: 21,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJc",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    },
    {
      description: "500g chinese cabbage",
      id: 6,
      image:
        chinese_cabbage,
      name: "Chinese Cabbage",
      price: 30,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJcc",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    },
    {
      description: "200g sweet corn",
      id: 7,
      image:
        corn,
      name: "Sweet Corn",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJsc",
      isWishlist: false,
      category: "vegetables",
      discount: 15
    },
    {
      description: "1 piece green cucumber",
      id: 8,
      image:
        cucumber,
      name: "Green Cucumber",
      price: 40,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJgc",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    },
    {
      description: "250g eggplant",
      id: 9,
      image:
        eggplant,
      name: "Eggplant",
      price: 35,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJegg",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    },
    {
      description: "250g green capsicum",
      id: 10,
      image:
        green_capsicum,
      name: "Green Capsicum",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJcap",
      isWishlist: false,
      category: "vegetables",
      discount: 30
    },
    ,
    {
      description: "250g green chilly",
      id: 11,
      image:
        green_chilly,
      name: "Green Chilly",
      price: 20,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJgchilly",
      isWishlist: false,
      category: "vegetables",
      discount: 5
    }
    ,
    {
      description: "250g lettuce",
      id: 12,
      image:
        lettuce,
      name: "Lettuce",
      price: 75,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJlett",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    }
    ,
    {
      description: "1kg red mango",
      id: 13,
      image:
        mango,
      name: "Red Mango",
      price: 250,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJmango",
      isWishlist: false,
      category: "fruits",
      discount: 20
    }
    ,
    {
      description: "500g Ladies Finger",
      id: 14,
      image:
        okra,
      name: "Ladies Finger (Okra)",
      price: 45,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJokra",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    }
    ,
    {
      description: "1kg potato",
      id: 15,
      image:
        potato,
      name: "Potato",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJpotato",
      isWishlist: false,
      category: "vegetables",
      discount: 10
    }
    ,
    {
      description: "250g red capsicum",
      id: 16,
      image:
        green_capsicum,
      name: "Green Capsicum",
      price: 60,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
      isWishlist: false,
      category: "vegetables",
      discount: 30
    }
    ,
    {
      description: "250g green capsicum",
      id: 17,
      image:
        red_capsicum,
      name: "Red Capsicum",
      price: 70,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJredcap",
      isWishlist: false,
      category: "vegetables",
      discount: 15
    }
    ,
    {
      description: "250g Kashmiri red chilly",
      id: 18,
      image:
        red_chilly,
      name: "Kashmiri Red Chilly",
      price: 80,
      stockStatus: 256,
      price_id: "price_1HxW59GuhXEITAutCwoYZoOJkash",
      isWishlist: false,
      category: "vegetables",
      discount: 0
    }
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
