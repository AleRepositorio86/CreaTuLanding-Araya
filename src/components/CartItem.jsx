import React from 'react';

const CartItem = ({ item, removeItem }) => {
  return (
    <div style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
      <h4>{item.nombre}</h4>
      <p>Cantidad: {item.qty}</p>
      <p>Precio unitario: ${item.price}</p>
      <p>Subtotal: ${item.qty * item.price}</p>
      <button className='button-primary' onClick={() => removeItem(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
