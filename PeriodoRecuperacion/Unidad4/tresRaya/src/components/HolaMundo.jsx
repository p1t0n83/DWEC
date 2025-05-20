import React, { useState } from "react";

function HolaMundo() {
    const [mensaje, setMensaje] = useState("Hola Mundo");
    const [mostrar, setMostrar] = useState(true);

    //Las funciones con lowerCamelCase
    const handlerClick = () => {
        setMostrar(!mostrar);
    };
    return (
        <div>
            {/* Comentario en JSX, fíjate como usamos {} para inyectar código
*/}
            <h1>{mostrar ? mensaje : "¿No me dices nada?"}</h1>
            <button onClick={handlerClick}>
                {mostrar ? "Ocultar mensaje" : "Mostrar mensaje"}
                
            </button>
        </div>
    );
}
export default HolaMundo;