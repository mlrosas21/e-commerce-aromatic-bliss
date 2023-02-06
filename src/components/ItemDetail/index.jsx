import React from 'react'

export const ItemDetail = ({item}) => {
  console.log(item)
  return (
    <div >
        <h1>{item.name}</h1>
        <h3>{item.brand}</h3>
        <p>{item.description}</p>
    </div>
  )
}