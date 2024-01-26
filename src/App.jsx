import React from 'react';
import Header from './components/Header/Header';
import Product from './components/Product/Product';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Provider>
      <Header />
      <Product />
      <Cart />
    </Provider>
  );
}

export default App;
