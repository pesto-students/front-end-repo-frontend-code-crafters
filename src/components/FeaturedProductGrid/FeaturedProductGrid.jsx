import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Star from '../assets/Star.svg';
import GStar from '../assets/Star 5.svg';
import Bag from '../assets/plus.svg';
import { Link } from 'react-router-dom';

const FeaturedProductGrid = () => {
  const [vegetablesData, setVegetablesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9001/api/products'); // Assuming your API is running on the same host as your frontend
        setVegetablesData(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-28">
      <div className="featured-products">
        <div className="grid grid-cols-4 gap-6 mt-20  ">
          {vegetablesData.map((vegetable, index) => (
             <Link to={`/products/${vegetable.id}`} key={index}>
             <div className={`product-4x${index + 1} relative hover:scale-105 transform transition duration-300 ease-in-out`} >

           
              <div className="product-image">
                <img className="image-icon26 w-full h-64 object-cover" alt="" src={vegetable.img} />
              </div>
              <div className="product-info14">
                <div className="testimonial-parent">
                  <div className="green-apple5" style={{ color: '#00B207' }}>{vegetable.name}</div>
                  <div className="price8">
                    <div className="address" style={{ color: '#00B207' }}>{vegetable.price}</div>
                  </div>
                </div>
                <div className="rating3 flex">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <img
                        className="rating-child12 w-6 h-6"
                        alt=""
                        src={i < vegetable.star ? Star : GStar}
                        key={i}
                      />
                    ))}
                </div>
              </div>
              <img className="add-to-cart7 absolute right-0 top-65"  alt="" src={Bag} />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductGrid;
