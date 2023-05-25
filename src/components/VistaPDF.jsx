import { PDFViewer } from "@react-pdf/renderer";
import {
	Image,
	Page,
	Text,
	View,
	Document,
	StyleSheet,
} from "@react-pdf/renderer";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "./../firebase/firebase.Config";
import React, { useContext, useEffect, useState } from "react";
import { ContextoCodigo } from "../contexts/contextoCodigo";

import logo from "../assets/LOg.png";
import encabezado from "../assets/Encabezado.png";
import footer from "../assets/footer.png";
import { profesores } from "../Data/profesores";
const VistaPDF = () => {
	const { Oficio } = useContext(ContextoCodigo);
	const [personal, setpersonal] = useState();
	const [diaIda, setdiaIda] = useState();
	const [mesIda, setmesIda] = useState();
	const [annioIda, setannioIda] = useState();
	const [mesLetra, setmesLetra] = useState();

	const [diaRegreso, setdiaRegreso] = useState();
	const [mesregreso, setmesregreso] = useState();
	const [annioRegreso, setannioRegreso] = useState();
	const { codigo } = useContext(ContextoCodigo);
	const [usuario, setUsuario] = useState({});
	const current = new Date();
  	const date = `${current.getDate()}/${ convertirMes(current.getMonth()+1) }/${current.getFullYear()}`;


	useEffect(() => {
		onSnapshot(doc(db, "profesores", codigo), (doc) => {
			setUsuario(doc.data());
			if (profesores.includes( usuario.nombre)) {
			 const nombre =	profesores.find(nombre=> nombre === profesores.NOMBRE1 )

				console.log(nombre);
			}
			
		});
	}, []);
	useEffect(() => {
		const fecha = Oficio.fecha[0].toDate();
		const fecha2 = Oficio.fecha[1].toDate();

		setmesIda(fecha.getMonth() + 1);
		setdiaIda(fecha.getDate());
		setannioIda(fecha.getFullYear());

		setdiaRegreso(fecha2.getDate());
		setmesregreso(fecha2.getMonth() + 1);
		setannioRegreso(fecha2.getFullYear());

		
	}, []);

	
	function convertirMes(numeroMes) {
		const meses = [
		  "Enero",
		  "Febrero",
		  "Marzo",
		  "Abril",
		  "Mayo",
		  "Junio",
		  "Julio",
		  "Agosto",
		  "Septiembre",
		  "Octubre",
		  "Noviembre",
		  "Diciembre"
		];
	  
		if (numeroMes >= 1 && numeroMes <= 12) {
		  return meses[numeroMes - 1];
		} 
	  }
	  
		
		
		


	const styles = StyleSheet.create({
		title: {
			fontWeight: "heavy",
			textAlign: "center",
			fontSize: 14,
			marginTop: 15,
		},
		header: {
			flexDirection: "row",
		},
		page: {
			fontSize: 13,
			backgroundColor: "#ffffff",
		},
		section: {
			margin: 10,
			padding: 10,
			flexGrow: 1,
		},
		image: {
			width: 60,
			margin: 15,
		},

		head: {
			marginTop: 30,
			marginLeft: 10,
			width: 200,
			height: 54,
		},

		noOfdicio: {
			textAlign: "right",
			fontSize: 13,
			marginTop: 20,
			marginRight: 30,
			marginBottom: 30,
		},
		contenido: {
			marginTop: 10,
			marginLeft: 100,
			marginRight: 50,
			textAlign: "justify",
		},
		parrafo: {
			marginTop: 0,
		},
		footer: {
			marginTop: 30,
			textAlign: "center",
			fontSize: 13,
		},
		footerImg: {
			alignSelf: "center",
			marginTop: 30,
			width: 350,
		},
		presente:{
			marginBottom: 15,
		}
	});
	return ( 
		<div>
			<PDFViewer style={{ width: "100%", height: "100vh" }}>
				<Document>
					<Page size="A4" style={styles.page}>
						<View style={styles.header}>
							<Image src={logo} style={styles.image} />
							<Image src={encabezado} style={styles.head} />
						</View>
						<View>
							<Text style={styles.title}>OFICIO DE COMISIÓN </Text>
						</View>
						<View>
						{
						Oficio.num_oficio < 100?
								Oficio.num_oficio < 10?
								<Text style={ styles.noOfdicio}>DERN/OC/00{Oficio.num_oficio}/2023</Text>
								
								:
								<Text style={ styles.noOfdicio}>DERN/OC/0{Oficio.num_oficio}/2023</Text>
						:
						          <Text style={ styles.noOfdicio}>DERN/OC/{Oficio.num_oficio}/2023</Text>
						
						}
						</View>
						<View style={styles.contenido}>
						<Text>{usuario.nombre}, {usuario.categoria} </Text>

							{ Oficio.acompanniantes_DERN.map( (personas, index)=>{
								return <Text style={styles.nombres} key={index} >{personas} </Text>
							} ) }
							<Text style={styles.presente} >Presente.–</Text>
							<Text style={styles.parrafo}>
								Sírvase trasladar a: {Oficio.lugar_traslado} para realizar las
								actividades que a continuación se detallan:
							</Text>
							<Text style={styles.parrafo}>
								{Oficio.actividades_a_realizar}
							</Text>
							<Text style={styles.parrafo}>
								Dicho trabajo se llevará a cabo en el periodo comprendido del
								dia {diaIda}/{ convertirMes(mesIda)}/{annioIda} al {diaRegreso}/{convertirMes(mesregreso)}/
								{annioRegreso} 
								
								 {" "} utilizando{" "}
									
										 
									
								{Oficio.medio_transporte.map((element, index) => {
									if (element.length === 1 ) {
										if (element=== 'oficial') {

											return <Text> un vehiculo {element} numero: { Oficio.numero_vehiculo },  </Text>
		
											}
											return <Text> un vehiculo {element}  </Text>
									}

								
									if (element=== 'oficial') {

									return <Text> un vehiculo {element} numero: { Oficio.numero_vehiculo },  </Text>

									}
									return <Text> un vehiculo {element},  </Text>
								})}
								y reportará a este Departamento los resultados de la comisión.
							</Text>

							<Text style={styles.parrafo}>
								Las siguientes personas van como acompañantes, bajo la
								responsabilidad de los comisionados:{" "}
							{Oficio.acompanniantes_extra}
								
							</Text>

							<Text style={styles.parrafo}>
								Se agradece a las autoridades civiles y militares, brindarles
								las facilidades necesarias para el cumplimiento de esta
								comisión.
							</Text>
						</View>
						<View style={styles.footer}>
							<Text>A t e n t a m e n t e</Text>
							<Text>“Piensa y Trabaja” </Text>
							<Text> "{current.getFullYear()}, Año del fomento a la formación integral </Text>
							<Text> con una Red de Centros y Sistemas Multitemáticos” </Text>
							<Text>Autlán de Navarro, Jalisco, {date}.</Text>
						</View>
						<View style={styles.footer}>
							<Text>Mtra. Judith Cevallos Espinosa</Text>
							<Text>Jefa del Departamento</Text>
						</View>

						<View>
							<Image src={footer} style={styles.footerImg} />
						</View>
					</Page>
				</Document>
			</PDFViewer>
		</div>
	);
};

export default VistaPDF;
