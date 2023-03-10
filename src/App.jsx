import { Button } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FormOficioCom from "./components/FormOficioCom";
import FormularioActDispl from "./components/FormularioActDispl";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import MenuDocencia from "./components/MenuDocencia";
import OficioComision from "./components/OficioComision";
import RegistroInforme from "./components/RegistroInforme";
import SignIn from "./components/SignIn";
import SingUp from "./components/SingUp";

const App = () => {
  return (
    <>
  
  <div className="contenedor" >  
    <Header/>
  <Routes>
  <Route path="/" element={<SignIn/>} />
  <Route path="/perfil" element={ <Inicio/> }/>
  <Route path="/registro" element={ <RegistroInforme/> }/>
<Route path="/SignUp" element={ <SingUp /> } />
  <Route path="/menuDocencia" element={ <MenuDocencia/> }/>
  <Route path="/actualizacionDisiplinar" element={ <FormularioActDispl/> }/>
  <Route path="/OficioComision" element={ <OficioComision/> } />
  <Route path="/FormOficioCom" element={ <FormOficioCom/> } />
  </Routes>
  

  </div>
    </>
  );
};

export default App;
