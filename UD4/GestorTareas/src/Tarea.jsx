import React from "react";

function Tarea({ nombre, estado, cambiarEstado, borrarTarea }) {
    const handleBorrar = () => {
        window.confirm("Seguro que quieres borrar?") ? borrarTarea() : "";
    };

    return (
        <li>
            {nombre} - {estado}
            <button type="button" onClick={cambiarEstado}>Cambiar Estado</button>
            <button type="button" onClick={() => handleBorrar()}>Borrar</button>
        </li>
    );
}

export default Tarea;