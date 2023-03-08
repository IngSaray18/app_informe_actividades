import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const RegistroInforme = () => {
  return (
    <div>
      <div>
    <Form>
       <label htmlFor="text">Periodo:</label>
       <input type="date" />   

       <label htmlFor="text">Al</label>
       <input type="date" />  

    </Form>        
      </div>
      <Lista>
     <ListaItem><NavLink to={'/menuDocencia'} >Docencia</NavLink> </ListaItem> 
    <ListaItem>Investigacion</ListaItem>
    <ListaItem>Gestion Academica</ListaItem>
    <ListaItem>Otros</ListaItem>


      </Lista>
    </div>
  )
}

const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 600px;
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

 
	label {
        margin-left: 20px;
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


const Lista = styled.ul`
list-style: none;
height: 72%;
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

export default RegistroInforme
