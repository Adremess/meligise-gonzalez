import React from 'react';
import { Link } from 'react-router-dom';

const ItemDetailFinishButtons = ({ onFinish }) => {
  return <div>
    <button type="button" onClick={(e) => onFinish(e)}>Ajustar cantidad</button>
    <Link to={`/cart`}>Finalizar compra</Link>
  </div>
}

export default ItemDetailFinishButtons;
