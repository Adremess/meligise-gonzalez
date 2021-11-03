import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ImmortalHulk from '../assets/items-pics/ImmortalHulk.jpg';
import HouseOfX from '../assets/items-pics/HouseOfX.jpg';
import PowersOfX from '../assets/items-pics/PowersOfX.jpg';
import NewAvengers from '../assets/items-pics/NewAvengers.jpg';

const ItemListContainer = ({ greeting }) => {
  const items = [
    {id: 12, title: 'New Avengers Vol3', description: 'Comic event Time runs out!', price: 3250, pictureUrl: NewAvengers}, 
    {id: 65, title: 'House of X', description: 'New mutant era by Hickman', price: 750, pictureUrl: HouseOfX}, 
    {id: 2, title: 'Powers of X', description: 'New mutant era by Hickman', price: 750, pictureUrl: PowersOfX}, 
    {id: 87, title: 'Immortal Hulk', description: 'What are you at the end of all things? The man or The monster?', price: 3327, pictureUrl: ImmortalHulk}
  ];
  function onAdd(amount, e) {
    e.preventDefault();
    if (amount > 0) alert(`Se han agregado ${amount} items al carrito.`);
  }

  return <>
          <h2 className="greeting">{greeting}</h2>
          <ItemCount stock={7} initial={3} onAdd={onAdd}/>
          <ItemList items={items} />
  </>
};

export default ItemListContainer;
