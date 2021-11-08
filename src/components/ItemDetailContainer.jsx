import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [ data, setData ] = useState({});
  const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res( {
        title: "Winter Guard #3 (2021)",
        year: "Year : 2021 | Size : 29 MB",
        description: "A SEAT AT THE TABLE! The White Widow and Red Guardian are ready to strike a bargain — but not with the Winter Guard....",
        pictureUrl: "https://i1.wp.com/getcomics.info/share/uploads/2021/11/Winter-Guard-3-2021.jpg?fit=400%2C615&ssl=1",
        price: 6
      });
    }, 2000);
  });

  useEffect(() => {
    getItem.then(res => setData(res));
  }, []);
  return <div>
    <ItemDetail item={data} />
  </div>
};

export default ItemDetailContainer;
