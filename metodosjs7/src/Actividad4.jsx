import React from 'react'

export default function Actividad4({reyes}) {
    
    const sumar = (e) =>{
        e.target.innerHTML=Number(e.target.innerHTML)+1;
        //console.log(e.target.innerHTML);
    }
    
    const filtrado = reyes.filter(valor=> valor.vacasComidas>=10 && valor.reinado >=10).map(valor=><div key={valor.nombre}>{valor.nombre} <div className='numero' onClick={sumar} >0</div></div>);
     
 
    return (
        <>{filtrado}
        </>
    )
}
