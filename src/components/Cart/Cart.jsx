import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Close from '../assets/Close.svg';

let userId = null;
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let userId = null;

    const fetchCartItems = async () => {
      try {
        // Fetch logged-in user's data
        const response = await axios.get('http://localhost:9001/api/currentuser');
        const loggedInUsers = response.data.loggedInUsers;
        
        if (loggedInUsers.length > 0) {
          userId = loggedInUsers[0].userId;
          
          // Fetch cart items based on the user ID
          const Productresponse = await axios.get(`http://localhost:9001/api/app/cart/${userId}`);
          const items = Productresponse.data;
          console.log('Items before mapping:', items);

          // Fetch details for each item in the cart
          const updatedCartItems = await Promise.all(items.map(async (item) => {
            console.log('Fetching product details for productId:', item.productId);
            const productData = await fetchProductDetails(item.productId);
            const itemWithQuantity = { ...item, productData, quantity: item.quantity }; // Include quantity in the item object
            return itemWithQuantity;
          }));

          console.log('Updated cart items:', updatedCartItems); // Log the updated cart items

          setCartItems(updatedCartItems);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const fetchProductDetails = async (productId) => {
    try {
      console.log(`Fetching product details for productId: ${productId}`);
      const response = await axios.get(`http://localhost:9001/api/products/${productId}`);
      console.log('Product details:', response.data); // Log the fetched product details
      return response.data; // Assuming this contains product details
    } catch (error) {
      console.error('Error fetching product details:', error);
      return null;
    }
  };
  const removeFromCart = async (productId) => {
    try {
      // Send a DELETE request to remove the product from the cart based on productId and userId
      await axios.delete(`http://localhost:9001/api/app/cart/${userId}/${productId}/remove`);
      // After successful removal, update the cartItems state to reflect the changes
      const updatedItems = cartItems.filter(item => item.productId !== productId);
      setCartItems(updatedItems);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  return (
    <div>
      <div className="text-center text-zinc-900 text-[32px] font-semibold font-['Poppins'] leading-[38.40px]">
        Shopping Cart
      </div>
      <div className="w-[1320px] relative rounded-lg border border-neutral-200">
        {cartItems.map((item, index) => (
          <div key={index} className="border-b border-neutral-200 py-4 px-6">
            <div className="flex items-center">
              <img className="w-[100px] h-[100px]" src={item.productData.img} alt="Product" />
              <div className="ml-4">
                <div className="text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">{item.productData.name}</div>
                <div className="text-zinc-900 text-base font-medium font-['Poppins'] leading-normal"> ₹ {parseFloat(item.productData.price.replace(/[^\d.]/g, '')) * item.quantity}</div>
                <div className="text-neutral-400 text-base font-normal font-['Poppins'] line-through leading-normal"> ₹ {parseFloat(item.productData.div.replace(/[^\d.]/g, '')) * item.quantity}</div>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="px-8 py-3.5 bg-green-600 rounded-[43px] text-white text-sm font-semibold font-['Poppins'] leading-[16.80px]">Proceed to Checkout</button>
              <img  onClick={() => removeFromCart(item.productId)} className="w-6 h-6 ml-4 relative" src={Close} alt="Close Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );};
  export default Cart;
  
/*
  return (
    <div>
      <div className="text-center text-zinc-900 text-[32px] font-semibold font-['Poppins'] leading-[38.40px]">
        Shopping Cart
      </div>
      <div className="w-[1320px] h-[506px] relative rounded-lg border border-neutral-200">
        {cartItems.map((item, index) => (
          <div key={index} className="w-[1272px] h-[100px] left-[24px] top-[182px] absolute">
            <div className="left-0 top-[-0.50px] absolute justify-start items-center gap-5 inline-flex">
              <img className="w-[100px] h-[100px]" src={item.productData.image} alt={item.productData.name} />
              <div className="text-zinc-900 text-base font-normal font-['Poppins'] leading-normal">
                {item.productData.name}
              </div>
            </div>
  
          
          </div>
        ))}
      </div>
    </div>
  );
  }*/

    