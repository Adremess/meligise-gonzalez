import React from 'react'
import './Item.css';

const Item = ({ data }) => {
  return (
    <div className="item-container">
      <div className="item-img">
        <img src={data.pictureUrl} alt="" />
      </div>
      <div className="item-info">
        <h2>{data.title}</h2>
        Description: 
        <p>{data.description}</p>
        <span>Price: ${data.price}</span>
      </div>
    </div>
  )
};

export default Item;