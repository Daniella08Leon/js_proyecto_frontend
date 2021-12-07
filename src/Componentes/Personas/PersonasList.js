import React from 'react'

const PersonasLista = ( props ) => {
    return (
        <ul className="collection with-header red" >
            <li className="collection-header"><h4>Contactos:</h4></li>
            {
                props.listaPersonas.map( ( item )=> { 
                    return(
                        <a className="collection-item"  
                            href="#!"
                            key={item._id} onClick={ props.actualizarPersonaActual.bind(this , item) }  >
                            { item.nombre } { item.apellido }
                        </a>
                    )
                } )
            }
      </ul>
    )
}

export default PersonasLista