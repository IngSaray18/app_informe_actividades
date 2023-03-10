import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FormularioActDispl = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Contenedor>
      <Form action="" onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="Nombre_curso">Nombre del curso o diplomado:</label>
          <input type="text" name="nombreCurso" placeholder="" id="nombre" />
          <label htmlFor="fecha">Fecha de realizacion</label>
          <input type="date" />
          <fieldset>
            <legend>Tipo De Curso</legend>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="Curso"
            />
            <label htmlFor="contactChoice1">Curso</label>


            <input id="Diplomado" name="Diplomado" type="radio" value={'Diplomado'} />
            <label htmlFor="Diplomado">Diplomado</label>
          </fieldset>

          <label htmlFor="horas">Numero de horas</label>
          <input type="text" name="horas" id="horas" />
          <label htmlFor="Institucion">Institucion que lo impartio</label>
          <input type="text" name="institucion" id="institucion" />
          <div>
            <NavLink to={"/MenuDocencia"}>
              <button type="submit">Registrar</button>
            </NavLink>
            <button>Agregar curso</button>
          </div>
        </div>
      </Form>
    </Contenedor>
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

  label,
  legend  {
    display: block;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 5px;
    color: #1f1f1f;
  }
  > div {
    margin-bottom: 20px;
  }

  input, fieldset,
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

export default FormularioActDispl;
