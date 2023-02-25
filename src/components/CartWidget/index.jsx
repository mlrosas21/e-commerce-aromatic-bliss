import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; 
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const {total} = useContext(CartContext)
  
  return (
    <Badge badgeContent={total} color='secondary'>
        <ShoppingCartIcon style={{ color: '#fff' }} fontSize="medium"/>
    </Badge>
  )
}