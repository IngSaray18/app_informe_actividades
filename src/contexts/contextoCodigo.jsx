import React, { useState } from 'react'

const ContextoCodigo = React.createContext();

const Proveedor = ({children}) => {  
const [codigo, setcodigo] = useState('21888');

 const [IdOficio, setIdOficio] = useState();


const guadarIdOficio = ( id ) => {
setIdOficio( id )
} 

const ingresar = (codigoUsuario) =>{
  setcodigo(codigoUsuario)
}
  return (
    <ContextoCodigo.Provider value={{ codigo, ingresar, IdOficio, guadarIdOficio }}>
    {children}
    </ContextoCodigo.Provider>
        
     
    )
}
 
export {Proveedor, ContextoCodigo}
