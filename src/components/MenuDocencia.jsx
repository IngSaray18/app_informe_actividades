import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuDocencia = () => {
  return (
    <>
      <ContenedorEncabezado>
        <Titulo>Docencia</Titulo>
      </ContenedorEncabezado>
      <Lista>
        <ListaItem>Nuevo Grado</ListaItem>
        <ListaItem>
          {" "}
          <NavLink to={"/actualizacionDisiplinar"}>
            Actualizazion disiplinar
          </NavLink>
        </ListaItem>
        <ListaItem>Intercambio Academico</ListaItem>
        <ListaItem>Imparticion de cursos</ListaItem>
        <ListaItem>Cursos Ofertados En el ciclo</ListaItem>
        <ListaItem>
          Elaboracion de material didactico avalado por la acadermia
        </ListaItem>
        <ListaItem>Recepcion de estudiantes</ListaItem>
        <ListaItem>Tesis dirigidas o asesoradas</ListaItem>
      </Lista>
    </>
  );
};

const Lista = styled.ul`
  list-style: none;
  height: 100%;
  overflow: auto;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ListaItem = styled.li`
  height: 60px;
  padding: 0 20px;
  align-items: center;
  color: #4b4b4b;
  font-size: 18px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  a {
    text-decoration: none;
  }
  :nth-child(even) {
    background: #f3f3f3;
  }
  :hover {
    opacity: 0.5;
  }
`;

const Titulo = styled.h1`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
`;
const Subtitulo = styled.h3`
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 20px;
`;
const ContenedorEncabezado = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export default MenuDocencia;
