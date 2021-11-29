import React, { useState, useContext, useEffect } from 'react'
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo.png';
import { CartContext } from './CartContext';

const NavBar = () => {
  const [ show, setShow ] = useState(false);
  const [ count, setCount ] = useState(0);
  const { cartList, getQuantity } = useContext(CartContext);

  useEffect(() => {
    if (cartList.length > 0) {
      setCount(getQuantity());
      setShow(true);
    }

  }, [cartList.length, getQuantity]);

  return (
    <div>
      <header>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        { show ? <CartWidget count={count} /> : '' }
        <div>
          <a href="/">Login</a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
