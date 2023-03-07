import React from 'react'
import {Lista, ListaItem } from './Inicio'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const RegistroInforme = () => {
  return (
    <div>
      <div>
    <Form>
       <label htmlFor="text">Periodo:</label>
       <input type="text" />         
    </Form>        
      </div>
      <Lista>
     <NavLink to={'/menuDocencia'} ><ListaItem>Docencia</ListaItem></NavLink>  
    <ListaItem><a href="">Investigacion</a></ListaItem>
    <ListaItem>Gestion Academica</ListaItem>
    <ListaItem>Otros</ListaItem>


      </Lista>
    </div>
  )
}

const Form = styled.form`
    
    min-width: 600px;
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

	label {
        margin-right: 20px;
	font-weight: 600;
	font-size: 25px;
	margin-bottom: 5px;
	color: #1f1f1f;
}
input, textarea {
	font-family: 'Open Sans', sans-serif;
	width: 80%;
	border-radius: 5px;
	border: 2px solid #e2e2e2;
	font-size: 18px;
	padding: 10px;
	margin-bottom: 5px;
	color: #1f1f1f;
}
`

export default RegistroInforme
