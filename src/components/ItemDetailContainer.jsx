import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`https://apimascotas-fw00.onrender.com/productos/${id}`);
        const data = await response.json();
        setPet(data);
      } catch (error) {
        console.error('Error al obtener los detalles:', error);
      }
    };

    fetchPet();
  }, [id]);

  return (
    
    <section className="item-detail-container">
      <button onClick={() => navigate(-1)}>Volver</button>
      {pet ? <ItemDetail pet={pet} /> : <p>Cargando...</p>}
    </section>
    

  );
};

export default ItemDetailContainer;




