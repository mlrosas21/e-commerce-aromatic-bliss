import React from "react";
import { Item } from "../Item";

export const ItemList = ({ items }) => {
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-items-center" >
      {items.map((e) => <Item key={e.id} item={e}/>)}
    </div>
  );
};
