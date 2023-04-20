import { Button } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import FormOficioCom from "./components/FormOficioCom";
import GenerarPDF from "./components/GenerarPDF";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import OficioComision from "./components/OficioComision";
import SignIn from "./components/SignIn";
import SingUp from "./components/SingUp";
import VistaPDF from "./components/VistaPDF";

const App = () => {
  return (
    <>
  
  <div className="contenedor" >  
    <Header/>
  <Routes>
  <Route path="/" element={<SignIn/>} />
  <Route path="/perfil" element={ <Inicio/> }/>
<Route path="/SignUp" element={ <SingUp /> } />
  <Route path="/OficioComision" element={ <OficioComision/> } />
  <Route path="/FormOficioCom" element={ <FormOficioCom/> } />
  <Route path="/PDFview" element={ <GenerarPDF/> }  />
  <Route path="/PDF" element={ <VistaPDF/>} />
  </Routes>
  

  </div>
    </>
  );
};

export default App;
