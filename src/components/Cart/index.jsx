import React, { useContext, useState } from "react";
import { CartItem } from "../CartItem";
import { CartContext } from "../../context/CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, addItem, removeItem } =
    useContext(CartContext);

  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col">
      {!loading && (
        <div className="px-6">
          <h2 className="text-xl">Tu Carrito - {getTotalItems()} items</h2>
          {cart.length === 0 ? <p>No items in cart.</p> : null}
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addItem={addItem}
              removeItem={removeItem}
            />
            ))}
          <h2 className="text-right text-3xl my-8">
            Total: ${getTotalPrice()}
          </h2>
        </div>
      )}

      

      {loading && (
        <Box
          height="70vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress size="4rem" />
        </Box>
      )}
    </div>
  );
};
