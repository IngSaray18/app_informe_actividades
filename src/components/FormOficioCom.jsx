import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "./../firebase/firebase.Config";
import {
	collection,
	addDoc,
	doc,
	onSnapshot,
	getDocs,
} from "firebase/firestore";
import { ContextoCodigo } from "../contexts/contextoCodigo";
import { vehiculos } from "../Data/vehiculos";
import { DateRangePicker, Modal } from "rsuite";
import { useNavigate } from "react-router-dom";

const FormOficioCom = () => {
	const navigate = useNavigate();
	const { guadarIdOficio } = useContext(ContextoCodigo);
	const [oficios, setoficios] = useState(0);
	const [usuario, setUsuario] = useState({});
	const [showNumeroVehiculo, setShowNumeroVehiculo] = useState(false);
	const [numeroVehiculo, setNumeroVehiculo] = useState(358);
	const { codigo } = useContext(ContextoCodigo);
	const [lugar, setlugar] = useState("");
	const [actividades, setactividades] = useState("");
	const [fecha, setfecha] = useState([null, null]);
	const [vehiculo, setVehiculo] = useState([]);
	const [personalDern, setpersonalDern] = useState("");
	const [personasExtra, setPersonasExtra] = useState("");

	useEffect(() => {
		onSnapshot(doc(db, "profesores", codigo), (doc) => {
			setUsuario(doc.data());
		});
	}, []);

	useEffect(() => {
		const getData = async () => {
			const num_oficio = [];

			const querySnapshot = await getDocs(collection(db, "oficio_comision"));
			querySnapshot.forEach((doc) => {
				if (doc) {
					num_oficio.push(doc.data().num_oficio);
				} else {
					num_oficio.push(0);
				}
			});
			const numero_oficio = Math.max(...num_oficio) + 1;
			setoficios(numero_oficio);
			console.log(numero_oficio);
			return numero_oficio;
		};

		getData();
	}, [oficios]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(vehiculo);
		try {
			await addDoc(collection(db, `/profesores/${codigo}/oficios_comision/`), {
				acompanniantes_DERN: personalDern,
				acompanniantes_extra: personasExtra,
				actividades_a_realizar: actividades,
				fecha: fecha,
				lugar_traslado: lugar,
				medio_transporte: vehiculo,
				numero_vehiculo: numeroVehiculo,
			});

			const docRef = await addDoc(collection(db, "oficio_comision"), {
				num_oficio: oficios,
				nombre_solicitante: usuario.nombre,
				codigo_solicitante: usuario.codigo,
				acompanniantes_DERN: personalDern,
				acompanniantes_extra: personasExtra,
				actividades_a_realizar: actividades,
				fecha: fecha,
				lugar_traslado: lugar,
				medio_transporte: vehiculo,
				numero_vehiculo: numeroVehiculo,
			});
			alert("registrado correctamente con el ID: " + docRef.id);
			 guadarIdOficio ( docRef.id)
			 			 navigate("/PDFview");		
		} catch (error) {
			console.log(error);
		}

		
					

	};

	const handleOnChange = (e) => {
		if (vehiculo.includes(e.target.value)) {
			if (vehiculo.includes("oficial")) {
				setShowNumeroVehiculo(0);
			}
			const index = vehiculo.indexOf(e.target.value);
			vehiculo.splice(index, 1);
		} else {
			setVehiculo([...vehiculo, e.target.value]);
		}
	};

	return (
		<>
			<Form action="" onSubmit={handleSubmit}>
				<label htmlFor="Lugar">Lugar de traslado:</label>
				<input
					type="text"
					className="Texto"
					name="Lugar"
					value={lugar}
					onChange={(e) => setlugar(e.target.value)}
				/>

				<label htmlFor="story">Actividades a realizar:</label>
				<textarea
					id="story"
					name="story"
					rows="5"
					cols="33"
					value={actividades}
					onChange={(e) => setactividades(e.target.value)}
				/>
				<label htmlFor="fecha">Fecha:</label>
				<DateRangePicker className="Texto"
					showOneCalendar
					block
					format="dd-MM-yyyy"
					onOk={(Date) => {
						setfecha(Date);
					}}
				/>
				{/* \				 <label htmlFor="Fecha">Fecha Programada</label>
				<input
					type="date"
					name="Fecha"
					className="Texto"
					value={fecha}
					onChange={(e) => setfecha(e.target.value)}
				/>  */}

				<fieldset>
					<legend>Medio de transporte (Puede saleccionar mas de uno):</legend>
					<Opciones>
						<div>
							<input
								type="checkbox"
								id="scales"
								name="scales"
								value={"oficial"}
								onChange={(e) => handleOnChange(e)}
								onClick={() => setShowNumeroVehiculo(!showNumeroVehiculo)}
							/>
							<label htmlFor="scales">Vehiculo oficial</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="horns"
								name="horns"
								value={"personal"}
								onChange={(e) => handleOnChange(e)}
							/>
							<label htmlFor="horns">Vehiculo personal</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="horns"
								name="horns"
								value={"particular"}
								onChange={(e) => handleOnChange(e)}
							/>
							<label htmlFor="horns">Vehiculo particular</label>
						</div>
					</Opciones>
				</fieldset>
				{showNumeroVehiculo ? (
					<VehicleField>
						<label htmlFor="numeroVehiculo">Numero de Vehiculo:</label>
						<select
							value={numeroVehiculo}
							onChange={(e) => setNumeroVehiculo(e.target.value)}
						>
							{vehiculos.map((vehiculo) => {
								return (
									<option key={vehiculo.No_Ec} value={vehiculo.No_Ec}>
										{" "}
										{vehiculo.No_Ec} ( {vehiculo.MARCA} - {vehiculo.MODELO} -{" "}
										{vehiculo.APODO} )
									</option>
								);
							})}
						</select>
					</VehicleField>
				) : null}
				<div>
					<label htmlFor="acompanniantes">
						Acompañantes pertenecientes al personal adscrito al DERN
						(profesores, técnicos y administrativos).
					</label>
					<input
						type="text"
						name="acompanniantes"
						id="acompanniantes"
						className="Texto"
						placeholder={ usuario.nombre }
						value={personalDern}
						onChange={(e) => setpersonalDern(e.target.value)}
					/>
				</div>

				<div>
					<label htmlFor="acompanniantesComisionado">
						Acompañantes bajo la responsabilidad de los comisionados:
					</label>
					<input
						type="text"
						name="acompanniantesComisionado"
						id="acompanniantesComisionado"
						className="Texto"
						value={personasExtra}
						onChange={(e) => setPersonasExtra(e.target.value)}
					/>
				</div>
				<Boton type="submit">Solicitar</Boton>
			</Form>
		</>
	);
};

export const Form = styled.form`
	min-width: 600px;
	background: #fff;
	border-radius: 5px;
	padding: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

	label,
	legend {
		display: block;
		font-weight: 600;
		font-size: 20px;
		margin-bottom: 5px;
		color: #1f1f1f;
	}

	fieldset {
		margin-bottom: 20px;
	}
	> div {
		margin-bottom: 20px;
	}

	.Texto,
	textarea {
		font-family: "Open Sans", sans-serif;
		width: 100%;
		border-radius: 5px;
		border: 2px solid #e2e2e2;
		font-size: 18px;
		padding: 10px;
		margin-bottom: 5px;
		color: #1f1f1f;
	}
`;

const Opciones = styled.div`
	display: flex;
	flex-direction: row;

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0px 10px;
	}
`;
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

const VehicleField = styled.div`
	select {
		font-family: "Open Sans", sans-serif;
		width: 100%;
		border-radius: 5px;
		border: 2px solid #e2e2e2;
		font-size: 18px;
		padding: 10px;
		margin-bottom: 5px;
		color: #1f1f1f;
	}
	display: block;
	font-weight: 600;
	font-size: 20px;
	margin-bottom: 5px;
	color: #1f1f1f;
`;
export default FormOficioCom;
