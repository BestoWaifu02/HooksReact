import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  //Vemos que retorna el useFetch
  /* Data retorna un array que en la posicion 0 es null */
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  //console.log(data);
  /*  transformar el null en false de un valor bool
     null=null
     !null=true
     !!null=false
  */
  const { author, quote } = !!data && data[0];
  console.log(author, quote);
  return (
    <div>
      <h1>BreakingBad Quotes </h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente Quote
      </button>
      <button className="btn btn-primary" onClick={decrement}>
        Anterior Quote
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset Quote
      </button>
    </div>
  );
};
