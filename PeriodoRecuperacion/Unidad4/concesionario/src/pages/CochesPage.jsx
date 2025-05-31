import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import ListaLinea from "../components/ListaLinea";
import { useNavigate } from "react-router-dom";

function CochesPage() {
  const [coches, setCoches] = useState([]);
  const [pagina, setPagina] = useState(1);
  const tamañoPagina = 5;
  const navegar = useNavigate();

  const obtenerCoches = async () => {
    const offset = (pagina - 1) * tamañoPagina;
    const listaCoches = await $negocio.obtenerCoches("", offset, tamañoPagina);
    setCoches(listaCoches);
  };

  const borrarPadre = async (id) => {
    await $negocio.eliminarCoche(id);
    await obtenerCoches();
  };

  useEffect(() => {
    obtenerCoches();
  }, [pagina]);

  const handleClick = () => {
    navegar("detalles/0");
  };

  const anterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const siguiente = () => {
    if (coches.length === tamañoPagina) {
      setPagina(pagina + 1);
    }
  };

  return (
    <>
      <h1>Todos los coches</h1>
      <button
        onClick={handleClick}
        style={{ cursor: "pointer", marginBottom: "15px" }}
      >
        Crear Coche
      </button>

      {coches.map((coche) => (
        <ListaLinea
          key={coche.id}
          modulo={coche}
          tipo={"mantenimiento"}
          borrarPadre={borrarPadre}
        />
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={anterior} disabled={pagina === 1}>
          Anterior
        </button>
        <span style={{ margin: "0 10px" }}>Página {pagina}</span>
        <button onClick={siguiente} disabled={coches.length < tamañoPagina}>
          Siguiente
        </button>
      </div>
    </>
  );
}

export default CochesPage;
