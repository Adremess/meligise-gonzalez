import React, { useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [ counter, setCounter ] = useState(initial);

  function addItem() {
    console.log('1');
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert('No hay suficiente stock!');
    }
  };

  function removeItem() {
    console.log('2');
    if (counter > 0) setCounter(counter - 1);
  };

  return <>
            <div className="container">
              <div className="handlers">
                <button type="button" onClick={addItem}><FiPlusCircle className="plus" /></button>
                <span>{counter}</span>
                <button type="button" onClick={removeItem}><FiMinusCircle className="minus" /></button>
              </div>
              <div className="submitButton">
                <button type="button" onClick={stock !== 0 ? (e) => onAdd(counter, e) : ''}>Agregar al carrito</button>
              </div>
            </div>        
  </>
};

export default ItemCount;
