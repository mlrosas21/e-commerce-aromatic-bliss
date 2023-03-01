import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext({});

const getCartStorage = () => {
  const cartStorage = localStorage.getItem('dummyCart')
  return cartStorage ? JSON.parse(cartStorage) : []
}

function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartStorage);

  useEffect(() => {
    localStorage.setItem("dummyCart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (item) => {
    setCart((prev) => {
      const isItemInCart = prev.find((i) => i.id === item.id);

      if (isItemInCart) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount + 1 } : i
        );
      }

      return [...prev, { ...item, amount: 1 }];
    });
  };

  const getItem = (id) => cart.find(e => e.id === id)

  const getTotalItems = () => cart?.reduce((acc, item) => acc + item.amount, 0);

  const removeItem = (itemId) => {
    setCart((prev) => {
      return prev
        .map((i) =>
          i.id === itemId
            ? {
                ...i,
                amount: i.amount - 1,
              }
            : i
        )
        .filter((i) => (i.id === itemId ? i.amount > 0 : true));
    });
  };

  const cleanCart = () => {
    setCart([]);
  };

  const getTotalPrice = () =>
    cart.reduce((acc, item) => acc + item.price * item.amount, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        cleanCart,
        getTotalItems,
        getTotalPrice,
        getItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
