import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SingUp = () => {
  const handleSubmit = (e) => {
    e.preventDefautl();
  };

  return (
    <div>
      <Contenedor>
        <Form action="" onSubmit={handleSubmit} className="formulario">
          <div>
            <label htmlFor="codigo">Codigo:</label>
            <input
              type="text"
              name="codigo"
              placeholder=""
              id="codigo"
              value={""}
              onChange={""}
            />

            <label htmlFor="Nombre">Nombre Completo:</label>
            <input type="text" name="Nombre" id="Nombre" value={""} />

            <label htmlFor="Grado">Grado academico:</label>
            <input type="text" name="Grado" id="Grado" value={""} />

            <label htmlFor="Nombramiento">Nombramiento:</label>
            <input
              type="text"
              name="Nombramiento"
              id="Nombramiento"
              placeholder="ej. Prof. Asociado"
              value={""}
            />
            <div>
              <NavLink to={"/"}>
                <button type="submit">Registrarse</button>
              </NavLink>
            </div>
          </div>
        </Form>
      </Contenedor>
    </div>
  );
};

const Contenedor = styled.div``;

const Registro = styled.div`
  margin-top: 100 px;
  padding-top: 20px;

  a {
    color: blue;
  }
`;

export const Form = styled.form`
  min-width: 600px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  label {
    display: block;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
    color: #1f1f1f;
  }
  > div {
    margin-bottom: 20px;
  }

  input,
  textarea {
    font-family: "Open Sans", sans-serif;
    width: 100%;
    border-radius: 5px;
    border: 2px solid #e2e2e2;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 5px;
    color: #1f1f1f;
  }

  button {
    background: #0085ff;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    border: none;
    cursor: pointer;
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease all;
    margin-left: 50px;
    margin-right: 60px;
    margin-top: 20px;
  }

  button[type="submit"]:hover {
    background: #0051ff;
  }

  input[type="radio"] {
    width: auto;
  }
`;

export default SingUp;
