import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Inicio = () => {
  return (
    <>
      <h1>Bienvenido Usuario </h1>
      <ContenedorInfo>
        <FichaInfo>
          <h3>Codigo:</h3>
          <p>0707808</p>
        </FichaInfo>
        <FichaInfo>
          <h3>Grado Academico:</h3>
          <p>Doctorado</p>
        </FichaInfo>
        <FichaInfo>
          <h3>Nombramiento:</h3>
          <p>Prof.Inv.Asociado</p>
        </FichaInfo>
        <FichaInfo>
          <h3>Antiguedad:</h3>
          <p>23 years</p>
        </FichaInfo>
      </ContenedorInfo>

      <h3>Informes:</h3>

      <Lista>
        <ListaItem>2017</ListaItem>
        <ListaItem>2018</ListaItem>
        <ListaItem>2019</ListaItem>
        <ListaItem>2020</ListaItem>
        <ListaItem>2021</ListaItem>
        <ListaItem>2022</ListaItem>
      </Lista>

      <Boton ><NavLink to={'/registro'} >gregar nuevo informe</NavLink> </Boton>
    </>
  );
};

export const Lista = styled.ul`
  list-style: none;
  height: 100%;
  overflow: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListaItem = styled.li`
  height: 60px;
  padding: 0 20px;
  align-items: center;
  color: #4b4b4b;
  font-size: 18px;
  display: grid;
  grid-template-columns: auto 1fr auto;

  :nth-child(even) {
    background: #f3f3f3;
  }
  :hover {
    opacity: 0.5;
  }
`;
const Boton = styled.button`
  background: #0085ff;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  border: none;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s ease all;
  :hover {
    background: #0051ff;
  }
`;
const ContenedorInfo = styled.div   `
    padding: 30px 50px;
`

const FichaInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; ;
`;
export default Inicio;
