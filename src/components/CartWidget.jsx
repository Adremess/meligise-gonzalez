import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import '../App.css';
import { CartContext } from './CartContext';

const CartWidget = ({ count }) => {
  const { cartList } = useContext(CartContext);
  console.log(cartList);

  return <>
    <Link to={`/cart`}>
    <div className="cart-container">
      <BsCart3 className="cart-icon" />
      <span className="cart-span">{cartList.length > 0 ? count : ''}</span>
    </div>
    </Link>
  </>
};

export default CartWidget;
