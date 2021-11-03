import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const items = [
    {title: 'New Avengers Vol3', price: 1300}, 
    {title: 'House of X', price: 1400}, 
    {title: 'Powers of X', price: 1400}, 
    {title: 'Thanos Quest', price: 950}
  ];
  function onAdd(amount, e) {
    e.preventDefault();
    if (amount > 0) alert(`Se han agregado ${amount} items al carrito.`);
  }

  return <>
          <h2 className="greeting">{greeting}</h2>
          <ItemCount stock={7} initial={3} onAdd={onAdd}/>
          <ItemList items={items} />
  </>
};

export default ItemListContainer;
