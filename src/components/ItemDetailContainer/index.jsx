import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { perfumeService } from "../../services/perfumes";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let item = perfumeService.get(id);

    item.then((data) => {
      setItem(data);
    });
  }, [id]);

  return <ItemDetail item={item} />;
};
