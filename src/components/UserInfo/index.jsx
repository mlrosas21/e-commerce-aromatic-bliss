import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const UserInfo = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="flex flex-col">
      <TextField
          required
          id="outlined-required"
          label="Nombre"
        />
        <TextField
          required
          id="outlined-required"
          label="Apellido"
        />
        <TextField
          required
          id="outlined-required"
          label="Teléfono"
        />
        <TextField
          required
          id="outlined-required"
          label="Mail"
        />
        <TextField
          required
          id="outlined-required"
          label="Confirmación mail"
        />
      </div>
    </Box>
  );
};
