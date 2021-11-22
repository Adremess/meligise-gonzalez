import React, { useState, useContext, useEffect } from 'react'
import CartWidget from './CartWidget';
import { BsSearch } from 'react-icons/bs';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { CartContext } from './CartContext';

const NavBar = () => {
  const [ search, setSearch ] = useState('');
  const [ show, setShow ] = useState(false);
  const [ count, setCount ] = useState(0);
  const { cartList, getQuantity } = useContext(CartContext);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

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
        <div className="searchBox">
          <input value={search} placeholder='Buscar productos..' onChange={(e) => handleInput(e)}/>
          <Link to={`/category/${search}`}>
            <button onClick={() => {console.log(search); setSearch('')}}><BsSearch /></button>
          </Link>
        </div>
        { show ? <CartWidget count={count} /> : '' }
        <div>
          <a href="/">Login</a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
