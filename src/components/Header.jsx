import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
const Header = () => {
  return (
    <Contenedor >
        <div>
            <NavLink to={'/perfil'} > <h1>DERN App</h1> </NavLink> 
        </div>
  </Contenedor>
  )
}

const Contenedor = styled.div`
 overflow: hidden;
  background-color: #0085FF;
  padding: 10px 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: white;

    a {
      text-decoration: none;
      color: white;
    }
`;

export default Header
