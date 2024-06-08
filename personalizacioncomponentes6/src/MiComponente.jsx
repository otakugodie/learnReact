import React from 'react'

function MiComponente({rey}) {
    console.log({rey})
    return (
    <div>
        <h1>El rey {rey.nombre} come {rey.reses} vacas al día.</h1>
    </div>
  )
}

MiComponente.defaultProps={
    rey:{
        nombre: 'Godo',
        reses: 'pocas',
    }  
}

export default MiComponente