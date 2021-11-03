import React from 'react'

const Item = ({ data }) => {
  return <>
    <div>
      <h2>{data.title}</h2>
      <span>${data.price}</span>
    </div>
  </>
};

export default Item;