import React, {useContext, useState, useEffect} from 'react'
import { CartContext } from '../../context/CartContext';

export const Cart = () => {

    const {cart, removeItem} = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
      let newTotal = 0;
      cart.cart.forEach(i => {
        newTotal += i.price
      });
      setTotal(newTotal)
    }, [cart])

  return (
    <p>{cart.length > 0 ? 'LLENO' : 'VACIO'}</p>
  )
}
