import React, { useState } from 'react';
import data from '../assets/products.json'
import { Products } from './Products';
import './Home.css';

export const Home = () => {
  const[products]=useState(data);
  return (
    <div className="product-cointainer">
      {products.map((products)=>(
        <Products key={products.id} products=
        {products} />
      ))}
    </div>
  )
}
