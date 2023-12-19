import React from 'react';
import {BrowserRouter as Router , Route , Routes , Outlet} from 'react-router-dom'

import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts"
import Hero from "./components/Hero/Hero"
import Service from "./components/Services/Service"
import Shoppage from './pages/Shoppage/Shoppage'
import Homepage from './pages/Homepage/Homepage'
import Navbar2 from "./components/Navbar/Navbar2"
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs"
import Footer from "./components/Footer/Footer"
import Footer2 from "./components/Footer/Footer2"
import FeaturedProductGrid from "./components/FeaturedProductGrid/FeaturedProductGrid"
import SignUp from "./components/SignUp/SignUp"
import Navbar from "./components/Navbar/Navbar"
import TopCategories from "./components/TopCategories/TopCategories"
import LoginForm from './components/LoginForm/LoginFOrm';

import WishList from './components/WishList/WishList'
import Layout from './components/Layout/Layout';
import ProductDetails from './components/ProductDetails/ProductDetails';


const App = () => {
  
  return (
    <ProductDetails/>
  );
};

export default App

/*
<Router>
      <Routes>
       
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/shop"
          element={
            <Layout>
              <Shoppage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginForm />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        
      </Routes>
    </Router>
      
      */