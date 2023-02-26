import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { perfumeService } from "../../services/perfumes";
import { ItemDetail } from "../ItemDetail";
import { CartContext } from "../../context/CartContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { removeItem, addItem } = useContext(CartContext);

  console.log(addItem);

  useEffect(() => {
    setLoading(true);
    let item = perfumeService.get(id);

    item.then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {!loading && (
        <ItemDetail key={item.id} item={item} addItem={addItem} removeItem={removeItem} />
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
