import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "./../firebase/firebase.Config";
import { collection, addDoc, doc, setDoc, increment, onSnapshot } from "firebase/firestore";
import { ContextoCodigo } from "../contexts/contextoCodigo";



const FormOficioCom = () => {

	const [usuario, setUsuario] = useState({});

  const { codigo } = useContext( ContextoCodigo )
  const [lugar, setlugar] = useState("");
  const [actividades, setactividades] = useState("");
  const [fecha, setfecha] = useState("");
  const [vehiculo, setVehiculo] = useState("");
  const [personalDern, setpersonalDern] = useState('');
  const [personasExtra, setPersonasExtra] = useState('');
useEffect(() => {
  onSnapshot (doc(db, "profesores", codigo), (doc) => {
    setUsuario(doc.data());
  });
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
         await addDoc( collection(db, `/profesores/${codigo}/oficios_comision/`),{

            acompanniantes_DERN: personalDern,
            acompanniantes_extra: personasExtra,
            actividades_a_realizar: actividades,
            fecha: fecha,
            lugar_traslasdo: lugar,
            medio_transporte: vehiculo

         } )

         await addDoc ( collection(db , 'oficio_comision', '2' ),{

            num_oficio: increment(+1),
            nombre_solicitante: usuario.nombre,
            codigo_solicitante: usuario.codigo,
            acompanniantes_DERN: personalDern,
            acompanniantes_extra: personasExtra,
            actividades_a_realizar: actividades,
            fecha: fecha,
            lugar_traslasdo: lugar,
            medio_transporte: vehiculo
         } )
         console.log('succes')
         setPersonasExtra
         
    } catch (error) {
        console.log(error);
    }


    const objOfi = {
      lugar: lugar,
      actividades: actividades,
      fecha: fecha,
      vehiculo: vehiculo,
      personalDern: personalDern,
      personasExtra: personasExtra
    };
    console.log(objOfi);
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

        <label htmlFor="Fecha">Fecha Programada</label>
        <input
          type="date"
          name="Fecha"
          className="Texto"
          value={fecha}
          onChange={(e) => setfecha(e.target.value)}
        />

        <fieldset>
          <legend>Medio de transporte (Puede saleccionar mas de uno):</legend>
          <Opciones>
            <div>
              <input
                type="checkbox"
                id="scales"
                name="scales"
                value={"oficial"}
                onChange={(e) => setVehiculo(e.target.value)}
              />
              <label htmlFor="scales">Vehiculo oficial</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                value={"personal"}
                onChange={(e) => setVehiculo(e.target.value)}
              />
              <label htmlFor="horns">Vehiculo personal</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="horns"
                name="horns"
                value={"particular"}
                onChange={(e) => setVehiculo(e.target.value)}
              />
              <label htmlFor="horns">Vehiculo particular</label>
            </div>
          </Opciones>
        </fieldset>
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
            value={personalDern}
            onChange={ (e)=> setpersonalDern(e.target.value) }

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
            onChange={(e)=> setPersonasExtra(e.target.value) }
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
export default FormOficioCom;
