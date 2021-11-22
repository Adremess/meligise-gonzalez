import React, { useState } from 'react'

export const CartContext = React.createContext([]);

const CartContextProvider = ({ children }) => {
  const [ cartList, setCartList ] = useState([]);
  const [ total, setTotal ] = useState(0);

  const addItem = (item, quantity) => {
    let newCart = cartList;
    let exist = false;
    let itemIndex = 0;
    for(let i = 0; i < cartList.length; i++) {
      if (cartList[i].item.id === item.id) {
        exist = true;
        itemIndex = i;
      }
    }
    if (exist) {
      newCart[itemIndex].quantity += quantity;
      setCartList(newCart);
      setTotal(total + quantity);
    } else {
      newCart.push({item, quantity});
      setCartList(newCart);
      setTotal(total + quantity);
    }
  };

  const removeItem = (itemId) => {
    let newCart = cartList.filter(el => el.item.id !== itemId);
    setCartList(newCart);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    let exist = cartList.some(el => el.item.id === id);
    return exist;
  };

  const getQuantity = () => {
    let total = 0;
    cartList.forEach(el => total += el.quantity);
    console.log('Cantidad items en carrito: ' + total);
    return total;
  }
  
  return <CartContext.Provider value={{
    addItem,
    removeItem,
    clear,
    isInCart,
    cartList,
    total,
    setTotal,
    getQuantity
    }}>
    {children}
  </CartContext.Provider>;
};

export default CartContextProvider;