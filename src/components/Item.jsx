import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="item-info">
        <h4>{data.title}</h4>
      </div>
      <div className="button-container">
        <Link to={`/item/${data.id}`}>
          <button className="button-details">Detalles</button>
        </Link>
      </div>
    </div>
  )
};

export default Item;