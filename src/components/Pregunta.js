import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({setPresupuesto, setPresupuestoRestante, setMostrarPregunta}) => {

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value), 10)
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        console.log("presupuesto: " + cantidad)
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return;
        }
        else setError(false);

        setPresupuesto(cantidad);
        setPresupuestoRestante(cantidad);
        setMostrarPregunta(false);
    }


    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ?
                <Error mensaje="El presupuesto es incorrecto" />
                : null
            }
            <form
                onSubmit={agregarPresupuesto}  
            >

                <input
                    type="number"
                    value={cantidad}
                    onChange={definirPresupuesto}
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Pregunta;