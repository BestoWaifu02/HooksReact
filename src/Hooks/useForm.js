import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      //Aqui compuntamos target.name(tiene name) y target.value (tiene el valor) para que se pase el nuevo state {name:value} asi debe quedar
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange];
};
