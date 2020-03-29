import React, { useState } from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agregar gasto </h2>

            <div className="campo">
                <label>Tipo de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej: Comida"
                />
            </div>
            <div className="gasto">
                <label>Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej: 100"
                />
            </div>
            <input
                type="submit"
                classname="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

export default Formulario;