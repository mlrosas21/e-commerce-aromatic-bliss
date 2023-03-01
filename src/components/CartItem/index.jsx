import React from "react";
import { ItemQuantitySelector } from "../ItemQuantitySelector";
import Divider from "@mui/material/Divider";

export const CartItem = ({ item }) => {
  return (
    <>
      <div className="flex my-4">
        <div className="w-24 mr-16">
          <img className="" src={item.image} alt={item.title} />
        </div>
        <div className="flex flex-col justify-between w-full">
          <h3 className="text-left text-3xl">{item.title}</h3>
          <div className="flex justify-between">
            <p>Price: ${item.price}</p>
            <p className="font-semibold">
              Total: ${(item.amount * item.price).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p>Cantidad: </p>
            <ItemQuantitySelector item={item} />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};
