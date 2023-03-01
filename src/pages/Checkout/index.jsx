import React, { useContext, useState } from "react";
import { UserInfo } from "../../components";
import { Cart, Button } from "../../components/";
import { CartContext } from "../../context/CartContext";
import { perfumeService } from "../../services/perfumes";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { cart, getTotalItems, cleanCart, getTotalPrice } =
    useContext(CartContext);

    const [user, setUser] = useState()

  const handleSubmitOrder = (cart, total, date) => {
    perfumeService.sendOrder(cart, total, date).then(() => {
      cleanCart();
      navigate("/success");
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 px-16 ">
        <Cart />
        <UserInfo />
      </div>
      {getTotalItems() > 0 && (
        <div>
          <Button
            action={() => handleSubmitOrder(cart, getTotalPrice(), new Date())}
            text="Finalizar compra"
          />
        </div>
      )}
    </>
  );
};
