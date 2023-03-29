import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ContextoCodigo } from '../contexts/contextoCodigo'
import { db } from '../firebase/firebase.Config';
const GenerarPDF = () => {
const { IdOficio }= useContext( ContextoCodigo )
const navigate = useNavigate()
const [Oficio, setOficio] = useState({});
const [idOfic, setidOfic] = useState(IdOficio);


useEffect(() => {

     const  getData =async () =>{  
        setidOfic( IdOficio )
        console.log(idOfic);
   const docRef = doc( db, 'oficio_comision', idOfic )
   const docSnap = await getDoc(docRef);

   setOficio( docSnap.data())
     
}
     getData(); 

     console.log( Oficio );
 }, []);

  return ( 
    <div>
<h1>  { Oficio.lugar_traslado} </h1>
<P> {idOfic} </P>
<P> {Oficio.nombre_solicitante} </P>

<Boton  onClick={ ()=> navigate('/PDF') } > Generar PDF </Boton>
    </div> 
  )
}
const Boton = styled.button`
	margin-top: 10px;
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

const P = styled.p  ` 
    font-family: "Open Sans", sans-serif;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
    margin-bottom: 5px;
    color: #1f1f1f;

`;
export default GenerarPDF
