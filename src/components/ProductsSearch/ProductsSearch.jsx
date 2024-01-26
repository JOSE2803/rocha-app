import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsSearch.css';
import AppContext from '../../context/AppContext';

function ProductsSearch() {

  const { products } = useContext(AppContext);  

  return ( 
    <section className="products-search">
      {products.map((product) => <ProductCard key={product.B1_COD} data={product}/>)}
    </section>
  );
}

export default ProductsSearch;
