import { Link } from "react-router-dom";

function NoPage() {
    return (<>
        <div>
            <h1>No existe la ruta</h1>
            <Link to="/">Volver al inicio</Link>
        </div>
    </>);
}

export default NoPage;