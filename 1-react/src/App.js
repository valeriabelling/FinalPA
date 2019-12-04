import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './component/Header'
import NuevoEvento from './component/NuevoEvento';
import ListaEventos from './component/ListaEventos';


class App extends Component {

  state = {
    eventos: []
  }

  //Cuando la app se carga
  componentDidMount(){
    const eventosLS = localStorage.getItem('eventos');
    if (eventosLS){
      this.setState({
        eventos: JSON.parse(eventosLS)
      })
    }
  }

  //Cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('eventos', JSON.stringify(this.state.eventos))
  }

  crearNuevoEvento = datos => {
    //console.log(datos);
    //copiar el state actual
    const eventos = [...this.state.eventos, datos]

    //agregar el nuevo state
    this.setState({
      eventos
    })
  }

  // eliminar las citas del state
  eliminarEvento = id => {
    //console.log(id);
    const eventosActuales = [...this.state.eventos];
    const eventos = eventosActuales.filter(evento => evento.id !== id);

    this.setState ({eventos});
    
  }

  render(){
    return (
      <div className = "container">
        <Header titulo= "Administrador de eventos"/>
        <NuevoEvento crearNuevoEvento={this.crearNuevoEvento}/>
        <ListaEventos 
        eventos = {this.state.eventos}
        eliminarEvento = {this.eliminarEvento}/>
      </div>
    );
  }
  
  
  
}

export default App;