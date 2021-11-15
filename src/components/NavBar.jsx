import React, { useState } from 'react'
import CartWidget from './CartWidget';
import { BsSearch } from 'react-icons/bs';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [ search, setSearch ] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <header>
        <a href="/">
          <img src="#" alt="logo" />
        </a>
        <div className="searchBox">
          <input value={search} placeholder='Buscar productos..' onChange={(e) => handleInput(e)}/>
          <Link to={`/category/${search}`}>
            <button onClick={() => {console.log(search); setSearch('')}}><BsSearch /></button>
          </Link>
        </div>
        <CartWidget />
        <div>
          <a href="/">Login</a>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
