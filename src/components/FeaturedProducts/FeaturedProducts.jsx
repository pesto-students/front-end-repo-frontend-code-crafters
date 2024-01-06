import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Star from '../assets/Star.svg';
import GStar from '../assets/Star 5.svg';
import GreenArrow from '../assets/GreenArrow.svg';
import Bag from '../assets/plus.svg';
import { Link } from 'react-router-dom';



const FeaturedProducts = () => {
  // Create a state variable to store the API data
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  
const [vegetablesData, setVegetablesData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://harvestlyy.onrender.com/api/products');
      setVegetablesData(response.data.slice(0, 4));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();

  const token = localStorage.getItem('token');
  if (token) {
    setIsLoggedIn(true);
    fetchCurrentUser();
  }
}, []);
 
 const fetchCurrentUser = async () => {
  try {
    const response = await axios.get('https://harvestlyy.onrender.com/api/currentuser');
    if (response.data.loggedInUsers.length > 0) {
      const fetchedUserId = response.data.loggedInUsers[0].userId;
      setUserId(fetchedUserId); // Set the userId in state
    }
  } catch (error) {
    console.error('Error fetching current user:', error);
  }
};
// Assuming 'message' is a state to handle success or error messages
const [message, setMessage] = useState('');

const addToCart = async (id) => {
  try {
    const response = await axios.post('https://harvestlyy.onrender.com/api/cart/add', {
      productId: id,
      quantity: 1,
      userId: userId, // Use the userId from state directly
    });

    console.log(response.data); // Handle the response as needed
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};

const handleQuantityChange = (id, change) => {
  // Find the product in the data by ID
  const updatedData = vegetablesData.map((vegetable) => {
    if (vegetable._id === id) {
      // Change the quantity based on the operation (increase or decrease)
      vegetable.quantity = vegetable.quantity + change >= 0 ? vegetable.quantity + change : 0;
    }
    return vegetable;
  });
  setVegetablesData(updatedData);
  // Update the cart with the new quantity
  addToCart(id, updatedData.find((item) => item._id === id).quantity);
};

// Rest of your code remains the same

const handleProductHover = (index) => {
  setHoveredProduct(index); // Set the hovered product index
};

const handleProductLeave = () => {
  setHoveredProduct(null); // Reset hovered product when leaving
};
  return (
    <div className="mt-28">
      <div className="featured-products">
        <div className="heading8">
          <div className="normal text-2xl font-semibold font-poppins" style={{ color: '#1A1A1A' }}>
            Featured Products
          </div>
          <Link to="/shop">
          <div className="button4 flex items-center">
            <div className="address absolute right-5" style={{ color: '#00B207' }}>
              View All
            </div>
            <img className="arrow-icon absolute right-0" alt="" src={GreenArrow} />
          </div>
          </Link>

        </div>
        
        <div className="grid grid-cols-4 gap-6 mt-20">
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
                        src={i < 4 ? Star : GStar}
                        key={i}
                      />
                    ))}
                </div>
              </div>
              {isLoggedIn ? (
    <img className="add-to-cart7 absolute right-0" alt="" src={Bag} onClick={() => addToCart(vegetable.id)} />
  ) : (
    <div onClick={() => alert('Please log in to add to cart')}>
      {/* Placeholder for non-logged in user, could be a button or a different UI */}
      {/* You can customize this to suit your design */}
      <img className="add-to-cart7 absolute right-0" alt="" src={Bag}  />
    </div>
  )}
            </div>
            
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

