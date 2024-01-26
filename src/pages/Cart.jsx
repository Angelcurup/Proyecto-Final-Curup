import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {
    const {count} = useContext(CartContext)
    console.log(count);
  return (
    count.length === 0 ? (<h1>Carrito vacio</h1>) : null
  )
}

