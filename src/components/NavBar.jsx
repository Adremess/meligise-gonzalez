import React from 'react'
import CartWidget from './CartWidget';
import { BsSearch } from 'react-icons/bs';
import './NavBar.css';

// let styles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '14px',
//   borderBottom: '1px solid rgba(0, 0, 0, .2)',
//   borderRadius: '0 0 7px 7px',
//   backgroundColor: 'rgba(0, 0, 0, .1)'
// };

let categoriesStyles = {
  display: 'flex',
  listStyleType: 'none'
};

let categoriesItems = {
  paddingRight: '17px'
}

const NavBar = () => {
  return (
    <div>
      <header>
        <a href="/">
          <img src="#" alt="logo" />
        </a>
        <div className="searchBox">
          <input placeholder='Buscar productos..' />
          <button><BsSearch /></button>
        </div>
        <div className="categoriesList">
          <ul style={categoriesStyles}>
            <li style={categoriesItems}><a href='/'>Celulares</a></li>
            <li style={categoriesItems}><a href='/'>Libros</a></li>
            <li style={categoriesItems}><a href='/'>Autos</a></li>
          </ul>
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
