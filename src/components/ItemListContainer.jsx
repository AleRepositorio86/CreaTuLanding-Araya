import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db}from '../firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { filtro, categoria } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      //setLoading(true);
      try {
        let q = collection(db,'productos');
        //let apiUrl = 'https://apimascotas-fw00.onrender.com/productos';

        if (filtro && categoria) {
          q = query(q, where('estado', '==', filtro), where('categoria', '==', categoria));
        } else if (filtro) {
          q = query(q, where('estado', '==', filtro));
        } else if (categoria) {
          q = query(q, where('categoria', '==', categoria));
        }

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

         setItems(data);

        /* 
        const queryParams = [];
        if (filtro) queryParams.push(`filtro=${filtro}`);
        if (categoria) queryParams.push(`categoria=${categoria}`);
        if (queryParams.length > 0) {
          apiUrl += `?${queryParams.join('&')}`;
        }

        const response = await fetch(apiUrl);
        const data = await response.json();
        setItems(data);
        */
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      } finally{
        setLoading(false);
      }
    };

    fetchPets();
  }, [filtro, categoria]);

  return (
    <section className="item-list-container">
      <h2>Catálogo de Productos</h2>
      {/* <ItemList items={items} /> */}
      {loading ? <p>Cargando productos...</p> : <ItemList items={items}/>}
    </section>
  );
};

export default ItemListContainer;
