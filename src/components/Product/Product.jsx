import React, { useContext } from 'react';
import './Product.css';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import ProductOnly from '../ProductOnly/ProductOnly';
import ProductsSearch from '../ProductsSearch/ProductsSearch';

function Product() {

  const { products, loading, onlyProduct } = useContext(AppContext);  

  console.log(products, loading, onlyProduct);

  return ( 
    (loading && <Loading /> ) || (
      <section className="products">
        {onlyProduct ? (
          products.map((product) => <ProductOnly key={product.B1_COD} data={product}/>)
        ) : (
          products.map((product) => <ProductsSearch key={product.B1_COD} data={product}/>)
        )}
      </section>)
  );
}

export default Product;
