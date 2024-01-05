import React, { useState , useEffect} from 'react';
import Icon from '../assets/icon-0.svg';
import searchIcon from '../assets/Search.svg';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productId, setProductId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:9001/api/currentuser');
      if (response.ok) {
        const { loggedInUsers } = await response.json();
        if (loggedInUsers.length > 0) {
          const userId = loggedInUsers[0].userId;
          const logoutResponse = await fetch('http://localhost:9001/api/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
          });
  
          if (logoutResponse.ok) {
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            console.log('Logout successful');
            // Redirect or perform any other actions after logout
          } else {
            console.error('Logout failed');
          }
        } else {
          console.error('No logged-in user found');
        }
      } else {
        console.error('Failed to fetch current user');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  
 // const history = useHistory();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:9001/api/products?search=${searchTerm}`);
      if (response.ok) {
        const products = await response.json();
        if (products.length > 0) {
          const foundProductId = products[0].id; 
          console.log(foundProductId);
          setProductId(foundProductId);//lt is the desired product
         // history.push(`/products/${productId}`); 
          
        } else {
          console.error('Product not found');
        }
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
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
            type='search'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleInputChange}
            className='bg-no-repeat bg-left border border-gray-300 rounded-md py-2 px-10 w-72 focus:outline-none focus:ring focus:border-blue-300'
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundSize: '20px',
              color: 'black' ,
            }}
          />
       <Link to={`/products/${productId}`}>
          <button
            className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'
            onClick={handleSearch}
          >
            Search
          </button>
      </Link>
      
        </div>
        {isLoggedIn ? (
          <button className='bg-red-500 text-white rounded-lg px-4 py-2 ml-4' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to='/login' className='flex items-center gap-8'>
            <button className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'>
              Login / Signup
            </button>
          </Link>
        )}
        
      </div>
    </div>
  );
};

export default Navbar;
