import React from 'react'
import Item from './Item';
import './Item.css';
import Grid from '@mui/material/Grid';

const ItemList = ({ item }) => {
  return <>
      <Grid container spacing={3} sx={{marginTop: '6%'}} >
    { item.length > 0 ? 
       item.map(i => {
        return <Grid item key={i.id}><Item data={i}  /></Grid> 
      })
  : <div className="default-display">Ingrese en alguna categoria para ver los productos o busque el de su interes!</div>}
  </Grid>
  </>
};

export default ItemList;
