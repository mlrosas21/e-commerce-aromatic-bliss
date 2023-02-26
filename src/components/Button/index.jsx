import { Button as MuiButton } from '@mui/material'
import React from 'react'

export const Button = ({action}) => {
  return (
    <MuiButton variant="contained" onClick={action}>Agregar al carrito</MuiButton>
  )
}