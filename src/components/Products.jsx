import { useState, useEffect } from "react";
import Product from "./Product.js";
import useFetch from "..utils/useFetch.js";
import Loader from "./Loader.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { get, loading } = useFetch("base_url");

  useEffect(() => {
    get("url")
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.log("Could not load products", error));
  }, []);

  return (
    <div className="">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="">
        {loading && <Loader />}
        {products.map((product) => {
          return <Product key={product.id} details={product}></Product>;
        })}
      </div>
    </div>
  );
}
