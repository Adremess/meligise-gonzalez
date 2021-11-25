import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext';
import { GrFormClose } from 'react-icons/gr';
import './Cart.css';
import CartNoItems from './CartNoItems';

const Cart = () => {
  const [ items, setItems ] = useState(undefined);
  const [ ready, setReady ] = useState(false);
  const [ total, setTotal ] = useState(0);
  const { removeItem, cartList } = useContext(CartContext);

  useEffect(() => {
    if (cartList.length > 0) {
      setItems(cartList);
      setReady(true);
      setTotal(items.reduce((acc, curr) => { return acc + (curr.item.price * curr.quantity) }, 0));
    } else {
      setItems(undefined);
    }
  }, [items, cartList]);

  return <div className="cart-container">
    { items ? <div>
      <ul className="cart-ul">
        { items.map((i, j) => { 
          console.log(j);
          return <li className="cart-li" key={i.item.id}>
            <div className="item-main">
              <img src={i.item.thumbnail} alt="producto" className="item-img" />
              <div className="item-main__info">
                <span className="item-title">{i.item.title}</span>
                <span className="item-id">ID#{i.item.id}</span>
              </div>
            </div>
            <div className="item-block">
              <input type="text" className="item-input" placeholder={i.quantity} />
              <span className="item-price"><span>x</span> ${i.item.price}</span>
            </div>
            <div className="item-total-price">
              <span className="item-total">${i.item.price * i.quantity}</span>
              <GrFormClose className="item-remove" onClick={() => removeItem(i.item.id)} />
            </div>
            
            {/* <td className="cart-data">
              <button className="cart-button" type='button' onClick={() => removeItem(i.item.id)}>remove</button>
            </td> */}
            </li>}) }
      </ul>
      <div className="cart-summary">
        <ul>
          <li className="subtotal">
            <span className="label">SUBTOTAL</span>
            <span className="value">${total}</span>
          </li>
          <li className="shipping">
            <span className="label">SHIPPING</span>
            <span className="value">n/a</span>
          </li>
          <li className="total">
            <span className="label">TOTAL</span>
            <span className="value">${total}</span>
          </li>
        </ul>
      </div>

      </div> 
      : <CartNoItems /> }
   </div>
};

export default Cart;
