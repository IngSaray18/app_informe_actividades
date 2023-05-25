import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ContextoCodigo } from "../contexts/contextoCodigo";
import styled from "styled-components";
import { db } from "./../firebase/firebase.Config";
import { onSnapshot, doc, collection } from "firebase/firestore";
import OficioComision from "./OficioComision";

const Admin = () => {
        const { codigo } = useContext(ContextoCodigo);
        const [oficios, setoficios] = useState([]);    
        const [Usuario, setUsuario] = useState([]);
        useEffect(() => {

            onSnapshot(doc(db, "profesores", codigo), (doc) => {
                setUsuario(doc.data());
            });

            onSnapshot(collection(db, "oficio_comision"), 
            (doc) => {
                const arregloOficios = doc.docs.map( (documento)=>{
                    return { ...documento.data(), id : documento.id }
                })
                setoficios( arregloOficios )
            });
        }, []);

  return (
    
     <>
			<ContenedorEncabezado>
				<Titulo>{Usuario.nombre}</Titulo>
                <Titulo> Oficios </Titulo>
				<ContenedorInfo>
                    <FichaInfo>
                        <Subtitulo> Nombre Solicitante </Subtitulo>
                        <Subtitulo> Numero de oficio </Subtitulo>
                    </FichaInfo>
					{ oficios.map( (oficio)=>{
                        return (
                            <FichaInfo key={oficio.id} >
                                <Subtitulo> {oficio.nombre_solicitante} </Subtitulo>

                                <Subtitulo> {oficio.num_oficio} </Subtitulo>
                            </FichaInfo> 
                        );
                            
                        
                    } ) }
				</ContenedorInfo>
				</ContenedorEncabezado>

            
			
		
    </>
  )
}

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
const ContenedorInfo = styled.div`
	padding: 30px 50px;
`;

const FichaInfo = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-right: 20px;
	border: 1px solid;
	
`;

const Titulo = styled.h1`
	padding-left: 20px;
	padding-top: 10px;
`;
const Subtitulo = styled.h3`
	padding-left: 20px;
	padding-top: 10px;
	padding-bottom: 20px;
`;
const ContenedorEncabezado = styled.div`
	background-color: white;
`;
const Parrafo = styled.p`
	font-size: x-large;
	padding-top: 20px;
`

export default Admin
