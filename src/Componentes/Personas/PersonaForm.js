import React, { Component } from 'react';
import axios from 'axios';

class PersonaForm extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

submitNuevaPersona(event){
    //prevenga el comportamiento por defecto del submit
    event.preventDefault()
    //enviar request al backend via axios
    axios.post('http://localhost:5000/personas', {
        nombre: this.refs.nombre.value,
        apellido: this.refs.apellido.value,
        email: this.refs.email.value,
        telefono: this.refs.telefono.value,
        empresa: this.refs.empresa.value
    }).then( (respuesta) => {console.log(respuesta)} )
      .catch( error => console.log(error))
}

    render(){
        return(
            <div className="row">
                <h4 className="center">Nuevo Contacto</h4>
                <form className="col s12" onSubmit={this.submitNuevaPersona.bind(this)}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" id="nombre" ref="nombre"/>
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="apellido" ref="apellido"/>
                            <label htmlFor="apellido">Apellido</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="email" id="email" ref="email"/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="telefono" ref="telefono"/>
                            <label htmlFor="telefono">Telefono</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" id="empresa" ref="empresa"/>
                            <label htmlFor="empresa">Empresa</label>
                        </div>
                        <div className="input-field col s6">
                            <button name="accion" type="submit" className="waves-effect waves-light btn-large red accent-4">
                                Guardar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default PersonaForm