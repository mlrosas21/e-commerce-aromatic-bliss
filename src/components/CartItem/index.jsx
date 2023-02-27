import React from "react";
import { Button } from "../Button";

export const CartItem = ({ item, addItem, removeItem }) => {

  return (
    <div className="flex">
      <div className="w-24">
        <img className="" src={item.image} alt={item.title} />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-left text-3xl">{item.title}</h3>
        <div className="flex justify-between">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <Button
            size="small"
            text="-"
            disableElevation
            variant="contained"
            action={() => removeItem(item.id)}
          />
          <p>{item.amount}</p>
          <Button
            size="small"
            text="+"
            disableElevation
            variant="contained"
            action={() => addItem(item)}
          />
        </div>
      </div>
    </div>
  );
};
