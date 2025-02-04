import { Link } from "react-router-dom";
import "./AppMenu.css";

function AppMenu() {
    return (<nav className="navegacion">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/pacientes">Pacientes</Link></li>
            <li><Link to="/usuarios">Usuarios</Link></li>
        </ul>
    </nav>);
}

export default AppMenu;