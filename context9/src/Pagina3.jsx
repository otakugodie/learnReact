import React, { useContext } from 'react'
import { Contexto } from "./contexto/Contexto.jsx";

function Pagina3() {
   const {color}=useContext(Contexto) 
  return (
    <div className='hijo' style={{background: color}}>
        Pagina3        
    </div>
  )
}

export default Pagina3