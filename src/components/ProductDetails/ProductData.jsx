
import React, { useState, useEffect } from "react";
import Star from '../assets/Star.svg';
import GStar from '../assets/Star 5.svg';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductData = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Get the ID parameter from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:9001/api/products/${id}`); // Fetch data for the specific product ID
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]); // Fetch data whenever ID changes

  return ( <div>
    {product ? (
<div>
<div className="flex-col justify-start items-start gap-5 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-900 text-4xl font-semibold font-['Poppins'] leading-[43.20px]">
                {product.name}
              </div>
              <div className="px-2 py-1 bg-green-600 bg-opacity-20 rounded justify-center items-center gap-2.5 flex">
                <div className="text-green-800 text-sm font-normal font-['Poppins'] leading-[21px]">
                  {product.instock}
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-3 inline-flex">
              <div className="justify-start items-center flex">
                <div className="w-[18px] h-[18px] relative" />
                <div className="w-[18px] h-[18px] relative" />
                <div className="w-[18px] h-[18px] relative" />
                <div className="w-[18px] h-[18px] relative" />
                <div className="w-[18px] h-[18px] relative" />
                <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px] flex">
                {Array(5)
                    .fill()
                    .map((_, i) => (
                      <img
                        className="rating-child12 w-6 h-6"
                        alt=""
                        src={i < product.star ? Star : GStar}
                        key={i}
                      />
                    ))}
                  {product.star} Review
                </div>
              </div>
              <div className="text-zinc-400 text-sm font-medium font-['Poppins'] leading-[21px]">
                •
              </div>
              <div className="justify-start items-start gap-1 flex">
                <div className="text-zinc-800 text-sm font-medium font-['Poppins'] leading-[21px]">
                  SKU:
                </div>
                <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                  2,51,594
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-center gap-3 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <div className="text-zinc-400 text-xl font-normal font-['Poppins'] line-through leading-[30px]">
                {product.div}
              </div>
              <div className="text-green-800 text-2xl font-medium font-['Poppins'] leading-9">
                {product.price}
              </div>
            </div>
            <div className="px-2.5 py-[3px] bg-red-500 bg-opacity-10 rounded-[30px] justify-start items-start gap-1.5 flex">
              <div className="text-red-500 text-sm font-medium font-['Poppins'] leading-[21px]">
                {product.offpercent}
              </div>
            </div>
          </div>
          <div className="w-[647px] h-[0px] border border-neutral-200"></div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[568px] text-zinc-500 text-sm font-normal font-['Poppins'] leading-[21px]">
            {product.description}
          </div>
        </div>
        <div className="py-[18px] bg-white shadow border border-white justify-center items-center gap-3 inline-flex">
          <div className="p-2 bg-white rounded-[170px] border border-neutral-200 justify-center items-center flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-zinc-100 rounded-[170px]" />

              <img
                className="w-3.5 h-3.5 left-[10px] top-[10px] absolute"
                alt=""
                src="/plus-1@2x.png"
              />
            </div>
            <div className="w-10 text-center text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
              5
            </div>
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-zinc-100 rounded-[170px]" />
              <img
                className="w-3.5 h-3.5 left-[10px] top-[10px] absolute"
                alt=""
                src="/minus@2x.png"
              />
            </div>
          </div>

          <div className="p-4 bg-green-600 bg-opacity-10 rounded-[43px] justify-start items-start gap-2.5 flex">
            <img className="w-5 h-5 relative" alt="" src="/heart@2x.png" />
          </div>
</div>
</div>) : (
        <p>Loading...</p>
      )}
    </div>
);
};

export default ProductData;