import { Link } from "react-router-dom";
import "./AppMenu.css";
import { useContext } from "react";
import { SeguridadContext } from "../contexts/SeguridadProvider";

function AppMenu() {
  const { datos } = useContext(SeguridadContext);
  return (
    <nav className="navegacion">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          {datos.usuario != "" && ( <Link to="/coches">Lista de coches</Link>) }
        </li>
        <li>
          {datos.usuario != "" ? ( <Link to="/login">Deslogearse</Link>):(<Link to="/login">login</Link>) }
        </li>
      </ul>
    </nav>
  );
}

export default AppMenu;
