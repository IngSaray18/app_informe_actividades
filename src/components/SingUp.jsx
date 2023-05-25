import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "./../firebase/firebase.Config";
import { collection, addDoc, setDoc , doc } from "firebase/firestore";
import { Loader } from 'rsuite';

const SingUp = () => {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState('');
  const [grado, setGrado] = useState("");
  const [categoria, setCategoria] = useState("");
  const [password, setpassword] = useState('');
  const [confirmepass, setConfirmepass] = useState('');
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setloading(true)
    e.preventDefault();
    const datos = {
      nombre: nombre,
      codigo: codigo,
      grado: grado,
      categoria: categoria,
      password: password
    
    };
    
    
try {
  
  
  if (password === confirmepass ) {
    
    await setDoc( doc(db,'profesores', codigo), datos) 
    setloading(false)
    navigate('/')
    console.log('listo');

    setCodigo('')
    setNombramiento('')
    setNombre('')
    setGrado('')
  }else{
    console.log('las contrasennias tienen que coincidir');
  }
  



} catch (error) {
  console.log(error);
}

    
  };

  return (
    !loading ?
    <div>
      <Contenedor>
        <Form action="" onSubmit={handleSubmit} className="formulario">
          <div>
            <label htmlFor="codigo">Codigo:</label>
            <input
              type="text"
              name="codigo"
              placeholder=""
              id="codigo"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />

            <label htmlFor="Nombre">Nombre Completo (con grado academico) :</label>
            <input
              type="text"
              name="Nombre"
              id="Nombre"
              placeholder="ej. M.C. Pedro Saray Cevallos"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />

            <label htmlFor="Grado">Grado academico:</label>
            <input
              type="text"
              name="Grado"
              id="Grado"
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
            />
            <label htmlFor="Categoria">Categoria:</label>
            <input
              type="text"
              name="Categoria"
              id="Categoria"
              placeholder="ej. Profesor Investigador Asociado"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
            <label htmlFor="password">Introduzca contraseña</label>
              <input type="password" 
                      name= 'password' 
                       value={password}
                       onChange={ (e)=> setpassword(e.target.value) } />

                      <label htmlFor="confirmepassword">Confirmar contraseña</label>
                      <input type="password" 
                              name='confirmepassword'
                              value={confirmepass}
                       onChange={ (e)=> setConfirmepass(e.target.value) } />


            <div></div>
          </div>
          <button type="submit">Registrarse</button>
        </Form>
      </Contenedor>
    </div>
    :
    <Loader size="lg" backdrop content="Cargando..." vertical />
  );
};

const Contenedor = styled.div``;

const Registro = styled.div`
  margin-top: 100 px;
  padding-top: 20px;

  a {
    color: blue;
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

  input,
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

  button {
    background: #0085ff;
    font-weight: 600;
    font-family: "Open Sans", sans-serif;
    border: none;
    cursor: pointer;
    width: 30%;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    transition: 0.3s ease all;
    margin-left: 50px;
    margin-right: 60px;
    margin-top: 20px;
  }

  button[type="submit"]:hover {
    background: #213748;
  }

  input[type="radio"] {
    width: auto;
  }
`;

export default SingUp;
