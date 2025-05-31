import { useNavigate } from "react-router-dom";


function ListaLinea({ modulo, tipo = "", borrarPadre = () => {} }) {
  const {
    id = 0,
    marca = "",
    modelo = "",
    anno = 0,
    km = 0,
    color = "",
    precio = 0,
    combustible = "",
    transmision = "",
    potencia = 0,
    puertas = 0,
    estado = "",
  } = modulo;

  const navegar = useNavigate();

  const handleClick = () => {
    if (tipo === "") {
      navegar(`coches/detalles/${id}`);
    } else {
      navegar(`detalles/${id}`);
    }
  };

  const borrar = (e) => {
    e.preventDefault();
    borrarPadre(id);
  };

  return (
    <div className="fila">
      <div className="columna">{marca}</div>
      <div className="columna">{modelo}</div>
      <div className="columna">{anno}</div>
      <div className="columna">{km} km</div>
      <div className="columna">{color}</div>
      <div className="columna">{precio.toFixed(2)} €</div>
      <div className="columna">{estado}</div>
      <div className="columna acciones">
        <button className="link-btn" onClick={handleClick}>
          Ver detalles
        </button>
        {tipo === "mantenimiento" && (
          <button className="btn-borrar" onClick={borrar}>
            Borrar
          </button>
        )}
      </div>
    </div>
  );
}

export default ListaLinea;
