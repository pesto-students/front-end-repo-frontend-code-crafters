import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup, createUserDocumentFromAuth ,  signInAuthUserWithEmailAndPassword} from '../../utlis/firebase/firebase.utils';



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const resetFormFields = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
    
  };
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      
      // Generating a unique userId (example: timestamp-based)
      const userId = 'user_' + Date.now(); // You can use your own method to generate unique IDs
      
      // Sending user data along with userId to the backend
      const userData = {
        userId,
        displayName: user.displayName,
        email: user.email,
        // Add other necessary fields if required by your backend
      };
  
      // Store the token in localStorage
      const token = user.token; // Replace this with your token retrieval method
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);
  
      // Send user data including userId to the backend
      const backendResponse = await fetch('http://localhost:9001/api/storeGoogleUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (backendResponse.ok) {
        console.log('User data sent to backend');
        // Perform any other necessary actions upon successful storage
        window.location.href = 'http://localhost:5173';
      } else {
        console.error('Failed to send user data to backend');
        // Handle error case
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle error case
    }
  };
  
  
    /*const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
  
      // Send user data to your backend
      const user = {
        displayName: response.displayName,
        email: response.email,
        // Add other necessary fields if required by your backend
      };
  
      const backendResponse = await fetch('http://localhost:9001/api/storeGoogleUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (backendResponse.ok) {
        console.log('User data sent to backend');
        // Perform any other necessary actions upon successful storage
      } else {
        console.error('Failed to send user data to backend');
        // Handle error case
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle error case
    }
  };*/

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        
        localStorage.setItem('token', data.token); // Store the token in localStorage or cookies
        console.log('Login successful'); 
        resetFormFields();
        window.location.href = 'http://localhost:5173';
        // Log success
        // Perform actions upon successful login
        
        

      } else {
        console.error('Login failed:', response.statusText); // Log error
        // Handle login errors
      }
    } catch (error) {
      console.error('Login failed:', error); // Log error
    }
  };
/*
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        // Handle successful sign-up
      } else {
        // Handle sign-up errors
      }
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
  };
  /*
  const handleGoogleLogin = async () => {
    try {
      // Redirect user to Google authentication page
      window.location.href = 'http://localhost:9001/api/auth/google'; // Example route for Google OAuth
    } catch (error) {
      console.error('Login with Google failed:', error);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      createUserDocumentFromAuth(user);
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };*/

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-72 border border-gray-300 rounded-lg p-4 shadow-md">
        <h2  style={{ color: 'black' }} >Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block"></label>
         <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter email"
            style={{ color: 'black' }} // Add inline style to set text color to black
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter password"
            style={{ color: 'black' }} // Add inline style to set text color to black
          />
        </div>
        <div className="flex justify-between items-center mb-4">
        <label className="text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-1"
            />
            Remember me
          </label>
          <a href="#forgotpassword" className="text-gray-600">Forgot password?</a>
        
        </div>
        <button
          onClick={handleLogin}
          className="w-full py-2 bg-green-500 text-white rounded-full cursor-pointer mb-2"
          type="submit"
        >
          Login
        </button>
       
        <button
          onClick={logGoogleUser}
          className="w-full py-2 bg-green-500 text-white rounded-full cursor-pointer"
          buttonType='google'
        >
          Login with Google
        </button>
        
        <div className='text-gray-600 text-base'>Don't have a Account <Link to='/login/signup' className="text-teal-900">Register</Link></div>
        
      </form>
      
    </div>
  );
};


export default LoginForm;
