import React from 'react'
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  return <div className="categories-container">
    <div className="categories-title">
      <h2>Categorias</h2>
    </div>
    <ul className="categories-ul">
      <li>
        <Link to={`/category/Celulares`} className="categories-link">Celulares</Link>
        <Link to={`/category/Comics`} className="categories-link">Comics</Link>
        <Link to={`/category/Buzos`} className="categories-link">Buzos</Link>
        <Link to={`/category/PC`} className="categories-link">PC Gamer</Link>
        <Link to={`/category/Natacion`} className="categories-link">Natacion</Link>
      </li>
    </ul>
  </div>
};

export default Categories;