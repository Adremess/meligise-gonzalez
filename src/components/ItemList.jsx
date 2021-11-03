import React, { useEffect, useState } from 'react'
import Item from './Item';

const ItemList = ({ items }) => {
  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  const getData = new Promise((res, rej) => {
    setTimeout(() => {
      setLoading(false);
      res(items);
    }, 2000);
  });

  useEffect(() => {
    getData
    .then(res => setData(res));
  }, []);
  return <>
    { loading ? 'Loading..' : data.map(i => {
      return <Item data={i} key={i.title} />
    })}
  </>
};

export default ItemList;