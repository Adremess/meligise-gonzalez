import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFireStore } from '../service/getFirestore';
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});
  const [ description, setDescription ] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFireStore();

    dbQuery.collection('items').doc(`${id}`).get()
      .then(data => setItem({...data.data()}))
      .finally(console.log(item));

    // const getItem = async () => {
    //   const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    //   const itemInfo = await fetch(`https://api.mercadolibre.com/items/${id}`);
    //   const descrptionParsed = await description.json();
    //   const itemInfoParsed = await itemInfo.json();
    //   setItem(itemInfoParsed);
    //   setDescription(descrptionParsed.plain_text);
    // };

    // setTimeout(() => {
    //   getItem();
    // });
  }, [id]);
  return <div className="itemDetailContainer-container">
    {item!=='' ? <ItemDetail item={item} /> : 'Cargando..'}
    
  </div>
};

export default ItemDetailContainer;
