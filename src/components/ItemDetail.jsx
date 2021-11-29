import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount';
import ItemDetailFinishButtons from './ItemDetailFinishButtons';
import './ItemDetail.css';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
  const [ count, setCount ] = useState(1);
  const [ finish, setFinish ] = useState(false);
  const { addItem, cartList, isInCart, itemQuantity } = useContext(CartContext);

  function onAdd(amount, e) {
    e.preventDefault();
    if (amount > 0 && itemQuantity(item.id) < item.stock) {
      setCount(amount);
      isInCart(item.id);
      addItem({title: item.title,
              price: item.price,
              id: item.categoryId,
              thumbnail: item.thumbnail,
              description: item.description,
              stock: item.stock},
              amount);
    } else {
      alert('No hay suficiente stock!');
    }
    isInCart(item.id);
    setFinish(true);
  }
    
  function onFinish(e) {
    e.preventDefault();
    setFinish(false);
  }

  return <>
    { item ? <div className="detail-container">
    <div className="detail-img">
      <img src={item.thumbnail} alt="item pic" />
      { finish ? <ItemDetailFinishButtons onFinish={onFinish} /> : <ItemCount stock={item.stock} initial={count} onAdd={onAdd}/>}
    </div>
    <div className="detail-info">
      <h2>{item.title}</h2>
      <h3 className="detail-price">{`$${item.price}`}</h3>
      <h3>Descripcion: </h3>
      <p>{`${item.description}`}</p>
    </div></div> : 'Cargando..' }
  </>
};

export default ItemDetail;
