import { Cart, UserInfo } from "../../components";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const Checkout = () => {

  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.length > 0 ? (
      <div className="grid lg:grid-cols-2 px-16 grid-cols-1 ">
        <Cart />
        <UserInfo />
      </div>

      ) : <h2 className="text-3xl">Tu carrito está vacío</h2>}
      
    </>
  );
};
