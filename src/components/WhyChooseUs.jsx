
import React from 'react';

import Wcheck from './assets/Wcheck.svg'

import './Homepage.css';
const WhyChooseUs = () => {

    return (

<div className="why-choose-us">
<div className="info30">
  <div className="heading4">
    <div className="trusted-organic-food-container"  style={{color: '#1A1A1A', fontWeight: 'bold', fontSize:  30, fontFamily: 'Poppins'}}>
      <p className="save-37-on">100% Trusted</p>
      <p className="save-37-on">Organic Food Store</p>
    </div>
  </div>
  <div className="our-location-parent">
    <div className="shopping-card">
      <div className="check"  style= {{backgroundColor:'#00B207'}} >
        <div className="check-child" />
        <img className="check-1-icon"  style= {{backgroundColor:'#00B207'}} alt="" src={Wcheck} />
      </div>
      <div className="healthy-natural" style={{width: '100%',  fontWeight: 'bold' , color: '#1A1A1A', fontSize: 18, fontFamily: 'Poppins'}}>{`Healthy & natural food for lovers of healthy food.`}</div>
    </div>
    <div className="description">
      <div className="ut-quis-tempus">{`Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. `}</div>
    </div>
  </div>
  <div className="our-location-parent">
    <div className="shopping-card">
      <div className="check" style= {{backgroundColor:'#00B207'}}>
        <div className="check-child" />
        <img className="check-1-icon" style= {{backgroundColor:'#00B207'}} alt="" src={Wcheck} />
      </div>
      <div className="every-day-fresh" style={{width: '100%',  fontWeight: 'bold' , color: '#1A1A1A', fontSize: 18, fontFamily: 'Poppins'}}>
        Every day fresh and quality products for you.
      </div>
    </div>
    <div className="description1">
      <div className="maecenas-vehicula-a">
        Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a
        posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus
        lobortis felis. Sed vestibulum nisl sit amet sapien.
      </div>
    </div>
  </div>
  <div className="button8"  style= {{backgroundColor:'#00B207'}} >
    <div className="normal" style={{color:'white'}} >Shop Now</div>
    <img className="arrow-icon" style={{color:'white'}} alt="" src="/group4.svg" />
  </div>
</div>
<img className="bg-icon5" alt="" src="/bg5.svg" />
<div className="image15">
  <img className="image-icon22" alt="" src="/image22@2x.png" />
  <img className="image-icon23" alt="" src="/image23@2x.png" />
  <img className="image-icon24" alt="" src="/image24@2x.png" />
  <img className="image-icon25" alt="" src="/image25@2x.png" />
</div>
</div>
    )}

    export default WhyChooseUs