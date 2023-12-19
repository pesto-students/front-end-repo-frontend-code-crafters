import React, { useState } from 'react';
import Icon from '../assets/icon-0.svg';
import searchIcon from '../assets/Search.svg';
import Bag from '../assets/Bag.svg';
import Heart from '../assets/Heart.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Handle search functionality here using the searchTerm state
    console.log('Search Term:', searchTerm);
  };

  return (
    <div>
      <div className='navbar flex justify-between items-center px-4 shadow-md bg-white'>
        <Link to= '/' className='flex items-center gap-8'>
          <img src={Icon} alt='Icon' />
          <p className='text-green-900 text-2xl font-semibold'>Harvestly</p>
        </Link>
        <div className='search-container flex items-center'>
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
          <button
            className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <Link to= '/login' className='flex items-center gap-8'>
          <button  className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'>
            Login / Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;