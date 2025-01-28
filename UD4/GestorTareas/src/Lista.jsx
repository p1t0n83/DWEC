import React, { useState } from 'react';
import Tarea from './Tarea.jsx';

function Lista() {
    const [tareas, setTareas] = useState([]);
    const [nombreTarea, setNombreTarea] = useState('');
    const [filtro, setFiltro] = useState('Todas');

    const mostrar = (filtro) => {
        return (
            <ul>
                {tareas.filter(t => t.estado === filtro || filtro === 'Todas').map((t, index) => (
                    <Tarea key={index} nombre={t.nombre} estado={t.estado} cambiarEstado={()=>cambiarEstado(index)} borrarTarea={()=>borrarTarea(index)} />
                ))}
            </ul>
        );
    };

  
    const borrarTarea = (index) => {
       
        const nuevasTareas = tareas.filter((tarea, i) => i !== index);
        setTareas(nuevasTareas);
    }
    const cambiarEstado = (index) => {
        const nuevasTareas = tareas.map((tarea, i) => {
            if (i === index) {
                return {
                    ...tarea,
                    estado: tarea.estado === "Abierta" ? "Cerrada" : "Abierta"
                };
            }
            return tarea;
        });
        setTareas(nuevasTareas);
    };


    const crearTarea = (e) => {
        e.preventDefault();
        if (nombreTarea) {
            const nuevaTarea = { nombre: nombreTarea, estado: "Abierta" };
            setTareas([...tareas, nuevaTarea]);
            setNombreTarea('');
        }
    };

    return (
        <div>
            <form>
                <h2>Mostrar Tareas</h2>
                <button type="button" onClick={() => setFiltro('Todas')}>Todas</button>
                <button type="button" onClick={() => setFiltro('Abierta')}>Abiertas</button>
                <button type="button" onClick={() => setFiltro('Cerrada')}>Cerradas</button>
            </form>

            <form onSubmit={crearTarea}>
                <input
                    type="text"
                    value={nombreTarea}
                    onChange={(e) => setNombreTarea(e.target.value)}
                    placeholder="Nombre de la tarea"
                />
                <br />
                <button type="submit">Crear tarea</button>
            </form>

            {mostrar(filtro)}
        </div>
    );
}

export default Lista;