import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { perfumeService } from "../../services/perfumes";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ItemList } from "../ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    let arrayProductos = id
      ? perfumeService.getCategory(id)
      : perfumeService.getAll();
    arrayProductos.then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {!loading && items.length > 0 && <ItemList items={items} />}

      {!loading && items.length === 0 && <h1>No results</h1>}

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
