import React from 'react';
import './InventoryLine.css';
import propTypes from 'prop-types';

function InventoryLine({ data }) {

  const { B2_FILIAL, B2_LOCAL, B2_QATU, B2_QPEDVEN, B2_RESERVA } = data;

  return ( 
    <div className="inventory-line">
      <h2 className="inventory-branch">
        {B2_FILIAL.trim()} / {B2_LOCAL.trim()}
      </h2>
      <h2 className="inventory-amount">
        {B2_QATU}
      </h2>
      <h2 className="inventory-net">
        {B2_QATU - B2_QPEDVEN - B2_RESERVA}
      </h2>
      
    </div>
  );
}

InventoryLine.propTypes = {

  data: propTypes.shape({
    B2_FILIAL: propTypes.string,
    B2_LOCAL: propTypes.string,
    B2_QATU: propTypes.number,
    B2_QPEDVEN: propTypes.number,
    B2_RESERVA: propTypes.number,
  }).isRequired,

};

export default InventoryLine;
