import React, { useState } from 'react'
import ItemCount from './ItemCount';
import ItemDetailFinishButtons from './ItemDetailFinishButtons';
import './ItemDetail.css';

const ItemDetail = ({ item, description }) => {
  const [ count, setCount ] = useState(1);
  const [ finish, setFinish ] = useState(false);

  function onAdd(amount, e) {
    e.preventDefault();
    if (amount > 0) {
      setCount(amount);}
      setFinish(true);
  }

  function onFinish(e) {
    e.preventDefault();
    setFinish(false);
  }

  return <>
    { Object.keys(item) !== 0 ? <div className="detail-container">
    <div className="detail-img">
      <img src={item.pictures[0].url} alt="item pic" />
      { finish ? <ItemDetailFinishButtons onFinish={onFinish} /> : <ItemCount stock={7} initial={count} onAdd={onAdd}/>}
    </div>
    <div className="detail-info">
      <h2>{item.title}</h2>
      <h3 className="detail-price">{`$${item.price}`}</h3>
      <h3>Descripcion: </h3>
      <p>{`${description}`}</p>
    </div></div> : 'Cargando..' }
  </>
};

export default ItemDetail;
