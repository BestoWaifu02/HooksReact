import React from "react";
import { useCounter } from "../../Hooks/useCounter";
import { useFetch } from "../../Hooks/useFetch";
import "./layout.css";
import { useLayoutEffect, useRef, useState } from "react";
export const Layout = () => {
  const [boxSize, setboxSize] = useState({});
  const { counter, increment, decrement, reset } = useCounter();
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  const pTag = useRef();
  /* Nos sirve para sacar mediciones cuando algo cambia */
  useLayoutEffect(() => {
    setboxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect </h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
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
