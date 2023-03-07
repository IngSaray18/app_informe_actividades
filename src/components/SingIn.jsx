import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
const Formulario = () => {
	const [inputNombre, cambiarInputNombre] = useState('');
	const [inputCorreo, cambiarInputCorreo] = useState('');

	// Funcion que se encargara de validar los datos y enviar el formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Comprobamos validacion del formulario ...
		// Si todo es correcto enviamos el formulario

		console.log(inputNombre);
	}

	// Funcion que se encarga de cambiar el estado del inputNombre
	const handleInputNombre = (e) => {
		cambiarInputNombre(e.target.value);
	}
	
	// Funcion que se encarga de cambiar el estado del inputCorreo
	const handleInputCorreo = (e) => {
		cambiarInputCorreo(e.target.value);
	}

	return (
		<Contenedor>
			<Form action="" onSubmit={handleSubmit} className="formulario">
				<div>
					<label htmlFor="nombre">Codigo:</label>
					<input
						type="text"
						name="nombre"
						placeholder="Nombre"
						id="nombre"
						value={inputNombre}
						onChange={handleInputNombre}
					/>
				</div>
				<NavLink to={'/perfil'} ><button type="submit">Ingresar</button></NavLink>
				
                <Registro>
				<p>No estas registrado? <a>Registrarte</a>  </p>
			</Registro>
			</Form>
			
		</Contenedor>
	);
}  


const Contenedor = styled.div`


`;

const Registro = styled.div`
margin-top: 100 px;
padding-top:20px ;

a{
	color: blue
}


`;

export const Form = styled.form`
	min-width: 600px;
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

	label {
	display: block;
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 5px;
	color: #1f1f1f;
}
> div {
	margin-bottom: 20px;
}

input, textarea {
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	border-radius: 5px;
	border: 2px solid #e2e2e2;
	font-size: 18px;
	padding: 10px;
	margin-bottom: 5px;
	color: #1f1f1f;
}
button[type="submit"] {
	display: block;
	background: #0085FF;
	font-weight: 600;
	font-family: 'Open Sans', sans-serif;
	border: none;
	cursor: pointer;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	color: #fff;
	font-size: 16px;
	transition: .3s ease all;
}

button[type="submit"]:hover {
	background: #0051ff;
}

input[type="radio"] {
	width: auto;
}

`;
 
export default Formulario;