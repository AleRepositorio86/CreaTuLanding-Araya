import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, removeItem, clearCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  if (items.length === 0) return <p>Tu carrito está vacío.</p>;

  return (
    <section className='cart-container'>
      {items.map(p => (
        <CartItem key={p.id} item={p} removeItem={removeItem} />
      ))}
      <p>Total: ${totalPrice}</p>
      <button className='button-primary' onClick={clearCart}>Vaciar carrito</button>
      <button className='button-primary' onClick={() => navigate('/checkout')}>Terminar Compra</button>
    </section>
  );
};

export default Cart;
