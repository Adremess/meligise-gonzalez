import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFireStore } from '../service/getFirestore';
import ItemList from './ItemList';
import Loader from './Loader/Loader';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFireStore();
    const dbQuery = id ? db.collection('items').where('categoryId', '==', `${id}`) : db.collection('items');

    dbQuery.get()
    .then(data =>
      setItems(data.docs.map(prod => ({ id: prod.id, ...prod.data() })))
      )
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, [id])

  return <>
    {!loading ? <ItemList item={items} /> : <Loader /> }
  </>
};

export default ItemListContainer;
