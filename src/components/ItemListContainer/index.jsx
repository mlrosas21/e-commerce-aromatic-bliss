import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { perfumeService } from "../../services/perfumes";
import { ItemList } from "../ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let arrayProductos = id ? perfumeService.getCategory(id) : perfumeService.getAll()
    arrayProductos.then((data) => setItems(data))
  }, [id]);

  if(items.length === 0){
    return(<h2> No results. </h2> )
  }

  return <ItemList items={items} />;
};
