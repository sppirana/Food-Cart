import React from 'react'
import './Products.css'
import { useContext } from 'react';
import { cartContext } from '../App';

export const Products = ({products}) => {

    const{cart,setCart}=useContext(cartContext);
    const name=products.name.length>21?products.name.substring(0,20)+"..":products.name;
  
    const addCart= () =>{
      setCart([...cart,products])
    };
    const removeCart= () =>{
      setCart(cart.filter((c) =>c.id !==products.id))
    };
    
    return (
    <div className="product">
        <div className="img">
            <img src={products.pic} alt="products.name" />
        </div>
        <div className="details">
            <h3>{name}</h3>
            <p>Price Rs:{products.amt}</p>
            {cart.includes(products)?(
              <button className="btnRemove" onClick={removeCart}>Remove From Cart</button>
            ):(
              <button onClick={addCart}>Add to Cart</button>
            )}
        </div>
    </div>
  )
}
