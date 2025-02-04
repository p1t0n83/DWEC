import { useNavigate } from "react-router-dom";
import { memo } from "react";
function ListaLinea({ modulo }) {
    const { id = 0, nombre = "", horas = 0 } = modulo;
    const navegar = useNavigate();
    const handleClick = () => {
        navegar(`/detalles/${id}`);
    };
    return (
        <p>
            <strong>{nombre}</strong> - Horas: {horas} -{" "}
            <button onClick={handleClick}>Detalles</button>
        </p>
    );
}
export default memo(ListaLinea);
