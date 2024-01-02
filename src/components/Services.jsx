import React from 'react';
import './Homepage.css';

const Services = () => {
  const servicesData = [
    {
      class: 'icon5',
      class2: 'delivery-truck-1-icon',
      img: '/deliverytruck-1.svg',
      name: 'Free Shipping',
      headline: 'Free shipping with discount',
    },
    {
      class: 'icon7',
      class2: 'headphones-1-icon',
      img: '/shoppingbag.svg',
      name: '100% Secure Payment',
      headline: 'We ensure your money is safe',
    },
    {
      class: 'icon8',
      class2: 'headphones-1-icon',
      img: '/package.svg',
      name: 'Money-Back Guarantee',
      headline: '30 days money-back',
    },
  ];

  return (
    <div className="feature8">
      {servicesData.map((service, index) => (
        <div className="feature9" key={index}>
          <div className={service.class}>
            <img className={service.class2} alt="" src={service.img} />
          </div>
          <div className="info41">
            <div className="free-shipping">{service.name}</div>
            <div className="free-shipping-with">{service.headline}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;


/*
import React from 'react';

import './Services.css'
import { Component } from 'react';

class Services extends Component {
  constructor()
  {
      super();

      this.state = {
          services:[{
          class:'icon5',
          class2:'delivery-truck-1-icon',
          img:'/deliverytruck-1.svg',
          name:'Free Shipping',
          headline:'Free shipping with discount'
      },
      {
        class:'icon7',
        class2:'headphones-1-icon',
        img:'/shoppingbag.svg',
        name:'100% Sucure Payment',
        headline:'We ensure your money is save'
    },
    {
      class:'icon8',
      class2:'headphones-1-icon',
      img:'/package.svg',
      name:'Money-Back Guarantee',
      headline:'30 days money-back'
  },]

  
};
  }

  render(){

    return (


<div className="feature8"> {
this.state.services.map((service)=>{
   return <div className="feature9">
  <div className={service.class}>
    <img
      className={service.class2}
      alt=""
      src={service.img}
    />
  </div>
  <div className="info41">
    <div className="free-shipping">{service.name}</div>
    <div className="free-shipping-with">
      {service.headline}
    </div>
  </div>
</div>
  })}

</div>
    )}}

    export default Services
*/