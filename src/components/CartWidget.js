import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import '../App.css';

const CartWidget = () => {
  let items = 4;
  return <>
    <div className="cart-container">
      <BsCart3 className="cart-icon" />
      <span className="cart-span">{items}</span>
    </div>
  </>
};

export default CartWidget;
