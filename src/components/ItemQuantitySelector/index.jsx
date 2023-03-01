import React, {useContext} from "react";
import { Button } from "../Button";
import { CartContext } from "../../context/CartContext";

export const ItemQuantitySelector = ({item}) => {

  const { addItem, removeItem  } = useContext(CartContext);

  return (
    <div className="flex justify-end gap-4 w-3/5 h-4/5">
      <Button
        size="small"
        text="-"
        disableElevation
        variant="contained"
        action={() => removeItem(item?.id)}
      />
      <p className="text-lg">{item?.amount}</p>
      <Button
        size="small"
        text="+"
        disableElevation
        variant="contained"
        action={() => addItem(item)}
      />
    </div>
  );
};
