import React, { useEffect, useState } from 'react'
import Item from './Item';
import './Item.css';

const ItemList = ({ item }) => {
  const [ loading, setLoading ] = useState(true);
  const [ items, setItems ] = useState([]);
  item === undefined ? console.log('nop') : console.log('yass');

  const getData = new Promise((res, rej) => {
    setTimeout(() => {
      setLoading(false);
      res(fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${item}&limit=20`));
    }, 2000);
  });

  useEffect(() => {
    getData
    .then(data => data.json())
    .then(data => setItems(data.results));
    console.log(items);
  }, [item]);
  return <>
    { item === undefined ? <div className="default-display">Ingrese en alguna categoria para ver los productos o busque el de su interes!</div>
    : <div className="item-list">
    { loading ? 'Loading..' : items.map(i => {
      return <Item data={i} key={i.id} />
    })}
  </div> }
  </>
};

export default ItemList;
