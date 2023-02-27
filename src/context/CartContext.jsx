import React, { createContext, useState } from "react";

const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
