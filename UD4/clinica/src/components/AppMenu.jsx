import { Link } from "react-router-dom";
import "./AppMenu.css"; // Asegúrate de tener el CSS actualizado.

function AppMenu() {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark gambito-header">
      <div className="container-fluid">
        
        <Link className="navbar-brand fs-1 gambito-logo" to="/">
          <img src="/src/assets/logo.jpg" alt="Logo" className="logo" />
          Clinica PITON
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pacientes">
                Pacientes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/expedientes">
                Expedientes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default AppMenu;
