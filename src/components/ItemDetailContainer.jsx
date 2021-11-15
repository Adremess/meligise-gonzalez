import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState(null);
  const [ description, setDescription ] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const description = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
      const itemInfo = await fetch(`https://api.mercadolibre.com/items/${id}`);
      const descrptionParsed = await description.json();
      const itemInfoParsed = await itemInfo.json();
      setItem(itemInfoParsed);
      setDescription(descrptionParsed.plain_text);
    };

    setTimeout(() => {
      getItem();
    }, 2000);
  }, [id]);
  return <div className="itemDetailContainer-container">
    {item ? <ItemDetail item={item} description={description} /> : 'Cargando..'}
    
  </div>
};

export default ItemDetailContainer;
