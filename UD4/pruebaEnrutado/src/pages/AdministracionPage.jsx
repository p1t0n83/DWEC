import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SeguridadContext } from "../contexts/SeguridadProvider";
//import negocio from "../core/Negocio.js";
function AdministracionPage() {
    //const [tienePermisos, setTienePermisos] = useState(true);
    const { datos } = useContext(SeguridadContext);
    const navegar = useNavigate();
    //if (!tienePermisos) {
    if (!datos.tienePermisos) {
        return <Navigate to="/" />;
    }
    const handleClick = () => {
        if (confirm("Ir a inicio")) {
            navegar("/");
        }
    };
    return (
        <>
            <h1>Página de administración</h1>
            <button onClick={handleClick}>Volver a inicio</button>
        </>
    );
}
export default AdministracionPage;
