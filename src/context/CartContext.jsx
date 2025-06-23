import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addItem = (product, qty) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing)
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i)
      else
        return [ ...prev, { ...product, qty } ]
    })
  }

  const removeItem = id => setItems(prev => prev.filter(i => i.id !== id))
  const clearCart = () => setItems([])
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalQty, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}
