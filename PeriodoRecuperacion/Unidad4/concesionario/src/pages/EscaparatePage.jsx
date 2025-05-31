import { useContext, useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import ListaLinea from "../components/ListaLinea";
import { SeguridadContext } from "../contexts/SeguridadProvider";
import { useNavigate } from "react-router-dom";

function EscaparatePage() {
  const [coches, setCoches] = useState([]);
  const { datos } = useContext(SeguridadContext);
  const navegar = useNavigate();

  const handleClick = () => {
    navegar("/login");
  };

  const obtenerCoches = async () => {
    const listaCoches = await $negocio.obtenerCoches();
    setCoches(listaCoches);
  };

  useEffect(() => {
    obtenerCoches();
  }, []);

  useEffect(() => {
    console.log("Datos del contexto:", datos);
  }, [datos]);

  return (
    <>
      <h1>Página de inicio</h1>

      <div style={{ marginBottom: "15px" }}>
        {datos.tienePermisos === true && datos.usuario !== "" ? (
          <span>Hola {datos.usuario}</span>
        ) : (
          <button onClick={handleClick} style={{ cursor: "pointer" }}>
            Entrar
          </button>
        )}
      </div>

      {coches &&
        coches.map((coche) =>
          coche.estado === "Disponible" ? (
            <ListaLinea key={coche.id} modulo={coche} />
          ) : null
        )}
    </>
  );
}

export default EscaparatePage;
