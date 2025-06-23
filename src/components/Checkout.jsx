// src/components/Checkout.jsx
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.nombre || !formData.email || !formData.telefono || !formData.direccion) {
      alert('Por favor completa todos los campos');
      return;
    }

    setLoading(true);

    const order = {
      buyer: formData,
      items: items.map(({ id, nombre, qty, price }) => ({ id, nombre, qty, price })),
      total: totalPrice,
      createdAt: Timestamp.fromDate(new Date())
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      setError('Error al generar la orden. Intenta nuevamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if(orderId) {
    return (
      <div className='checkout-confirmation'>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate('/')}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit} className='checkout-form'>
        <input type="text" name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} />
        <input type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} />
        <input type="tel" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} />
        <button className='button-primary' type="submit" disabled={loading}>{loading ? 'Generando orden...' : 'Confirmar Compra'}</button>
      </form>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
};

export default Checkout;
