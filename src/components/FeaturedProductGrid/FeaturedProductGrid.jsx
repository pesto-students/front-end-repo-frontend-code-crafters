import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import Star from '../assets/Star.svg';
import GStar from '../assets/Star 5.svg';
import Bag from '../assets/Bag.svg';

const FeaturedProductGrid = () => {
 

    const vegetablesData = [{
        class:'product-4x',
        img:'/image@2x.png',
        name:'Big Potatos',
        price:'₹14.99',
        div:'₹20.99',
        star:4
    },
    
  {
      class:'product-4x1',
      img:'/image1@2x.png',
      name:'Eggplant',
      price:'₹14.99',
      div:'₹20.99',
      star:4
  },
  {
      class: 'product-4x2',
      img:'/image2@2x.png',
      name:'Green Capsicum',
      price:'₹14.99',
      div:'₹20.99',
      star:4
  },
  {
    class: 'product-4x3',
    img:'/image3@2x.png',
    name:'Green Littuce',
    price:'₹14.99',
    div:'₹20.99',
    star:4
},
{
  class: 'product-4x4',
  img:'/image4@2x.png',
  name:'Corn',
  price:'₹14.99',
  div:'₹20.99',
  star:4
},
{
class: 'product-4x5',
img:'/image5@2x.png',
name:'Chanise Cabbage',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x6',
img:'/image29@2x.png',
name:'Ladies Finger',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x7',
img:'/image6@2x.png',
name:'Green Apple',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x8',
img:'/image7@2x.png',
name:'Green Cucumber',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x9',
img:'/image8@2x.png',
name:'Red Capsicum',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x10',
img:'/image9@2x.png',
name:'Fresh Cauliflower',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x11',
img:'/image10@2x.png',
name:'Green Chillies',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x12',
img:'/image12@2x.png',
name:'Red Chillies',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x13',
img:'/image13@2x.png',
name:'Tomatto',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x14',
img:'/image14@2x.png',
name:'Mango',
price:'₹14.99',
div:'₹20.99',
star:4
},
{
class: 'product-4x15',
img:'/image14@2x.png',
name:'Hapoose Mango',
price:'₹14.99',
div:'₹20.99',
star:4
},];

  

return (
  <div className="mt-28">
    
  <div className="featured-products">
    <div className="grid grid-cols-4 gap-6 mt-20  ">
      {vegetablesData.map((vegetable, index) => (
        <div className={`product-4x${index + 1} relative hover:scale-105 transform transition duration-300 ease-in-out`} key={index}>
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
      src={i < vegetable.star ? Star : GStar}
      key={i}
    />
  ))}



</div>

          </div>
          <img className="add-to-cart7 absolute right-0 top-60"  alt="" src={Bag} />
        </div>
      ))}
    </div>
   
    </div>
  </div>
);
};

export default FeaturedProductGrid;