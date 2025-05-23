import { useState } from "react";

function Celda({ caracter, posicion, mePeganPapa }) {
    const [cuerpo, setCuerpo] = useState("");
    const handleClick = () => {
        if (cuerpo == "") {
            setCuerpo(caracter);
            mePeganPapa(caracter, posicion);
        }
    }

    return (
        <div className="celda" onClick={handleClick}>{cuerpo}</div>
    );
}

export default Celda;