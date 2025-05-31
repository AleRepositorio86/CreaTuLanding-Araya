import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ pet }) => {
  const handleAddToCart = (quantity) => {
    // Lógica para agregar al carrito
    console.log(`Agregado ${quantity} de ${pet.nombre} al carrito.`);
  };

  return (
    <div className="item-detail">
      <h2>{pet.nombre}</h2>
      <p>ID: {pet.id}</p>
      <p>Categoría: {pet.categoria}</p>
      <p>Estado: {pet.estado}</p>
      <ItemCount stock={pet.stock || 10} initial={1} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
