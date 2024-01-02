import React from 'react';

import './Homepage.css'
const Hero = () => {

    return (
<div className="header1">
        <div className="bg">
          <div className="bg1" />
          <img className="top-icon" alt="" src="/top@2x.png" />
          <img className="bg-icon7" alt="" src="/bg7@2x.png" />
          <div className="tracker">
            <div className="tracker-child" />
            <div className="tracker-item" />
            <div className="tracker-child" />
          </div>
          
          <img className="image-icon30" alt="" src="/image30@2x.png" />
        </div>
        <div className="info45">
          <div >
            <div className= "welcome-to-harvestly" style={{color: '#00B207', fontSize: 14, fontFamily: 'Poppins'}}>Welcome to Harvestly</div>
            <div className = "fresh-healthy-container"  style={{color: '#1A1A1A', fontWeight: 'bold', fontSize: 72, fontFamily: 'Poppins'}}>
              <p className="save-37-on">{`Fresh & Healthy`}</p>
              <p className="save-37-on">Organic Food</p>
            </div>
          </div>
          <div className="description2">
            <div className="sale-up-to-container">
              <span style={{color: '#1A1A1A', fontSize: 32, fontFamily: 'Poppins'}}>{`Sale up to `}</span>
              <span className="off" style={{color: '#FF8A00', fontSize: 32, fontFamily: 'Poppins'}}>30% OFF</span>
            </div>
            <div className="free-shipping-on" style={{color:"#808080", fontSize: 14, fontFamily: 'Poppins'}}>
              Free shipping on all your order. we deliver, you enjoy
            </div>
          </div>
          <div className="button11">
            <div className="normal2">
            <div className="button-container">
        <button className="green-button">Shop now</button>
        
      </div>
    
            </div>
           
          </div>
        </div>
        
      </div>
    )}

    export default Hero