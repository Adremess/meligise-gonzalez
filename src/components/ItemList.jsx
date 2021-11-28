import React, { useEffect, useState } from 'react'
import { getFireStore } from '../service/getFirestore';
import Item from './Item';
import './Item.css';

const ItemList = ({ item }) => {
  const [ loading, setLoading ] = useState(true);
  const [ items, setItems ] = useState([]);

  
  useEffect(() => {
    const dbQuery = getFireStore();

    dbQuery.collection('items').get()
      .then(data => setItems(data.docs.map(prod => ({ id: prod.id, ...prod.data() })))).finally(setLoading(false));
    console.log(items)
    // const getData = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     setLoading(false);
    //     res(fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${item}&limit=20`));
    //   });
    // });
    

    // getData
    // .then(data => data.json())
    // .then(data => setItems(data.results));
  }, [loading]);

  return <>
    { item !=='' ? 
     <div className="item-list">
    { loading ? 'Loading..' : items.map(i => {
      return <Item data={i} key={i.id} />
    })}
  </div> 
  : <div className="default-display">Ingrese en alguna categoria para ver los productos o busque el de su interes!</div>}
  </>
};

export default ItemList;
