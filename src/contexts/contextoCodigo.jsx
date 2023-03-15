import React, { useState } from 'react'

const ContextoCodigo = React.createContext();

const Proveedor = ({children}) => {  
const [codigo, setcodigo] = useState('');
const ingresar = (codigoUsuario) =>{
  setcodigo(codigoUsuario)
}
  return (
    <ContextoCodigo.Provider value={{ codigo, ingresar }}>
    {children}
    </ContextoCodigo.Provider>
        
    
    )
}
 
export {Proveedor, ContextoCodigo}
