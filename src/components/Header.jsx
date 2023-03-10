import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from "styled-components";
const Header = () => {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <Contenedor>
      <Wrapper>
        <div></div>
        <NavLink to={"/perfil"}>
          {" "}
          <h1>DERN App</h1>{" "}
        </NavLink>

         <Boton onClick={goBack} > <ArrowBackIcon  fontSize="large"  /></Boton> 
         
      </Wrapper>
      
    </Contenedor>
  );
};

const Contenedor = styled.div`
  overflow: hidden;
  background-color: #0085ff;
  padding: 10px 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse ;
justify-content: space-between;
`
const Boton = styled.button`
  
    display: block;
    background: #0085ff;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    border: none;
    cursor: pointer;

    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease all;
  
`

export default Header;
