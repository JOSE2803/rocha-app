import React, { useContext } from 'react';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {

  const { B1_DESC, B1_PRV1, B1_TXTPRO2, B2_QATU, B1_XDESC, ZTD_NOME, B1_COD } = data;
  const { cartItems, setcartItems } = useContext(AppContext);

  const handleAddCart = () => setcartItems([ ... cartItems, data]);

  return (
    <section className="product-card">

      <img
        src={B1_TXTPRO2 ? B1_TXTPRO2 : 'https://www.aquarelapapeis.com.br/arquivos/produto_sem_foto.gif'}
        alt="product"
        className="card___image"
      />      

      <div className="card__infos">
        
        <div className="card__infos-main">
          <h2 className="card__branch">{ZTD_NOME}</h2>
          <h2 className="card__price">{formatCurrency(B1_PRV1, 'BRL')}</h2>
          <h2 className="card__code">{B1_COD}</h2>
          <h2 className="card__title">{B1_DESC}</h2>
          <h2 className="card__title-extra">{B1_XDESC}</h2>
        </div>

        <div className="card__infos-quantity">
          <h2 className="card__quantity">Saldo: {B2_QATU}</h2> 
        </div>               
      </div>

      

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <FaCartPlus />
      </button>

    </section>
  );
}

ProductCard.propTypes = {
  data: propTypes.shape({
    B1_DESC: propTypes.string.isRequired,
    B1_PRV1: propTypes.number.isRequired,
    B1_TXTPRO2: propTypes.string,
    B2_QATU: propTypes.number.isRequired,
    B1_XDESC: propTypes.string.isRequired,
    ZTD_NOME: propTypes.string.isRequired,
    B1_COD: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
