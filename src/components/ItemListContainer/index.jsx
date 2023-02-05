import React from 'react'
import {useParams} from 'react-router-dom'

export const ItemListContainer = ({greeting}) => {
  
  let {id} = useParams()

  return (
    <section className='w-full p-24 bg-slate-300 text-5xl'>
        <h1 className='uppercase'>{greeting}</h1>
        <p>{id}</p>
    </section>
  )
}