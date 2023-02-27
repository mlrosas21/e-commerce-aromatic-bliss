import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from '../Button';

export const Success = () => {
    const navigate = useNavigate()

  return (
    <div>
        <h2>¡Compra exitosa!</h2>
        <Button text="Back to home" action={() => navigate("/")} />
    </div>
  )
}