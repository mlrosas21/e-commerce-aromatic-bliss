import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from '../../components/Button';
import SuccessImg from "../../assets/comprobado.png"

export const Success = () => {
    const navigate = useNavigate()

  return (
    <div className='mt-8'>
      <div className="flex justify-center">
        <img className='w-20' src={SuccessImg} alt="OK"/>
      </div>
        <h2 className='text-4xl m-6'>¡Compra exitosa!</h2>
        <Button text="Back to home" action={() => navigate("/")} />
    </div>
  )
}