import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './componentes/Header'
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas  from './componentes/ListaTareas';

const App = () => {
  //obtenemos tareas guardadas de local storage
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? //si el localStorage en el item tareas hay algo, cargalo, sino un array vacio []
  JSON.parse(localStorage.getItem('tareas')) : [{}];

  //Establecemos el estado de las tareas
  const[tareas, cambiarTareas] = useState(tareasGuardadas);

  //Guardando el estado dentro de localStorage
  useEffect(() =>{
    /* guardo cambios cada vez q tareas cambia*/
    localStorage.setItem('tareas', JSON.stringify(tareas))
      
  }, [tareas])

  // Estado tareas completadas, se cargan por defecto cuando se carga la pagina
  const[mostrarCompletadas, cambiarMostrarCompletadas] = useState(false)
  // useEffect(() =>{
  //   /* guardo cambios cada vez q tareas cambia*/
  //   localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString())  
  // }, [mostrarCompletadas])

  return (
    <div className='contenedor'>
      <Header 
        mostrarCompletadas = {mostrarCompletadas}
        cambiarMostrarCompletadas = {cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
        />
    </div>
  );
}

export default App;
