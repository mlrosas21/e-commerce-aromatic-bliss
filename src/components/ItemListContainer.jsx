import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <section className='w-full p-24 bg-slate-300 text-5xl'>
        <h1 className='uppercase'>{greeting}</h1>
    </section>
  )
}

export default ItemListContainer