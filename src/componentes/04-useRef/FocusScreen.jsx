import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const hanldeClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Su Nombre"
        className="form-control"
      />
      <button className="btn btn-outline-primary mt-5" onClick={hanldeClick}>
        focus
      </button>
    </div>
  );
};
