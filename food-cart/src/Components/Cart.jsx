import React, { useState, useEffect } from 'react';

import './Cart.css';
import { useContext } from 'react';
import { cartContext } from '../App';

export const Cart = () => {

  const{cart}=useContext(cartContext);
  const [total, setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0));
  },[cart]);

  return (
    <>
    <h1 className="cart-heading">Cart Products</h1>
    <div className="cart-cointainer">
    {cart.map((products)=>(
        <div className="cart-product" key={products.id}>
        <div className="img">
          <img src={products.pic} alt="image"/>
        </div>
        <div className="cart-product-details">
          <h3>{products.name}</h3>
          <p>Price Rs:{products.amt}</p>
        </div>
      </div>
      ))
    }  
      
    </div>
    <h2 className="cart-amt">Total Amount Rs:{total} </h2>
    </>
  )
}
