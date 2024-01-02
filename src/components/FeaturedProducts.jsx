import React from 'react';
import Star from './assets/Star.svg';
import GStar from './assets/Star 5.svg';
import GreenArrow from './assets/GreenArrow.svg';
import Bag from './assets/Bag.svg';

import './Homepage.css';

const FeaturedProducts = () => {
  const vegetablesData = [
    {
      class: 'products-5x',
      img: '/image26@2x.png',
      name: 'Green Apple',
      price: '₹14.99',
    },
    {
      class: 'products-5x1',
      img: '/image27@2x.png',
      name: 'Chanise Cabbage',
      price: '₹14.99',
    },
    {
      class: 'products-5x2',
      img: '/image28@2x.png',
      name: 'Green Capsicum',
      price: '₹14.99',
    },
    {
      class: 'products-5x3',
      img: '/image29@2x.png',
      name: 'Ladies Finger',
      price: '₹14.99',
    },
  ];

  return (
    <div className="featured-products">
      <div className="heading8">
        <div className="testimonial-parent">
          <div
            className="normal"
            style={{
              color: '#1A1A1A',
              fontWeight: 'bold',
              fontSize: 40,
              fontFamily: 'Poppins',
            }}
          >
            Featured Products
          </div>
        </div>
        <div className="button4">
          <div className="address" style={{ color: '#00B207' }}>
            View All
          </div>
          <img className="arrow-icon" alt="" src={GreenArrow} />
        </div>
      </div>
      <div className="products-5x-parent">
        {vegetablesData.map((vegetable, index) => (
         <div className={vegetable.class} key={index}>
         <img className="image-icon6" alt="" src={vegetable.img} />
         <div className="product-info">
           <div className="testimonial-parent">
             <div className="green-apple">{vegetable.name}</div>
             <div className="price">
               <div className="address">{vegetable.price}</div>
             </div>
           </div>
           <div className="rating3">
             <img className="rating-child12" alt="" src="/star-1.svg" />
             <img className="rating-child12" alt="" src="/star-1.svg" />
             <img className="rating-child12" alt="" src="/star-1.svg" />
             <img className="rating-child12" alt="" src="/star-1.svg" />
             <img className="rating-child12" alt="" src="/star-5.svg" />
           </div>
         </div>
         <img className="add-to-cart" alt="" src="/add-to-cart.svg" />
         <div className="tag">
           <div className="helpharvestlycom">Sale</div>
           <div className="address">50%</div>
         </div>
       </div>
        ))}
      </div>
      <img className="featured-products-child" alt="" src="/group-6.svg" />
      <img
        className="growth-close-up-environmental-icon1"
        alt=""
        src="/growthcloseupenvironmentallushnatural-2@2x.png"
      />
    </div>
  );
};

export default FeaturedProducts;


/*import React from 'react';
import Star from './assets/Star 1.svg'
import GStar from './assets/Star 5.svg'
import GreenArrow from './assets/GreenArrow.svg'
import Bag from './assets/Bag.svg'
import { Component } from 'react';

/*
<div className="tag5" style={{ background: '#EA4B48'}}>
                  <div className="helpharvestlycom" style={{ background: '#EA4B48'}}>Sale</div>
                  <div className="address" style={{ background: '#EA4B48'}}>50%</div>
                </div>
                *//*
import './FeaturedProductGrid2.css'
class FeaturedProducts extends Component{
  constructor()
    {
        super();

        this.state = {
            vegetables:[{
            class:'product-4x',
            img:'/image26@2x.png',
            name:'Green Apple',
            price:'₹14.99'
        },
        {
            class:'product-4x1',
            img:'/image27@2x.png',
            name:'Chanise Cabbage',
            price:'₹14.99'
        },
        {
            class: 'product-4x2',
            img:'/image28@2x.png',
            name:'Green Capsicum',
            price:'₹14.99'
        },
        {
          class: 'product-4x3',
          img:'/image29@2x.png',
          name:'Ladies Finger',
          price:'₹14.99'
      },]

    
};
    }
 
    render(){
    return (
      

<div className="featured-products">
<div className="heading8">
  <div className="testimonial-parent">
    <div className="normal"   style={{color: '#1A1A1A', fontWeight: 'bold', fontSize:  40, fontFamily: 'Poppins'}}>Featured Products</div>
  </div>
  <div className="button4">
    <div className="address" style={{color:'#00B207'}}>View All</div>
    <img className="arrow-icon" alt="" src={GreenArrow} />
  </div>
</div>
<div className="product10">{
this.state.vegetables.map((vegetable)=>{
                return <div className={vegetable.class}>
                <div className="product-image">
                  <img className="image-icon26" alt="" src={vegetable.img} />
                </div>
                <div className="product-info14">
                  <div className="testimonial-parent">
                    <div className="green-apple5">{vegetable.name}</div>
                    <div className="price8">
                      <div className="address">{vegetable.price}</div>
                    
                    </div>
                  </div>
                  <div className="rating3">
                    <img className="rating-child12" alt="" src={Star} />
                    <img className="rating-child12" alt="" src={Star} />
                    <img className="rating-child12" alt="" src={Star} />
                    <img className="rating-child12" alt="" src={Star} />
                    <img className="rating-child12" alt="" src={GStar} />
                  </div>
                </div>
                <img className="add-to-cart7" alt="" src={Bag} />
                
              </div>
    })}
  
  
</div>
<img className="featured-products-child" alt="" src="/group-6.svg" />
<img
  className="growth-close-up-environmental-icon1"
  alt=""
  src="/growthcloseupenvironmentallushnatural-2@2x.png"
/>
</div>
    )}}

    export default FeaturedProducts
*/