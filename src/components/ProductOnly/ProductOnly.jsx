import React from 'react';
import propTypes from 'prop-types';
import './ProductOnly.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductOnly({ data }) {

  console.log(typeof data);

  const { B1_TXTPRO2, ZTD_NOME, B1_PRV1, B1_COD, B1_DESC, B1_XDESC, B2_QATU } = data;

  return (    

    <section className="product-only">

      <div className="container-product">
        <div className="container-image">
          <img
            src={B1_TXTPRO2 ? B1_TXTPRO2 : 'https://www.aquarelapapeis.com.br/arquivos/produto_sem_foto.gif'}
            alt="product"
            className="product-image"
          />
        </div>
        <div className="contents-product">
          <div className="contenst-top">
            <h2 className="product-branch">{ZTD_NOME}</h2>
            <h2 className="product-price">{formatCurrency(B1_PRV1, 'BRL')}</h2>
          </div>
          <div className="contents-middle">
            <h2 className="product-code">{B1_COD}</h2>
            <h2 className="product-title">{B1_DESC}</h2>
            <h2 className="product-extra-title">{B1_XDESC}</h2>
          </div>
          <div className="contents-bottom">
            <h2 className="product-quantity">Saldo: {B2_QATU}</h2> 
          </div>  
        </div>
      </div>

      <div className="container-similares">
        AQUI FICARAM OS SIMILARES
      </div>

    </section>

  );
}

ProductOnly.propTypes = {
  data: propTypes.shape({
    B1_TXTPRO2: propTypes.string,
    ZTD_NOME: propTypes.string,
    B1_PRV1: propTypes.number,
    B1_COD: propTypes.string,
    B1_DESC: propTypes.string,
    B1_XDESC: propTypes.string,
    B2_QATU: propTypes.number,
  }).isRequired,
};

export default ProductOnly;
