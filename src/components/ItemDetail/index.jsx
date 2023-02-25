import React from 'react'
import { Button } from '../Button'

export const ItemDetail = ({item}) => {

  console.log(item.olfactiveFamily)

  return (
    <div className="grid lg:grid-rows-3 lg:grid-cols-2 grid-flow-col-dense gap-3 px-20 md:grid-rows-4 sm:grid-cols-1 sm:grid-rows-6">
      <div className="flex row-span-3 md:row-span-3 sm:col-span-1 sm:row-span-3 justify-center ">
        <img className='object-contain' src={item.image} alt="product" />
      </div>
      <div className="flex flex-col gap-4 justify-between m-4 content-start ">
        <p className='text-left'>{item.brand}</p>
        <h2 className='text-left text-4xl'>{item.title}</h2>
        <h5 className='text-left'>{item.volume}</h5>
      </div>
      <div className="lg:row-span-1 m-4 text-justify md:row-span-2 sm:row-span-1">
        <p>{item.description}</p>
      </div>
      <div className="lg:row-span-1 lg:col-start-2 lg:row-start-3 md:col-start-1 md:row-start-4 md:col-span-2 py-4">
        <Button/>
      </div>
    </div>
  )
}