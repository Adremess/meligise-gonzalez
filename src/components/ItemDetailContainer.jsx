import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFireStore } from '../service/getFirestore';
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";
import Loader from './Loader/Loader';

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFireStore();

    dbQuery.collection('items').doc(`${id}`).get()
      .then(data => setItem({...data.data()}));
  }, [id]);

  return <div className="itemDetailContainer-container">
    {item!=='' ? <ItemDetail item={item} /> : <Loader />}
    
  </div>
};

export default ItemDetailContainer;
