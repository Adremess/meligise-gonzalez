import React from 'react'

const ItemDetail = ({ item }) => {
  return <div>
    <img src={item.pictureUrl} alt="item pic" />
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    <span>{item.price}</span>
  </div>
};

export default ItemDetail;
