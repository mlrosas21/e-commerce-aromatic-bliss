import React, { useContext } from "react";
import { CartItem } from "../CartItem";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button";

export const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, addItem, removeItem } = useContext(CartContext);

  return (
    <>
      <div className="px-20">
        <h2>Your Cart - {getTotalItems()} items</h2>
        {cart.length === 0 ? <p>No items in cart.</p> : null}
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addItem={addItem}
            removeItem={removeItem}
          />
        ))}
        <h2 className="text-right">Total: ${getTotalPrice()}</h2>
      </div>
      {getTotalItems() > 0 && (
        <div>
          <Button text="Finalizar compra" />
        </div>
      )}
    </>
  );
};
