import React, { createContext, useState } from 'react'

const CartContext = createContext({})

function CartProvider({children}){

    const [cart, setCart] = useState([])
    const addItem = (item) => {
        setCart(prev => {
            const isItemInCart = prev.find(i => i.id === item.id)

            if(isItemInCart){
                return prev.map(i => i.id === item.id ? {...i, amount: i.amount+1} : i)
            }

            return [...cart, {...item, amount: 1}] 
        })
    }

    const getTotalItems = () => cart.reduce((acc, item) => acc + item.amount, 0)

    const removeItem = (itemId) => {
        const items = cart.filter(i => i.id !== itemId)
        setCart(items)
    }

    const cleanCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, cleanCart, getTotalItems}}>
            {children}
        </CartContext.Provider>        
    )
}

export {CartProvider, CartContext}