import React from 'react';
import cartIcon from '../assets/shopping-cart.png';
import '../App.css';

const CartWidget = () => {
  let items = 4;
  return <>
    <div className="cart-container">
      <img className="cart-icon" src={cartIcon} alt='cart' />
      <span className="cart-span">{items}</span>
    </div>
  </>
};

export default CartWidget;
