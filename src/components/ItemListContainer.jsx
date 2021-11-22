import React from 'react';
import { useParams } from 'react-router';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { id } = useParams();

  return <>
    { id === undefined ? <ItemList item={"antiparras"} /> : <ItemList item={id} /> }
  </>
};

export default ItemListContainer;
