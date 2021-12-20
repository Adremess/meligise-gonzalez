import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

const Item = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 500}}>
      <CardMedia 
        component="img"
        image={data.thumbnail}
        sx={{height: '350px', width: '100%', objectFit: 'contain'}}
      />
        <CardContent sx={{height: '20%'}}>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
        </CardContent>
      <CardActions sx={{height: '10%'}}>
        <Link to={`/item/${data.id}`} style={{margin: '0 auto 20px auto', textDecoration: 'none'}}>
          <Button variant="outlined" size="medium" color="primary" style={{fontWeight: 'bold'}}>
            Detalles
          </Button>
        </Link>
      </CardActions>
    </Card>

  )
};

export default Item;