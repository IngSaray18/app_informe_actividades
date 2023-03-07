import React from 'react'
import { NavLink } from 'react-router-dom'
import { Lista, ListaItem } from './Inicio'

const MenuDocencia = () => {
  return (
    <div>
      <h1>Docencia</h1>

      <Lista>
        <ListaItem>Nuevo Grado</ListaItem>
         <NavLink to={'/actualizacionDisiplinar'} ><ListaItem>Actualizazion disiplinar</ListaItem></NavLink> 
        <ListaItem>Intercambio Academico</ListaItem>
        <ListaItem>Imparticion de cursos</ListaItem>
        <ListaItem>Cursos Ofertados En el ciclo</ListaItem>
        <ListaItem>Elaboracion de material didactico avalado por la acadermia</ListaItem>
        <ListaItem>Recepcion de estudiantes</ListaItem>
        <ListaItem>Tesis dirigidas o asesoradas</ListaItem>







      </Lista>

    </div>
  )
}

export default MenuDocencia
