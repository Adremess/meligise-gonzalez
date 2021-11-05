import React, { useEffect, useState } from 'react'
import Item from './Item';
import './Item.css';

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
    <div className="item-list">
      { loading ? 'Loading..' : data.map(i => {
        return <Item data={i} key={i.title} />
      })}
    </div>
  </>
};

export default ItemList;
