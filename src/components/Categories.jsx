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
        <Link to={`/category/celular`} className="categories-link">Celulares</Link>
        <Link to={`/category/libro`} className="categories-link">Libros</Link>
        <Link to={`/category/comic`} className="categories-link">Comics</Link>
        <Link to={`/category/buzo`} className="categories-link">Buzos</Link>
        <Link to={`/category/bicicleta`} className="categories-link">Bicicletas</Link>
        <Link to={`/category/pc%20gamer`} className="categories-link">PC Gamer</Link>
        <Link to={`/category/smart%20tv`} className="categories-link">Smart TV</Link>
        <Link to={`/category/frazada`} className="categories-link">Frazadas</Link>
        <Link to={`/category/sabana`} className="categories-link">Sabanas</Link>
        <Link to={`/category/nintendo`} className="categories-link">Nintendo</Link>
        <Link to={`/category/auto`} className="categories-link">Autos</Link>
        <Link to={`/category/mouse`} className="categories-link">Mouse</Link>
        <Link to={`/category/monitor`} className="categories-link">Monitores</Link>
      </li>
    </ul>
  </div>
};

export default Categories;