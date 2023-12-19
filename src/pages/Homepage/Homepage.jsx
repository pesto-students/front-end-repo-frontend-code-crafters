

import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from '../../components/Hero/Hero';
import Service from '../../components/Services/Service';
import TopCategories from '../../components/TopCategories/TopCategories';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';

const Homepage = () => {
  
  return (
   <div>
   <Hero/>
   <Service/>
   <FeaturedProducts/>
   <TopCategories/>
   <WhyChooseUs/>
   </div>
  );
};

export default Homepage;

