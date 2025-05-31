import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import ListaLinea from "../components/ListaLinea";
import { useNavigate } from "react-router-dom";

function CochesPage() {
  const [coches, setCoches] = useState([]);
  const navegar = useNavigate();

  const obtenerCoches = async () => {
    const listaCoches = await $negocio.obtenerCoches();
    setCoches(listaCoches);
  };

  const borrarPadre = async (id) => {
    await $negocio.eliminarCoche(id);
    await obtenerCoches();
  };

  useEffect(() => {
    obtenerCoches();
  }, []);

  const handleClick = () => {
    navegar(`detalles/0`);
  };

  return (
    <>
      <h1>Todos los coches</h1>
      <button onClick={handleClick} style={{ cursor: "pointer", marginBottom: "15px" }}>
        Crear Coche
      </button>

      {coches &&
        coches.map((coche) => (
          <ListaLinea
            key={coche.id}
            modulo={coche}
            tipo={"mantenimiento"}
            borrarPadre={borrarPadre}
          />
        ))}
    </>
  );
}

export default CochesPage;
