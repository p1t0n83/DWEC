import React, { useState } from 'react';
import Tarea from './Tarea.jsx';
function Lista() {
    const [tareas, setTareas] = useState([]);

    const mostrar = (filtro) => {
        <ul>
            {tareas.filter(t => {
                if (t.estado === filtro) {
                    <Tarea nombre={t.nombre} estado={t.estado} />
                }
            })}
        </ul>
    }

    const crearTarea = (e) => {
        e.preventDefault();
        const nombre = e.target.form.nombre.value;
        if (nombre) {
            const nuevaTarea = new Tarea(nombre, "Abierta");
            setTareas([...tareas, nuevaTarea]);
        }
    }
    return (
        <ul>
            <form>
                <h2>Mostrar Tareas</h2>
                <button onClick={mostrar('Todas')}>Todas</button>
                <button onClick={mostrar('Abiertas')}>Abiertas</button>
                <button onClick={mostrar('Cerradas')}>Cerradas</button>
            </form>

            <form>
                <input type="text" value={e} onChange={crearTarea} placeholder="Nombre de la tarea" />
                <br />
                <button onClick={crearTarea}>Crear tarea</button>
                {console.log(tareas)}
            </form >
        </ul>
    );
}

export default Lista;