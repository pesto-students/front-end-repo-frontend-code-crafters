import React, { useState, useEffect } from "react";
import ProductData from "./ProductData";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductImage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the ID parameter from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://harvestlyy.onrender.com/api/products/${id}`); // Fetch data for the specific product ID
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch data whenever ID changes

  return (<div>
    {product ? (
    <div>
      <div className="w-[648px] h-[556px] left-0 top-[2px] absolute">
        <img
          className="w-[556px] h-[556px] left-[92px] top-0 absolute"
          src={product.img}
        />

        <div className="w-6 h-6 left-[28px] top-[532px] absolute" />
        <div className="w-6 h-6 left-[28px] top-[24px] absolute" />
      </div>
      <div className="left-[672px] top-0 absolute flex-col justify-start items-start gap-6 inline-flex">
         <ProductData/>
        </div>
      </div>) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
};

export default ProductImage;
