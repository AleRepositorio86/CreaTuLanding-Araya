import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ pet }) => {
  return (
    <div className="item">
      <h3>{pet.nombre}</h3>
            <img src={pet.imagen} alt={pet.nombre} />
      <p>ID: {pet.id}</p>
      <p>Categoría: {pet.categoria}</p>
      <p>Estado: {pet.estado}</p>
      <Link to={`/item/${pet.id}`}>Ver Detalles</Link>
    </div>
  );
};

export default Item;
