import { useState } from "react";
export const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState);

  const increment = () => {
    //state =10
    setCounter(counter + 1);
  };
  const decrement = () => {
    //state =10
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
