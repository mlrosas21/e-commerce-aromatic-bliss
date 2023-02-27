import { Button as MuiButton } from '@mui/material'
import React from 'react'

export const Button = ({action, text}) => {
  return (
    <MuiButton variant="contained" onClick={action}>{text}</MuiButton>
  )
}