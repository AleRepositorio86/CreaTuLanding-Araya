import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
//import { initializeApp } from 'firebase/app'
import {db}from '../firebaseConfig';
//const firebaseConfig = {
  // tus variables de entorno
//}
//initializeApp(firebaseConfig)
//const db = getFirestore()

const CheckoutForm = () => {
  const { items, totalPrice, clearCart } = useContext(CartContext)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const order = {
      items,
      total: totalPrice,
      date: serverTimestamp()
    }
    try {
      const docRef = await addDoc(collection(db, 'orders'), order)
      setOrderId(docRef.id)
      clearCart()
    } catch (err) {
      alert('Error al enviar orden')
    } finally {
      setLoading(false)
    }
  }

  if (orderId) return <p>¡Compra confirmada! ID: <strong>{orderId}</strong></p>

  return (
    <form onSubmit={handleSubmit}>
      <button className='button-primary' type="submit" disabled={loading}>
        {loading ? 'Procesando...' : 'Confirmar compra'}
      </button>
    </form>
  )
}

export default CheckoutForm
