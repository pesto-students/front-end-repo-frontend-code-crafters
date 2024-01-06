import React, { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../utlis/firebase/firebase.utils';



const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [confirmPassword , setConfirmPassword] = useState('');
  
  
  const resetFormFields = () => {
    setEmail('');
    setPassword('');
    setRememberMe(false);
    setConfirmPassword('');
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
/*
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      //await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
*/
function generateUserId() {
  return 'user_' + Date.now(); // Creating a user ID based on timestamp
}

const handleSignUp = async (e) => {
  e.preventDefault();
  const userId = generateUserId(); // Generate or fetch the user ID (you may use a function or library to generate unique IDs)
  try {
    const response = await fetch('https://harvestlyy.onrender.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, userId }), // Include userId in the signup request body
    });

    if (response.ok) {
      // Handle successful sign-up
      localStorage.setItem('userId', userId);
      window.location.href = 'http://localhost:5173/login';
    } else {
      // Handle sign-up errors
    }
  } catch (error) {
    console.error('Sign-up failed:', error);
  }
};

  

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-72 border border-gray-300 rounded-lg p-4 shadow-md">
        <h2  style={{ color: 'black' }} >Sign Up</h2>
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
            style={{ color: 'black' }} 
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
            style={{ color: 'black' }} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Confirm password"
            style={{ color: 'black' }} 
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
            Accept Terms and Conditions
          </label>
          
        
        </div>
        
        <button
          onClick={handleSignUp}
          className="w-full py-2 bg-green-500 text-white rounded-full cursor-pointer mb-2"
          type="submit"
        >
          Sign Up
        </button>
       
      </form>
    </div>
  );
};

export default SignUp;
