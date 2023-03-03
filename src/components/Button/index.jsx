import { Button as MuiButton } from '@mui/material'
import React from 'react'

export const Button = ({action, text, type}) => {
  return (
    <MuiButton variant="contained" type={type} onClick={action}>{text}</MuiButton>
  )
}