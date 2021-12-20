import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext';
import { GrFormClose } from 'react-icons/gr';
import './Cart.css';
import CartNoItems from './CartNoItems';
import { getFireStore } from '../service/getFirestore';
import firebase from 'firebase';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [personalInfo, setPerfonalInfo] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [open, setOpen] = useState(false);
  const { removeItem, cartList } = useContext(CartContext);
  const [compra, setCompra] = useState('');

  useEffect(() => {
    setTotal(cartList.reduce((acc, curr) => { return acc + (curr.item.price * curr.quantity) }, 0));
  }, [cartList]);

  const addOrder = (e) => {
    e.preventDefault();
    const dbQuery = getFireStore();
    const date = firebase.firestore.Timestamp.fromDate(new Date());
    const order = {};

    order.buyer = personalInfo;
    order.items = cartList.map(prod => {
      let id = prod.item.id;
      let title = prod.item.title;
      let price = prod.item.price;
      return { id, title, price }
    });
    order.time = date;
    order.total = total;

    dbQuery.collection('orders').add(order)
      .then(resp => setCompra(resp.id))
      .catch(err => console.log(err));

    setOpen(true);
  };

  const handleForm = (e) => {
    setPerfonalInfo({
      ...personalInfo,
      [`${e.target.name}`]: e.target.value
    });
    console.log(personalInfo);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const styleDivider = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

  return <div className="cart-container">
    {cartList.length > 0 ? <div>
      <ul className="cart-ul">
        {cartList.map((i, j) => {
          return <li className="cart-li" key={i.item.id}>
            <div className="item-main">
              <img src={i.item.thumbnail} alt="producto" className="cart-item-img" />
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
          </li>
        })}
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
        <div className="cart-footer">
          <form onChange={handleForm} onSubmit={addOrder}>
            <span>Nombre </span><input type="text" name="name" />
            <span>Telefono </span><input type="tel" name="phone" />
            <span>Email </span><input type="email" name="email" />
            <button type="submit" className="cart-btn">Checkout</button>
          </form>
        </div>
      </div>
    </div>
      : <CartNoItems />}

    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Compra Realizada!
        </Typography>
        <List sx={styleDivider} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Nombre" />
            {personalInfo.name}
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Contacto" />
            {personalInfo.phone}
          </ListItem>
          <ListItem button>
            <ListItemText primary="Email" />
            {personalInfo.email}
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Id de compra" />
            {compra}
          </ListItem>
        </List>
        <Button type="button" onClick={handleClose}>
          Ok!
        </Button>
      </Box>
    </Modal>
  </div>
};

export default Cart;
