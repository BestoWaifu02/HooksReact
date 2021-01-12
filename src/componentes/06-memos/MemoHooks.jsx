import React, { useState, useMemo } from "react";
import "../02-useEffect/effects.css";
import { useCounter } from "../../Hooks/useCounter";
import { procesoPesado } from "../../helpers/procesoPesado";
export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  /* Recibe una funcion, si el counter cambia necesito una version memorizada
  
    SI EL VALOR DE CONTADOR CAMBIA ENTONCES SI SE VA A RENDERIZAR DE NUEVO EL COMPONENTE, PERO SINO SE MANTIENE EL VALOR NORMAL

    la funcion le dice cuando tiene que volver a memorizar la dependencia
  */
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        Increment
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide: {JSON.stringify(show)}
      </button>
    </div>
  );
};
