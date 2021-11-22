import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Categories from './components/Categories';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <div className="main-content">
          <Categories />
          <Switch>
            <Route exact path="/" element={<ItemListContainer />}/>
            <Route exact path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Switch>
          </div>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
