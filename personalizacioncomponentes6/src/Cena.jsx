import React from 'react'


function Cena({rey,setTotal}) {
    //console.log({rey})
    const ruta='https://html6.es/img/rey_';
    const imagen= `${ruta}${rey.nombre.toLowerCase()}.png`;
    
    const comprar = (elemento) => {
        setTotal( (e)=>e+rey.precio );
        elemento.target.parentNode.parentNode.parentNode.style.display='none';
    }

    return (
        <>        
        <div className='rey' style={{backgroundColor: rey.color}} >
            <h1>{rey.nombre}</h1>
            <img src={imagen}></img>
            <div className='titulo'>Precio: </div>
            <div className='precio'>
                {rey.precio}€
                <div>
                    <button onClick={comprar}>Comprar</button>
                </div>
            </div>            
        </div>
        </>

  )
}

export default Cena