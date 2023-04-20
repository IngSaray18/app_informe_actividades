import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { db } from "./../firebase/firebase.Config";
import { collection, getDoc, onSnapshot, doc } from "firebase/firestore";
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
				<Titulo>Bienvenido {usuario.nombre} </Titulo>
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
						<Subtitulo>Nombramiento:</Subtitulo>
						<Parrafo>{usuario.nombramiento}</Parrafo>
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

const Lista = styled.ul`
	list-style: none;
	height: 100%;
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
	justify-content: space-between; ;
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
`
export default Inicio;
