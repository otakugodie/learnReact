import React from 'react'
import "./App.css";

function Actividad1({reyes}) {
    //console.log(reyes);    
    const url='https://html6.es/img/rey_';
    const resultado=reyes.map(e =>                 
        
        <div key={e.nombre} className='rey'>
            <span className='rojo'>{e.nombre.toUpperCase()} </span> 
            ha comido {e.vacasComidas*365*e.reinado} vacas en sus {e.reinado} años de reinado
        <img src={url+e.nombre.toLowerCase()+'.png'}></img>
        </div> 
    );
            
  return (
        <>
            {resultado}
        </>
    )
}

export default Actividad1