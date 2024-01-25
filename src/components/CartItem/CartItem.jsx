import React, { useContext } from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import './CartItem.css';
import propTypes from 'prop-types';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function CartItem({ data }) {

  const { B1_COD, B1_DESC, B1_PRV1, B1_TXTPRO2 } = data;
  const { cartItems, setcartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.B1_COD != B1_COD);
    setcartItems(updatedItems);

  };

  return ( 
    <section className="cart-item">
      <img 
        src={B1_TXTPRO2 ? B1_TXTPRO2 : 'https://www.aquarelapapeis.com.br/arquivos/produto_sem_foto.gif'}
        alt="imagem do produto"
        className="cart-item-image"
      />
      <div className="">
        <h3 className="cart-item-title">{B1_DESC}</h3>
        <h3 className="cart-item-price">{formatCurrency(B1_PRV1, 'BRL')}</h3>
        <button 
          type="button"
          className="button__remove-item"
          onClick={ handleRemoveItem }
        >
          <BsCartDashFill />        
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
