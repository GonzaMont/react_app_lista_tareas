import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";/* para usar id autogenerados*/
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons';/*para usar iconos*/
//import Alert from './Alerts/AlertDanger';

const FormularioTareas = ({tareas, cambiarTareas}) =>{
    
    const[inputTareas, cambiarInputTarea] = useState('');
    
    /*se ejecuta cada vez q hay un cambio en el input*/
    const handleInput = (e) =>{
        cambiarInputTarea(e.target.value);
    }
    
    
    const handleSubmit = (e) =>{/*e = el evento que recibe*/
        e.preventDefault();
       inputTareas !== "" ?
            cambiarTareas(
            [
                ...tareas,
                {
                    id: uuidv4(), /* funcion q genera un id unico*/
                    texto: inputTareas, /* valor del nuevo estado*/
                    completada: false
                }
            ]
        )
        :
        alert("no se puede dejar vacio");

        
        // <Alert>Texto de alerta</Alert>
        // <div className="alert alert-danger" role="alert">
        //     No se puede agregar tarea vacía
        // </div>
    }

    return(
        <form className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                type='text'
                className="formulario-tareas__input"
                placeholder="Escribe una tarea"
                value={inputTareas}
                onChange={(e) => handleInput(e)}/*la primera e es q obtengo el evento, luego se lo paso como parametro a la funcion*/
            />
            <button 
                type="submit"
                className="formulario-tareas__btn"
            >
            <FontAwesomeIcon
                icon={faPlusSquare}
                className='formulario-tareas__icono-btn'
            />
            </button>
        </form>
    );
}
export default FormularioTareas;