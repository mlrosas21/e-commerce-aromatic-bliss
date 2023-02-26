import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from '../../context/CartContext';
import { Cart } from '../Cart';

export const CartContainer = () => {

    const {cart, removeItem, getTotalItems} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    console.log(cart)

    useEffect(() => {
      let newTotal = 0;
      cart.forEach(i => {
        newTotal += i.price
      });
      setTotal(newTotal)
    }, [cart])

  return (
    <Cart/>
  )
}
