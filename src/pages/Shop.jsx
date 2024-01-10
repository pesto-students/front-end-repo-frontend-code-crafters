import React, { useState } from "react";

import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import Product from "../components/Product";
import { CategoryFilter } from "../components/shop/filters/Category";
import { PriceFilter } from "../components/shop/filters/Price";
import { RatingFilter } from "../components/shop/filters/Rating";
import { SortByFilter } from "../components/shop/filters/Sort";
import { OutOfStockFilter } from "../components/shop/filters/OutOfStock";

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

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

  return (
    <>
      <div className="flex items-center justify-between m-2">
        <CategoryFilter />
        <PriceFilter />
        <RatingFilter />
        <SortByFilter />
        <OutOfStockFilter />
      </div>
      <div className="grid grid-cols-4 gap-1 mb-2 mx-1">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2">
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
