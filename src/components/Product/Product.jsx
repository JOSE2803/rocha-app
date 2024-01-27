import React, { useContext } from 'react';
import './Product.css';
import AppContext from '../../context/AppContext';
import Loading from '../Loading/Loading';
import ProductOnly from '../ProductOnly/ProductOnly';
import ProductsSearch from '../ProductsSearch/ProductsSearch';

function Product() {

  const { products, loading, onlyProduct } = useContext(AppContext);

  return (
    (loading && <Loading />) || (
      <section className="products">
        {onlyProduct ? (
          products.map((product) => <ProductOnly key={product.B1_COD} data={product} />)
        ) : (
          <ProductsSearch />
        )}
      </section>)
  );
}

export default Product;
