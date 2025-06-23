import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'; 

const ItemDetail = ({ pet }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addItem(pet, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <h2>{pet.nombre}</h2>
      <div className='product-image-container'>
      <img src={pet.imagen} alt={pet.nombre}  style={{ maxWidth: '250px', maxHeight: '250px', width: '100%', height: 'auto' }} />
      </div>
      {/* <p>ID: {pet.id}</p> */}
      <p>Categoría: {pet.categoria}</p>
      <p>Estado: {pet.estado}</p>
      <p>Precio: ${pet.price}</p>

      {pet.stock === 0 ? (
        <p style={{ color: 'red' }}>Producto sin stock</p>
      ) : added ? (
        <Link to="/carrito" className="button-primary">
          Terminar compra
        </Link>
      ) : (
        <ItemCount stock={pet.stock || 10} initial={1} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetail;
