import {Link} from "react-router-dom";
import "./AppMenu.css";

function AppMenu(){
    return(<nav className="navegacion">
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/coches">Lista de coches</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>)
}

export default AppMenu;