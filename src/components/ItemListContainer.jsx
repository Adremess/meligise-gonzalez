import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getFireStore } from '../service/getFirestore';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFireStore();

    if (id) {
      dbQuery
      .collection('items')
      .where('categoryId', '==', `${id}`)
      .get()
      .then((data) =>
        setItems(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    } else {
      dbQuery
        .collection('items')
        .get()
        .then((data) =>
          setItems(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
        )
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id])

  return <>
    {!loading ? <ItemList item={items} /> : 'Cargando..'}
  </>
};

export default ItemListContainer;
