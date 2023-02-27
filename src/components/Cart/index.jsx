import React, { useContext, useState } from "react";
import { CartItem } from "../CartItem";
import { CartContext } from "../../context/CartContext";
import { Button } from "../Button";
import { perfumeService } from "../../services/perfumes";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cart, getTotalItems, getTotalPrice, addItem, removeItem, cleanCart } =
    useContext(CartContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmitOrder = (cart, total, date) => {
    setLoading(true);
    perfumeService.sendOrder(cart, total, date).then(() => {
      setLoading(false)
      cleanCart()
      navigate("/success")
    });
  };

  return (
    <>
      {!loading && (
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
      )}

      {!loading && getTotalItems() > 0 && (
        <div>
          <Button
            action={() => handleSubmitOrder(cart, getTotalPrice(), new Date())}
            text="Finalizar compra"
          />
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
    </>
  );
};
