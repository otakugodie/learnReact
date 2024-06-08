import React, { useContext } from 'react'
import { Contexto } from "./contexto/Contexto.jsx";

function Pagina1() {
   const {color}=useContext(Contexto) 
  return (
    <div className='hijo' style={{background: color}}>
        Pagina1        
    </div>
  )
}

export default Pagina1