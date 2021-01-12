import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";
export const SimpleForm = () => {
  /* useEffect nos permite ejecutar algun efecto cuando algo suceda con nuestro componente */

  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;
  /* Si queremos que solo se ejecute una vez debemos mandarle como parametro un array vacia, podemos escuchar cambios en especifido dentro de la APP*/
  useEffect(() => {
    //  console.log("Hey!!!");
  }, []);

  useEffect(() => {
    //console.log("Form State cambio!!!");
  }, [formState]);

  useEffect(() => {
    //console.log("Email cambio!!!");
  }, [email]);

  //Recibimos el evento, desestructuramos el evento para sacar el target
  const handleInputChange = ({ target }) => {
    //console.log(e.target);
    /* Siempre que escribimos en el input dispara el effect porque cambia el estado */
    setFormState({
      ...formState,
      //Aqui compuntamos target.name(tiene name) y target.value (tiene el valor) para que se pase el nuevo state {name:value} asi debe quedar
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </div>
  );
};
