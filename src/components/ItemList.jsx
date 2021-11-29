import React from 'react'
import Item from './Item';
import './Item.css';

const ItemList = ({ item }) => {
  return <>
    { item.length > 0 ? 
     <div className="item-list">
    { item.map(i => {
      return <Item data={i} key={i.id} />
    })}
  </div> 
  : <div className="default-display">Ingrese en alguna categoria para ver los productos o busque el de su interes!</div>}
  </>
};

export default ItemList;
