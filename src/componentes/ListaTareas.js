import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({tareas, cambiarTareas, mostrarCompletadas}) =>{/*destructuring tareas*/

    const toogleCompletada = (id) => {
        cambiarTareas(tareas.map( (tarea) => {
            if(tarea.id === id){
                return {...tarea, completada: !tarea.completada}/*de tarea se modifica solo el valor de completada*/
            }
            return tarea;
        }));
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map( (tarea, index) => {
            if(tarea.id === id){
                return {...tarea, texto: nuevoTexto, key:index}
            }
            return tarea;
        }));
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter( (tarea) => {/*filter retorna un arreglo sin el valor que le pase, en este caso tarea*/
            if(tarea.id !== id){
                return tarea //Creo un arreglo con las tareas distintas al id a buscar
            }
            return;
        }));
    }
    
    return(
        <ul className='lista-tareas'>
           {
           tareas.length > 0 ? tareas.map((tarea) =>{/* accedo a cada tarea dentro de tareas*/
                if(mostrarCompletadas){
                    return <Tarea 
                            key={tarea.id}
                            tarea = {tarea}
                            toogleCompletada ={toogleCompletada}
                            editarTarea ={editarTarea}
                            borrarTarea ={borrarTarea}
                        />
                // Si la tarea no esta completada, la devolvemos
                }else if(!tarea.completada){
                    return <Tarea 
                    key={tarea.id}
                    tarea = {tarea}
                    toogleCompletada ={toogleCompletada}
                    editarTarea ={editarTarea}
                    borrarTarea ={borrarTarea}
                />
                }
            return;         
           })
            : <div className='lista-tareas__mensaje'> -- No hay tareas agregadas --</div>
            }
        </ul>

    );   
}
export default ListaTareas;