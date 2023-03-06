import React, {useState} from 'react';
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
			<form action="" onSubmit={handleSubmit} className="formulario">
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
				<button type="submit">Ingresar</button>
                
			</form>
		</Contenedor>
	);
}  


const Contenedor = styled.div`
min-height: 100vh;
	display: flex;
	align-items: flex-start;
	justify-content: center;

`;
 
export default Formulario;