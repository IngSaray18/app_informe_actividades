import { onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "./../firebase/firebase.Config";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ContextoCodigo } from "../contexts/contextoCodigo";



const Formulario = () => {
  
       const [usuario, setUsuario] = useState({});

  
  const navigate = useNavigate();
  const {ingresar } = useContext(ContextoCodigo);

  const [codigo, setCodigo] = useState("");
     const [password, setpassword] = useState('');


useEffect(() => {
  if (password !== '') {
    onSnapshot (doc(db, "profesores", codigo), (doc) =>{

    setUsuario( doc.data())

  })
  }
  
}, [password]);

  // Funcion que se encargara de validar los datos y enviar el formulario
  const handleSubmit =  async (e) => {
    e.preventDefault();

  
    if (usuario.password === password) {
      console.log(codigo);
      ingresar(codigo)
      setpassword('')
      navigate('/perfil')
    }else{ 
      
      setpassword('')
      console.log(usuario.password , password)
    }     
  };

  // Funcion que se encarga de cambiar el estado del inputNombre
  const handleInputCodigo = async (e) => {
    setCodigo(e.target.value);

    

  };

  // Funcion que se encarga de cambiar e

  return (
    <Contenedor>
      <Form action="" onSubmit={handleSubmit} className="formulario">
        <div>
          <label htmlFor="codigo">Codigo:</label>
          <input
            type="text"
            name="nombre"
            placeholder=""
            id="nombre"
            value={codigo}
            onChange={handleInputCodigo}
          />
           <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            placeholder=""
            id="password"
            value={password}
            onChange={ (e)=> setpassword(e.target.value) }
          />
        </div>

          <button type="submit">Ingresar</button>

        <Registro>
          <p>
            No estas registrado? <NavLink to={"/SignUp"}>Registrarte</NavLink>{" "}
          </p>
        </Registro>
      </Form>
    </Contenedor>
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
  a {
    text-decoration: none;
  }
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
  button[type="submit"] {
    display: block;
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
  }

  button[type="submit"]:hover {
    background: #213748;
  }

  input[type="radio"] {
    width: auto;
  }
`;

export default Formulario;
