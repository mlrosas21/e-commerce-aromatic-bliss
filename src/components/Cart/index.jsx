import React, { useContext } from "react";
import { CartItem } from "../CartItem";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, addItem, removeItem } =
    useContext(CartContext);

  return (
    <div className="flex flex-col">
      <div className="px-6">
        <h2 className="text-xl">Tu Carrito - {getTotalItems()} items</h2>

        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
        <h2 className="text-right text-3xl my-8">Total: ${getTotalPrice()}</h2>
      </div>
    </div>
  );
};
