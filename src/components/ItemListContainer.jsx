import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { filtro, categoria } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        let apiUrl = 'https://apimascotas-fw00.onrender.com/productos';

        const queryParams = [];
        if (filtro) queryParams.push(`filtro=${filtro}`);
        if (categoria) queryParams.push(`categoria=${categoria}`);
        if (queryParams.length > 0) {
          apiUrl += `?${queryParams.join('&')}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchPets();
  }, [filtro, categoria]);

  return (
    <section className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <ItemList items={items} />
    </section>
  );
};

export default ItemListContainer;
