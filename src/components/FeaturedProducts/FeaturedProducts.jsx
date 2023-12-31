import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Star from '../assets/Star.svg';
import GStar from '../assets/Star 5.svg';
import GreenArrow from '../assets/GreenArrow.svg';
import Bag from '../assets/Bag.svg';



const FeaturedProducts = () => {
  // Create a state variable to store the API data
 /*
  const [vegetablesData, setData] = useState([]);

  // Fetch the data from the API using Axios
  const fetchAPI = async () => {
    try {
      const response = await axios.get('/api/vegetables');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Use the useEffect hook to fetch the data when the component mounts
  useEffect(() => {
    fetchAPI();
  }, []);
*/
const vegetablesData = [
  {
    class: 'product-4x',
    img: '/image26@2x.png',
    name: 'Green Apple',
    price: '₹14.99',
    star:4
  },
  {
    class: 'product-4x1',
    img: '/image27@2x.png',
    name: 'Chanise Cabbage',
    price: '₹14.99',
    star:4
  },
  {
    class: 'product-4x2',
    img: '/image28@2x.png',
    name: 'Green Capsicum',
    price: '₹14.99',
    star:4
  },
  {
    class: 'product-4x3',
    img: '/image3@2x.png',
    name: 'Green Littuce',
    price: '₹14.99',
    star:4
  },
];

const handleProductHover = (index) => {
  setHoveredProduct(index); // Set the hovered product index
};

const handleProductLeave = () => {
  setHoveredProduct(null); // Reset hovered product when leaving
};
  return (
    <div className="mt-30">
      <div className="featured-products">
        <div className="heading8">
          <div className="normal text-2xl font-semibold font-poppins" style={{ color: '#1A1A1A' }}>
            Featured Products
          </div>
          <div className="button4 flex items-center">
            <div className="address absolute right-5" style={{ color: '#00B207' }}>
              View All
            </div>
            <img className="arrow-icon absolute right-0" alt="" src={GreenArrow} />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {vegetablesData.map((vegetable, index) => (
            <div className={`product-4x${index + 1} relative hover:scale-105 transform transition duration-300 ease-in-out`} key={index}  >
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
                        src={i < 4 ? Star : GStar}
                        key={i}
                      />
                    ))}
                </div>
              </div>
              <img className="add-to-cart7 absolute right-0" alt="" src={Bag} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;