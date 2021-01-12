import React, { useEffect } from "react";
import { useForm } from "../../Hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  /* useEffect nos permite ejecutar algun efecto cuando algo suceda con nuestro componente */

  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  //Recibimos el evento, desestructuramos el evento para sacar el target
  // const handleInputChange = ({ target }) => {
  //console.log(e.target);
  /* Siempre que escribimos en el input dispara el effect porque cambia el estado */
  // setFormState({
  // ...formState,
  //Aqui compuntamos target.name(tiene name) y target.value (tiene el valor) para que se pase el nuevo state {name:value} asi debe quedar
  //[target.name]: target.value,
  //});
  //};

  useEffect(() => {
    console.log("Email Cambio");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="*****"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
