import React from 'react'
import Idiomas from "./Idiomas";
import Pagina from "./Pagina";
import './Idioma.css';



function Idioma() {
  return (
    <>        
        <div className='banderas'>
          <Idiomas />
        </div>
        <div className='contenido'>
          <Pagina />

        </div>
        
    </>
  )
}

export default Idioma