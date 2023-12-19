// src/Navbar2.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Icon from '../assets/icon-0.svg';
import searchIcon from '../assets/Search.svg';
import Bag from '../assets/Bag.svg';
import Heart from '../assets/Heart.svg';
import { useState } from 'react';
import { useSelector } from 'react-redux'; // Import the useSelector hook

const Navbar2 = () => {
  // Use the useSelector hook to access the auth state from the Redux store
  

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className='navbar flex justify-between items-center px-4 shadow-md bg-white'>
        <div className='flex items-center gap-8'>
          <img src={Icon} alt='Icon' />
          <p className='text-green-900 text-2xl font-semibold'>Harvestly</p>
        </div>
        <form className='search-container flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleInputChange}
            className='bg-no-repeat bg-left border border-gray-300 rounded-md py-2 px-10 w-72 focus:outline-none focus:ring focus:border-blue-300'
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundSize: '20px',
            }}
          />
          <button className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'>
            Search
          </button>
        </form>
        <div className='flex items-center gap-8'>
        <img src={Heart} alt='Heart' />
        <p className='text-green-900 text-2xl font-semibold'> | </p>
        <img src={Bag} alt='Bag' />
        </div>
      </div>
      <Outlet/>
    </div>
    
    
  );
};

export default Navbar2;
