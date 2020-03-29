import React, { Fragment } from 'react';
import { revisarPresupuestos } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({ presupuesto, presupuestoRestante }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {presupuesto}
            </div>
            <div className={revisarPresupuestos(presupuesto, presupuestoRestante)}>
                Restante: {presupuestoRestante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    presupuestoRestante: PropTypes.number.isRequired
}
export default ControlPresupuesto;