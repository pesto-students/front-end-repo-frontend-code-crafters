 
import React from 'react';

import './Homepage.css'
import { Component } from 'react';
class TopCategories extends Component{

    
      constructor()
    {
        super();

        this.state = {
            categories:[{
            class:'categories4',
            img:'/vegetable.svg',
            name:'Vegetables',
            quantity:'165 Products'
        },
        {
            class:'categories5',
            img:'/fruits-1.svg',
            name:'Fresh Fruit',
            quantity:'137 Products'
        },
        {
            class: 'categories6',
            img:'/softdrink-1.svg',
            name:'Water and Drinks',
            quantity:'48 Products'
        },
        {
          class: 'categories7',
          img:'/snacks-1.svg',
          name:'Dairy',
          quantity:'5 Products'
      },]

    
};
    }
 
    render(){
      return (
      
      <div className="categories3">
      <img className="bg-icon6" alt="" src="/bg6.svg" />{
      this.state.categories.map((category)=>{
                return <div className={category.class}>
                <img className="vegetable-icon" alt="" src={category.img} />
                <div className="info31">
                  <div className="vegetables">{category.name}</div>
                  <div className="products1">{category.quantity}</div>
                </div>
              </div>
      
    })}
      
      <div className="heading7">
        <div className="testimonial-parent">
          <div className="normal"  style={{color: '#1A1A1A', fontWeight: 'bold', fontSize:  40, fontFamily: 'Poppins'}}>Shop by Top Categories</div>
        </div>
        
      </div>
     
    </div>
    )}}

    export default TopCategories