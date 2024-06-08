import React from 'react'

function Map() {

    const reyes=[
        {
            nombre: 'Atanagildo',
            reindado:15,
            vacasComidas:9
        },
        {
            nombre: 'Ervigio',
            reindado:7,
            vacasComidas:3
        },
        {
            nombre: 'Ataúlfo',
            reindado:5,
            vacasComidas:16
        },
        {
            nombre: 'Teodorico',
            reindado:33,
            vacasComidas:12
        } 
    ]

    const resultado1=reyes.filter( valor => valor.vacasComidas>=10).
            map( valor => 
                <div key={valor.nombre} >El rey {valor.nombre} come {valor.vacasComidas} de vacas al día</div> 

            );

    return (
        <>
            <div className="caja">
                {resultado1}
            </div>
        </>
    )
}

export default Map