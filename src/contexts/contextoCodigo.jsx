import React, { useState } from 'react'

const ContextoCodigo = React.createContext();

const Proveedor = ({children}) => {  
const [codigo, setcodigo] = useState('21888');

 const [IdOficio, setIdOficio] = useState();
const [Oficio, setOficio] = useState({});

const guardarOficio = ( oficio ) =>  {

  setOficio( oficio )
}

const guadarIdOficio = ( id ) => {
setIdOficio( id )
} 

const ingresar = (codigoUsuario) =>{
  setcodigo(codigoUsuario)
}
  return (
    <ContextoCodigo.Provider value={{ codigo, ingresar, IdOficio, guadarIdOficio, Oficio , guardarOficio  }}>
    {children}
    </ContextoCodigo.Provider>
        
     
    )
}
 
export {Proveedor, ContextoCodigo}
