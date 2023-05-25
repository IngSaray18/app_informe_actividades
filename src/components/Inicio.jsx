import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { db } from "./../firebase/firebase.Config";
import {  onSnapshot, doc } from "firebase/firestore";
import { ContextoCodigo } from "../contexts/contextoCodigo";

const Inicio = () => {
	const { codigo } = useContext(ContextoCodigo);
	const [usuario, setUsuario] = useState({});

	useEffect(() => {
		onSnapshot(doc(db, "profesores", codigo), (doc) => {
			setUsuario(doc.data());
		});
	}, []);
 
	return (
		<>
			<ContenedorEncabezado>
				<Titulo>{usuario.nombre}</Titulo>
				<ContenedorInfo>
					<FichaInfo>
						<Subtitulo>Codigo:</Subtitulo>
						<Parrafo>{usuario.codigo}</Parrafo>
					</FichaInfo>
					<FichaInfo>
						<Subtitulo>Grado Academico:</Subtitulo>
						<Parrafo>{usuario.grado}</Parrafo>
					</FichaInfo>
					<FichaInfo>
						<Subtitulo>Categoria:</Subtitulo>
						<Parrafo>{usuario.categoria}</Parrafo>
					</FichaInfo>
					<FichaInfo></FichaInfo>
				</ContenedorInfo>
							</ContenedorEncabezado>

			<NavLink to={"/OficioComision"}>
				<Boton>Nuevo oficio de comision</Boton>
			</NavLink>
		</>
	);
};



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
export default Inicio;
