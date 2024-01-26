import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isCartVisible, setisCartVisible] = useState(false);
  const [onlyProduct, setOnlyProduct] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setcartItems,
    isCartVisible,
    setisCartVisible,
    onlyProduct,
    setOnlyProduct,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
