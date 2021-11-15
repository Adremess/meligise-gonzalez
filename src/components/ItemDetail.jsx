import React from 'react'
import ItemCount from './ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item, description }) => {
  console.log(item.title);
  function onAdd(amount, e) {
    //e.preventDefault();
    if (amount > 0) alert(`Se han agregado ${amount} items al carrito.`);
  }
  return <>
    { Object.keys(item) !== 0 ? <div className="detail-container">
    <div className="detail-img">
      <img src={item.pictures[0].url} alt="item pic" />
      <ItemCount stock={7} initial={1} onAdd={onAdd}/>
    </div>
    <div className="detail-info">
      <h2>{item.title}</h2>
      <h3>Descripcion: </h3>
      <p>{`${description}`}</p>
      <span>{`Precio: $${item.price}`}</span>
    </div></div> : 'Cargando..' }
  </>
};

export default ItemDetail;
