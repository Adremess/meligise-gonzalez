import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting }) => {
  function onAdd(amount, e) {
    e.preventDefault();
    if (amount > 0) alert(`Se han agregado ${amount} items al carrito.`);
  }

  return <>
          <h2 className="greeting">{greeting}</h2>
          <ItemCount stock={7} initial={3} onAdd={onAdd}/>
  </>
};

export default ItemListContainer;
