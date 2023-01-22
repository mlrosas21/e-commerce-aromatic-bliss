import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="flex flex-row items-center justify-between flex-wrap bg-gradient-to-r from-cyan-500 to-indigo-500 p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Dummy Shop</span>
        <ul className='flex flex-row gap-6 px-6'>
          <li><a href='#'>Categoría 1</a></li>
          <li><a href='#'>Categoría 2</a></li>
          <li><a href='#'>Categoría 3</a></li>
        </ul>
      </div>
      <CartWidget/>
    </nav>
  )
}

export default NavBar