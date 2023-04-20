import { NavLink } from "react-router-dom";
import styled from "styled-components";

const OficioComision = () => {
    return (
        <Fondo>
            <h1>Oficios de Comision</h1>

            <Subtitulo>INSTRUCCIONES PARA ELABORAR OFICIOS DE COMISIÓN DEL DERN A PARTIR DEL 07 DE MARZO DE 2023</Subtitulo>

            <Lista>
                <li>En el Oficio de Comisión, sólo se comisionará al personal adscrito al DERN
                    (profesores, técnicos y administrativos).</li>
                <li>En vehículo, oficial es una unidad de la Universidad de Guadalajara, poner el
                    número económico (si va a la Estación Científica Las Joyas en los vehículos de
                    ellos, poner oficial de la ECLJ y quitar el número), personal es el del profesor,
                    particular es de otras instituciones, prestado o rentado. No se necesitan las
                    especificaciones de los vehículos personales y particulares.</li>
                <li>Los acompañantes van bajo la responsabilidad del o los comisionados.</li>
                <li>Un estudiante de posgrado que sale de comisión sin profesores, deberá ser
                    comisionado por el Coordinador del Posgrado correspondiente.</li>
                <li>Para salidas a prácticas de campo con estudiantes de pregrado del CUCSUR,
                    se utilizará el formato “Relación de Alumnos - Práctica Pregrado CUCSUR” con
                    la firma de visto bueno del Coordinador de la Carrera, como anexo al Oficio de
                    Comisión.</li>
                <li>Si la práctica de campo es con alumnos de la Carrera de IRNA durante sus
                    horarios de clases, se deberá llenar también el formato “Acuerdo entre
                    Profesores para Práctica de Campo”.</li>
                <li>Cualquier otra situación no prevista, favor de consultarla con la Jefatura del
                    Departamento.</li>
            </Lista>
            <NavLink to={'/FormOficioCom'} ><Boton>Solicitar nuevo oficio</Boton></NavLink>
            
        </Fondo>
    );
}

const Subtitulo = styled.h3`
margin: 20px 20px;
`
const Lista = styled.ul `
li{
    margin-bottom: 20px;
    padding: 0px 20px ;
}


`
const Boton = styled.button`
margin-top: 10px;
  background: #2B475C;
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
    background: #213748;
  }
`;

const Fondo = styled.div`
    background-color: white;
`

export default OficioComision;