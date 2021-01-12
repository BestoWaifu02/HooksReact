import React from "react";
/* Recibimos la funcion para ejecutarla al momento del click */
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("me volvi a generar :(");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
