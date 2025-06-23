import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import { getFirestore, doc, getDoc } from 'firebase/firestore';
//import { initializeApp } from 'firebase/app';
//import firebaseConfig from '../firebaseConfig';
import {db} from '../firebaseConfig';

//initializeApp(db);
//const db = getFirestore();

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const docRef = doc(db, 'productos', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPet({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn('Producto no encontrado');
        }
        //const response = await fetch(`https://apimascotas-fw00.onrender.com/productos/${id}`);
        //const data = await response.json();
        //setPet(data);
      } catch (error) {
        console.error('Error al obtener los detalles:', error);
      }finally{
        setLoading(false);
      }
    };

    fetchPet();
  }, [id]);

  return (
    
    <section className="item-detail-container">
      <button onClick={() => navigate(-1)}>Volver</button>
      {/* {pet ? <ItemDetail pet={pet} /> : <p>Cargando...</p>} */}
      {loading ? <p>Cargando detalle...</p> : pet ? <ItemDetail pet={pet} /> : <p>Producto no encontrado</p>}
    </section>
    

  );
};

export default ItemDetailContainer;




