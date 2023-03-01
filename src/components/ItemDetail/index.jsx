import React, { useEffect, useState, useContext } from "react";
import { Button } from "../Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { CartContext } from "../../context/CartContext";
import { ItemQuantitySelector } from "../ItemQuantitySelector";

export const ItemDetail = ({ item, addItem }) => {
  const [open, setOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false)

  const { cart, getItem } = useContext(CartContext);

  useEffect(() => {
    if(cart.findIndex(e => e.id === item.id) !== -1){
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cart, item])
  

  const handleAddItem = () => {
    item.amount = 1
    addItem(item);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="grid lg:px-24 lg:grid-rows-3 lg:grid-cols-2 grid-flow-col-dense gap-2 px-8 md:grid-rows-6 sm:grid-cols-1 sm:grid-rows-6 sm:grid-cols-1 grid-rows-6 lg:items-center">
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="¡Producto agregado al carrito!"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />

      <div className="flex row-span-3 md:row-span-3 sm:col-span-1 sm:row-span-3 row-span-3 justify-center ">
        <img
          className="object-contain max-h-96 lg:self-auto self-end"
          src={item.image}
          alt="product"
        />
      </div>
      <div className="flex flex-col justify-between m-4 gap-2 content-start ">
        <p className="text-left">{item.brand}</p>
        <h2 className="text-left text-4xl">{item.title}</h2>
        <h5 className="text-left">{item.volume}</h5>
        <Stack direction="row" spacing={1}>
          {item.olfactiveFamily?.map((e) => (
            <Chip key={e} label={e.toUpperCase()} />
          ))}
        </Stack>
      </div>
      <div className="lg:row-span-1 m-4 text-justify md:row-span-1 sm:row-span-1">
        <p>{item.description}</p>
      </div>
      <div className="lg:row-span-1 lg:col-start-2 lg:row-start-3 md:col-start-1 md:row-start-6 md:col-span-2 py-4">
        {!isInCart && (
          <Button text="Agregar al carrito" action={handleAddItem} />
        )}

        {isInCart && (
          <ItemQuantitySelector item={getItem(item.id)}/>
        )}

      </div>
    </div>
  );
};

// const prod = {
//   title: "Ck One",
//   category: 'unisex',
//   brand: "Calvin Klein",
//   description:
//     "Pure XS by Paco Rabanne is a Aromatic Spicy fragrance for men. Pure XS was launched in 2017. Pure XS was created by Anne Flipo, Caroline Dumur and Bruno Jovanovic. Top notes are Ginger, Thyme, Grapefruit, Bergamot and Green Accord; middle notes are Vanilla, Liquor, Cinnamon, Leather and Apple; base notes are Myrrh, Sugar, Cedar, Woody Notes, Cashmeran and Patchouli.",
//   price: 95,
//   image: "https://fimgs.net/mdimg/perfume/375x500.276.jpg",
//   volume: "100ml",
//   olfactiveFamily: ["citrus", "green", "woody"],
//   stock: 114,
// };
