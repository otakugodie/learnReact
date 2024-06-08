import React, { useContext } from 'react'
import { Contexto } from "./contexto/Contexto.jsx";

function Pagina2() {
   const {color}=useContext(Contexto) 
  return (
    <div className='hijo' style={{background: color}}>
        Pagina2        
    </div>
  )
}

export default Pagina2