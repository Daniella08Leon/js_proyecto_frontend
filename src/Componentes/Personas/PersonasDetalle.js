import React from 'react'

const PersonasDetalle = (props) => {
    return (
    <div class="row">
        <div class="col s12 m6">
        <div class="card red accent-4 darken-1">
            <div class="card-content white-text">
            <span class="card-title">{ props.persona.nombre } { props.persona.apellido } </span>
            <p>Email: { props.persona.email }</p>
            <p>Empresa: { props.persona.empresa }</p>
            <p>Telefono: { props.persona.telefono }</p>
            </div>
        </div>
        </div>
    </div>
    
    )
}

export default PersonasDetalle