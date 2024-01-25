import React, { useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Products.css';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {

  const { products, loading } = useContext(AppContext);  

  return ( 

    (loading && <Loading /> ) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.B1_COD} data={product}/>)
        }
      </section>)
  );
}

export default Products;
