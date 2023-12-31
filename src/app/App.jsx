import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
//import {BrowserRouter as Router , Route , Routes , Outlet} from 'react-router-dom'
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "../components/Layout.jsx";
//import Layout from './components/Layout/Layout';
import Shoppage from '../pages/Shoppage/Shoppage'
import Homepage from '../pages/Homepage/Homepage'
import ProductDetails from '../components/ProductDetails/ProductDetails';
import TopCategories from "../components/TopCategories/TopCategories.jsx";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.jsx";
import FeaturedProductGrid from "../components/FeaturedProductGrid/FeaturedProductGrid.jsx";
import Hero from "../components/Hero/Hero.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          
            <Homepage />
         
        }
      />
      <Route
        path="/shop"
        element={
          
            <Shoppage/>
          
        }
      />
      <Route path="/products/:id" element={<ProductDetails/>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Route>
    
  )
);

export default function App() {
 return <RouterProvider router={router} />;
//return <FeaturedProducts/>


}
