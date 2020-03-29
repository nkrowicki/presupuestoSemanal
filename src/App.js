import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [presupuestoRestante, setPresupuestoRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false)

  // useEffect que actualiza el presupuesto restante
  useEffect(() => {

    if (crearGasto) {

      //Agregar nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      // Restar al presupuesto restante
      setPresupuestoRestante(presupuestoRestante-gasto.cantidad)
    }

    //Resetear a false
    setCrearGasto(false);

  }, [gasto, crearGasto, gastos, presupuestoRestante])

  return (
    <div className="container">
      <header>

        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">

          {mostrarPregunta ?
            (
              <Pregunta
                setPresupuesto={setPresupuesto}
                setPresupuestoRestante={setPresupuestoRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            )
            :
            (<div className="row">

              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}

                />
              </div>

              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  presupuestoRestante={presupuestoRestante}
                />
              </div>
            </div>
            )
          }

        </div>

      </header>
    </div>
  );
}

export default App;
