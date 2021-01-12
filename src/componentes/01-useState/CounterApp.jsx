import React, { useState } from "react";
import "./counter.css";
export const CounterApp = () => {
  //si mandamos objetos no se pueden renderizar
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2 } = state;

  //console.log(counter);
  /* COMO INCREMENTAR EL COUNTER 1? */
  return (
    <div>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({
            /* Como solo queremos cambiar el estado del counter 1 usamos el spread operator */
            ...state,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
    </div>
  );
};
