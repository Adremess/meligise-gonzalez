import React from 'react'

const Item = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <img src={data.pictureUrl} alt="" />
      <span>${data.price}</span>
    </div>
  )
};

export default Item;