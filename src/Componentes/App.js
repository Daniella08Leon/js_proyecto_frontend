import React, { Component } from 'react'
import axios from 'axios';
import PersonasLista from './Personas/PersonasList';
import PersonasDetalle from './Personas/PersonasDetalle';
import PersonaForm from './Personas/PersonaForm'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      personas: [],
      personaActual: {}
    }
    //Vincular funcion
    this.actualizarPersonaActual = this.actualizarPersonaActual.bind(this)
  }

  //llamar a la api rest
  componentDidMount(){
    const url = "http://localhost:5000/personas"
    axios.get(url)
      .then((respuesta) => {
        this.setState({
          personas: respuesta.data
        })
        console.log(respuesta)
      })
      .catch((error) => {console.log(error)})
  }
  //Establecer el estado de la persona actual al ver detalle
  actualizarPersonaActual(persona){
    //actualizar state:
    this.setState({
      personaActual: persona 
    })
  }
  render (){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
            <nav>
              <div class="nav-wrapper red accent-4">
                <a href="#!" class="brand-logo center">Personas CRM</a>
              </div>
            </nav>
          </div>
          <div className="row">
            <div className="col s3">
              <PersonasLista 
                  listaPersonas={ this.state.personas } 
                  actualizarPersonaActual={ this.actualizarPersonaActual }
              />
            </div>
            <div className="col s9">
             <PersonasDetalle persona={this.state.personaActual}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
             <PersonaForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
