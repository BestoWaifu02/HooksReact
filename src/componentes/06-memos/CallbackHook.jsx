import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  /* useCallback 
    podemos mandar una funcion a un componente hijo
  */

  const [Counter, setCounter] = useState(10);
  /*  const increment = () => {
    setCounter(Counter + 1);
  };

  */
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallBackHook: {Counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
