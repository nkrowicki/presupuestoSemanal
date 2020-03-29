import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {
                gastos.map(gasto => (
                    <Gasto
                        key={gasto.id}
                        nombre={gasto.nombre}
                        cantidad={gasto.cantidad} />
                )
                )
            }

        </div>
    );
}

Listado.propTypes = {
    gastos: PropTypes.array.isRequired 
}

export default Listado;