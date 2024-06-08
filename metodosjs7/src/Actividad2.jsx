import React from 'react'

function Actividad2({reyes}) {
    //console.log(reyes);

    const eliminar = (j) => {
        j.target.parentNode.remove()
    }

    const filtro = reyes.filter(e=> !e.nombre.includes('g')).map(e=> <div key={e.nombre}>{e.nombre}<button onClick={eliminar}>Borrar</button></div>)
               

    return (
        <>
        {filtro}
        </>
    )
    
}

export default Actividad2