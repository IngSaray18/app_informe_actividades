import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../assets/Standard Logo Files/WhiteonTransparent.png'
const Header = () => {
	const goBack = () => {
		console.log('h eb e');
	}
  return (
    <Contenedor >
        <div>
            <NavLink to={'/perfil'} > <Img src={ logo } alt="fopto"   /> </NavLink> 
        </div>
        <div> 
           <NavLink to={'/OficioComision'} ><AddOutlinedIcon fontSize='large'  /></NavLink> 
           <NavLink to={'/'} > <LogoutIcon fontSize='large' /> </NavLink> 
           </div>

          </Contenedor>
  )
}

const Contenedor = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
overflow: hidden;
  background-color: #2B475C;
  padding: 10px 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  color: white;
  height: 64px;
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
    background: #2B475C;
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
const Img = styled.img`
  height: 100%;

  max-width: 50vh;
`

export default Header;
