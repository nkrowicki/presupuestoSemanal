import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Formulario = ({ setGasto, setCrearGasto }) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // Funcion para cuando el usario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // Validar datos
        if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // Resetear el form
        setNombre('');
        setCantidad(0);


    }

    return (
        <form
            onSubmit={agregarGasto}>
            <h2>Agregar gasto </h2>

            {error ? <Error mensaje="Los campos deben estar llenos y no deben ser números negativos" /> : null}

            <div className="campo">
                <label>Tipo de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Comida"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="gasto">
                <label>Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 100"
                    value={cantidad}
                    onChange={e => setCantidad(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto:PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;