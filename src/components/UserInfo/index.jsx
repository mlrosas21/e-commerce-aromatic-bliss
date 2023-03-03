import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { Container, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { Button } from "../";
import { CartContext } from "../../context/CartContext";
import { perfumeService } from "../../services/perfumes";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { cart, getTotalItems, getTotalPrice, cleanCart } =
    useContext(CartContext);

  const onSubmit = (data) => {
    const { emailConfirm, ...user } = data;
    const total = getTotalPrice()

    console.log(total);

    perfumeService.sendOrder(user, cart, total, new Date()).then(() => {
      cleanCart();
      navigate("/success");
    });
  };

  return (
    <>
      {getTotalItems() > 0 && (
        <Container maxWidth="md">
          <h2 className="text-xl">Tus datos</h2>
          <form
            className="flex flex-col my-4 gap-2 px-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-2">
              <TextField
                fullWidth
                variant="outlined"
                label="Nombre"
                autoFocus
                {...register("name", {
                  required: "Campo requerido",
                })}
                error={!!errors?.name}
                helperText={errors?.name ? errors.name.message : null}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Apellido"
                autoFocus
                {...register("lastname", {
                  required: "Campo requerido",
                })}
                error={!!errors?.lastname}
                helperText={errors?.lastname ? errors.lastname.message : null}
              />
            </div>
            <TextField
              variant="outlined"
              label="Teléfono"
              autoFocus
              {...register("tel", {
                required: "Campo requerido",
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/im,
                  message: "Teléfono inválido",
                },
              })}
              error={!!errors?.tel}
              helperText={errors?.tel ? errors.tel.message : null}
            />
            <TextField
              variant="outlined"
              label="Correo electrónico"
              autoFocus
              {...register("email", {
                required: "Campo requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
              error={!!errors?.email}
              helperText={errors?.email ? errors.email.message : null}
            />
            <TextField
              id="outlined-required"
              label="Confirmación correo electrónico"
              autoFocus
              {...register("emailConfirm", {
                required: "Campo requerido",
                validate: (val) => {
                  if (watch("email") !== val) {
                    return "Mails no coinciden";
                  }
                },
              })}
              error={!!errors?.emailConfirm}
              helperText={
                errors?.emailConfirm ? errors.emailConfirm.message : null
              }
            />
            <Button
              type="submit"
              //action={() =>
              //  handleSubmitOrder(cart, getTotalPrice(), new Date())
              //}
              text="Finalizar compra"
            />
          </form>
        </Container>
      )}
    </>
  );
};
