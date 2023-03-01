import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge'; 
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export const CartWidget = () => {

  const {cart, getTotalItems} = useContext(CartContext)
  
  return (
    <Link to={"/checkout"}>
    <Badge badgeContent={getTotalItems()} color='secondary'>
        <ShoppingCartIcon style={{ color: '#fff' }} fontSize="medium" />
    </Badge>
    </Link>
  )
}