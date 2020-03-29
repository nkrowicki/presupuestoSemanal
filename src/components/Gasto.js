import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({ cantidad, nombre }) => (
    <li className="gastos">
        <p>
            {nombre}  <span className="gasto">${cantidad}</span></p>
    </li>
)

Gasto.propTypes = {
    cantidad: PropTypes.number.isRequired
}

export default Gasto;