import React, { createContext, useState } from 'react'

const CartContext = createContext({})

function CartProvider({children}){

    const [cart, setCart] = useState([])
    const addItem = (item) => {
        setCart((prevState) => [...prevState, item])
    }

    const removeItem = (itemId) => {
        const items = cart.filter(i => i.id !== itemId)
        setCart(items)
    }

    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, cleanCart}}>
            {children}
        </CartContext.Provider>        
    )
}

export {CartProvider, CartContext}