import React from 'react';
import { Link } from 'react-router-dom';

const CartNoItems = () => {
  return <div>
    <div>
      <h2>No hay articulos en tu carrito, echa un vistazo a algunos productos!</h2>
      <Link to={`/`}>Volver a la pagina principal</Link>
    </div>
  </div>
};

export default CartNoItems;
