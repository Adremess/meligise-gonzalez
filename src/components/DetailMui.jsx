import React, { useContext, useState } from 'react';
import { Grid, CardMedia } from '@mui/material';
import ItemCount from './ItemCount';
import { CartContext } from './CartContext';
import ItemDetailFinishButtons from './ItemDetailFinishButtons';

const DetailMui = ({ item }) => {
  const [ count, setCount ] = useState(1);
  const [ finish, setFinish ] = useState(false);
  const { addItem, isInCart, itemQuantity } = useContext(CartContext);

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
    <Grid container direction="row" width="1250px" height="700px" border="1px solid">
      <Grid item width="50%" height="100%">
        <CardMedia 
          component="img"
          src={item.thumbnail}
          width="100%"
          height="100%"
        />
      </Grid>
      <Grid item container width="50%" direction="row" border="1px solid red" padding="24px" height="100%" sx={{overflow: 'scroll'}}>
        <Grid item component="h2">
          {item.title}
        </Grid>
        <Grid item margin="auto">
          <h3>${item.price}</h3>
        </Grid>
        <Grid item width="inherit">
        { finish ? <ItemDetailFinishButtons onFinish={onFinish} /> : <ItemCount stock={item.stock} initial={count} onAdd={onAdd}/>}
        </Grid>
        <Grid item width="100%" >
          <p>{item.description}</p>
        </Grid>
      </Grid>
    </Grid>
  </>
};

export default DetailMui;
