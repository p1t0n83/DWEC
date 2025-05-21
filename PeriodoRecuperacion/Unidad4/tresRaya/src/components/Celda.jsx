import { useState } from "react";
import "./Celda.css";
function Celda({ caracter, mePeganPapa }) {
    const [cuerpo, setCuerpo] = useState("");
    const handleClick = () => {
        if (cuerpo == "") {
            setCuerpo(caracter);
            mePeganPapa(caracter);
        }
    }

    return (
        <button className="celda" onClick={handleClick}>{cuerpo}</button>
    );
}

export default Celda;