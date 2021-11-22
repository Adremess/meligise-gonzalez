import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from './CartContext';

const Cart = () => {
  const { removeItem, cartList } = useContext(CartContext);

  

  return <div>
    { cartList.map((i, j) => {return <div key={j}>{i.item.id}<button type="button" onClick={removeItem(i.item.id)}>Delete</button></div>}) }
  </div>
};

export default Cart;
