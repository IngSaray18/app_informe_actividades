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
import { DateRangePicker, Loader, Message,  useToaster, Input, InputGroup, } from "rsuite";
import { useNavigate } from "react-router-dom";
import { profesores } from "../Data/profesores";
import { TagPicker } from "rsuite";
import AddOutlineIcon from '@rsuite/icons/AddOutline';
const FormOficioCom = () => {
	const navigate = useNavigate();
	const { guadarIdOficio } = useContext(ContextoCodigo);
	const [oficios, setoficios] = useState(0);
	const [usuario, setUsuario] = useState({});

	const [showNumeroVehiculo, setShowNumeroVehiculo] = useState(false);
	const [nombreExtra, setnombreExtra] = useState();
	const [Relacion, setRelacion] = useState();
	const [IMSS, setIMSS] = useState();
	const [Acompanniate, setAcompanniate] = useState([]);
	const [codigoacompanniante, setcodigoacompanniante] = useState();
	const [numeroVehiculo, setNumeroVehiculo] = useState(358);
	const { codigo } = useContext(ContextoCodigo);
	const [lugar, setlugar] = useState("");
	const [actividades, setactividades] = useState("");
	const [fecha, setfecha] = useState([null,null]);
	const [vehiculo, setVehiculo] = useState([]);
	const [personalDern, setpersonalDern] = useState([]);
	const [personasExtra, setPersonasExtra] = useState("");
	const [loading, setloading] = useState(false);
	useEffect(() => {
		onSnapshot(doc(db, "profesores", codigo), (doc) => {
			setUsuario(doc.data());
		});
	}, []);

	useEffect(() => {
		const getData = async () => {
			setAcompanniate([])
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
			
			// setloading(true)
			
			
			try {
				if (fecha[0] === null || vehiculo.length <=0 ) {
					toaster.push(message, {placement})
				}else{
					setloading( true )
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
					num_oficio: oficios != -Infinity? oficios : 1,
					nombre_solicitante: usuario.nombre,
					codigo_solicitante: usuario.codigo,
					acompanniantes_DERN: personalDern,
					acompanniantes_extra: Acompanniate,
					actividades_a_realizar: actividades,
					fecha: fecha,
					lugar_traslado: lugar,
					medio_transporte: vehiculo,
					numero_vehiculo: numeroVehiculo,
				});
				setloading(false)
				guadarIdOficio(docRef.id);
				navigate("/PDFview");
			 } } catch (error) {
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
	const handlePersonal = ( e)=>{
		if (personalDern.includes( e.target.value)){
			const index = personalDern.indexOf(e.target.value);
			personalDern.splice(index,1)
		}else{
			setpersonalDern( [...personalDern , e.target.value] )
		}
	}
	const handleClean = (e)=>{
		setpersonalDern([])
	}
	
	const [type, setType] =useState('warning');
	const [placement, setPlacement] =useState('topCenter');
	const toaster = useToaster();
  
	const message = (
	  <Message showIcon type={type} closable>
		{type}: porfavor llena todos los campos.
	  </Message>
	)
	
	const handleAcompanniantesExtra = () => {

			if (codigoacompanniante != null || codigoacompanniante != ""  ) {
		     setAcompanniate( [...Acompanniate,`${nombreExtra} ${Relacion} Codigo:${codigoacompanniante} IMSS:${IMSS}`] )
				
			}else{
		    setAcompanniate( [...Acompanniate,`${nombreExtra} ${Relacion} IMSS:${IMSS}`] )
  
			}

		setnombreExtra("")
		setRelacion("")
		setIMSS("")
		setcodigoacompanniante("")
	}

	return (

		!loading?
		<>
		
		 
		
			
		
		
			<Form  action="" onSubmit={handleSubmit}>
				
				<label htmlFor="Lugar">Lugar de traslado:</label>
				<input
					required
					type="text"
					className="Texto"
					name="Lugar"
					value={lugar}
					onChange={(e) => setlugar(e.target.value)}
				/>

				<label htmlFor="story">Actividades a realizar:</label>
				<textarea
					required

					id="story"
					name="story"
					rows="5"
					cols="33"
					value={actividades}
					placeholder="1. Práctica de campo con estudiantes de la materia de Botánica II de la Carrera de IRNA.                   2. Muestreo del proyecto de investigación “Árboles del bosque mesófilo”. "
					onChange={(e) => setactividades(e.target.value)}
				/>
				<label htmlFor="fecha">Fecha:</label>
				
				<DateRangePicker
					
					className=""
					showOneCalendar
					block
					format="dd-MM-yyyy"
					onOk={(Date) => {
						setfecha(Date);
					}}
					size="lg"
				/>
				

				<>
					<label>Medio de transporte (Puede saleccionar mas de uno):</label>
					<Opciones>
						<div>
							<input

								type="checkbox"
								id="oficial"
								name="oficial"
								value={"oficial"}
								onChange={(e) => handleOnChange(e)}
								onClick={() => setShowNumeroVehiculo(!showNumeroVehiculo)}
							/>
							<label htmlFor="oficial">Vehiculo oficial</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="personal"
								name="personal"
								value={"personal"}
								onChange={(e) => handleOnChange(e)}
							/>
							<label htmlFor="personal">Vehiculo personal</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="particular"
								name="particular"
								value={"particular"}
								onChange={(e) => handleOnChange(e)}
							/>
							<label htmlFor="particular">Vehiculo particular</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="otro"
								name="otro"
								value={"otro"}
								onChange={(e) => handleOnChange(e)}
							/>
							<label htmlFor="otro"> Vehiculo de la ECLJ</label>
						</div>
					</Opciones>
				</>
				{showNumeroVehiculo ? (
					
					<VehicleField 
					
					
					>
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
				<Profesorfield>
					<label htmlFor="acompanniantes">
						Acompañantes pertenecientes al personal adscrito al DERN
						(profesores, técnicos y administrativos)
					</label>

					<TagPicker 
					required

						size="lg"
						trigger='Enter'
						data={profesores.map((profesor) => ({
							label: profesor.NOMBRE3? profesor.NOMBRE3 : profesor.NOMBRE1,
							value: profesor.NOMBRE3? `${profesor.NOMBRE3}, ${profesor.CATEGORIA2}` : `${profesor.NOMBRE1}, ${profesor.CATEGORIA2}`,
							

						}))}
					onSelect={ ( value,item, e ) => handlePersonal(e) }
					onClean={ (e)=>  handleClean(e) }
						block
					/>
				</Profesorfield>

				<div>
					<label htmlFor="acompanniantesComisionado">
						Acompañantes bajo la responsabilidad de los comisionados (Separar por comas cada nombre)
					</label>
					{ Acompanniate.map( (persona)=> {
						return <h5> {persona} </h5>
					} )
					
					}
					<div>
						<FormAco>
					<div>
						<label htmlFor="">Nombre:</label>
						<input className="Texto" 
						value={nombreExtra}
						 onChange={(e)=>setnombreExtra(e.target.value)}
						/>

					</div>	
					<div>
						<label htmlFor="">Relacion:</label>
						<input className="Texto"
						value={Relacion}
							onChange={(e)=> setRelacion(e.target.value)}
						/>
					</div>	
					<div>
						<label htmlFor="">Codigo:</label>
						
						<input className="Texto"
						value={codigoacompanniante}
						onChange={(e)=> setcodigoacompanniante(e.target.value)}
						/>
					</div>

									
					<div>
						<label htmlFor="">IMSS:</label>
						
						<input className="Texto"
						value={IMSS}
							onChange={(e)=> setIMSS(e.target.value)}
						/>
					</div>

										
					</FormAco>
					
					<Btn type="button" onClick={()=> handleAcompanniantesExtra()} ><AddOutlineIcon fontSize='1.2em'/> Agregar acompañante </Btn>
					</div>
					
					

					
					
					
				</div>
				<Boton type="submit">Solicitar</Boton>
			</Form>
		</>
		:
		
		<Loader size="lg" backdrop content="Cargando..." vertical />
		
			
			
				  
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
	font-family: "Open Sans", sans-serif;
		width: 100%;
		border-radius: 5px;
		border: 2px solid #e2e2e2;
		font-size: 18px;
		padding: 10px;
		margin-bottom: 5px;
		color: #1f1f1f;

	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0px 10px;
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

const Profesorfield = styled.div`
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
const FormAco = styled.form`

display: flex ;
flex-direction: row;
justify-content: space-evenly;

div{
	margin-right: 10px; 
}

`;

const Btn = styled.button`


margin-top: 10px;
	background: #2B475C;
	font-weight: 600;
	font-family: "Open Sans", sans-serif;
	border: none;
	cursor: pointer;
	width: 25%;
	padding: 5px;
	border-radius: 5px;
	color: #fff;
	font-size: 16px;
	transition: 0.3s ease all;
	:hover {
		background: #213748;
	}
`


export default FormOficioCom;
