import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { CartContext } from './CartContext';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const CartWidget = ({ count }) => {
  const { cartList } = useContext(CartContext);

  return <>
    <Link to={`/cart`}>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartList.length > 0 ? count : ''} color="primary">
          <ShoppingCartIcon sx={{ fontSize: '35px', color: 'black' }} />
        </StyledBadge>
      </IconButton>
    </Link>
  </>
};

export default CartWidget;
