import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/Negocio";
import { SeguridadContext } from "../contexts/SeguridadProvider";

function CochePage() {
  const { id: idParam } = useParams();
  const id = Number(idParam); // Convertimos el id a número
  const [coche, setCoche] = useState(null);
  const navegar = useNavigate();
  const { datos } = useContext(SeguridadContext);

  useEffect(() => {
    if (id !== 0) {
      const obtenerCoche = async () => {
        const resultado = await $negocio.obtenerCoche(id);
        setCoche(resultado);
      };
      obtenerCoche();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objCoche = {
      id: id !== 0 ? id : undefined,
      marca: formData.get("marca"),
      modelo: formData.get("modelo"),
      anno: Number(formData.get("anno")),
      km: Number(formData.get("km")),
      color: formData.get("color"),
      precio: Number(formData.get("precio")),
      combustible: formData.get("combustible"),
      transmision: formData.get("transmision"),
      potencia: Number(formData.get("potencia")),
      puertas: Number(formData.get("puertas")),
      estado: formData.get("estado"),
    };

    if (id === 0) {
      await $negocio.crearCoche(objCoche);
    } else {
      await $negocio.actualizarCoche(objCoche);
    }

    navegar("/coches");
  };

  // Si estamos en modo edición pero aún no se ha cargado el coche
  if (id !== 0 && !coche) {
    return <p>Cargando datos del coche...</p>;
  }

  return (
    <>
      {datos.usuario !== "" ? (
        <div>
          <h1>{id === 0 ? "Crear coche" : "Editar coche"}</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              maxWidth: "600px",
            }}
          >
            <label>
              Marca:
              <input
                type="text"
                name="marca"
                required
                defaultValue={coche?.marca || ""}
              />
            </label>
            <label>
              Modelo:
              <input
                type="text"
                name="modelo"
                required
                defaultValue={coche?.modelo || ""}
              />
            </label>
            <label>
              Año:
              <input
                type="number"
                name="anno"
                min="1900"
                max="2100"
                required
                defaultValue={coche?.anno || ""}
              />
            </label>
            <label>
              Kilómetros:
              <input
                type="number"
                name="km"
                min="0"
                required
                defaultValue={coche?.km || ""}
              />
            </label>
            <label>
              Color:
              <input
                type="text"
                name="color"
                required
                defaultValue={coche?.color || ""}
              />
            </label>
            <label>
              Precio:
              <input
                type="number"
                name="precio"
                min="0"
                step="0.01"
                required
                defaultValue={coche?.precio || ""}
              />
            </label>
            <label>
              Combustible:
              <input
                type="text"
                name="combustible"
                required
                defaultValue={coche?.combustible || ""}
              />
            </label>
            <label>
              Transmisión:
              <input
                type="text"
                name="transmision"
                required
                defaultValue={coche?.transmision || ""}
              />
            </label>
            <label>
              Potencia (CV):
              <input
                type="number"
                name="potencia"
                min="1"
                required
                defaultValue={coche?.potencia || ""}
              />
            </label>
            <label>
              Puertas:
              <input
                type="number"
                name="puertas"
                min="2"
                max="5"
                required
                defaultValue={coche?.puertas || ""}
              />
            </label>
            <label>
              Estado:
              <select
                name="estado"
                required
                defaultValue={coche?.estado || "Disponible"}
              >
                <option value="Disponible">Disponible</option>
                <option value="Vendido">Vendido</option>
              </select>
            </label>

            {/* Botón que ocupa las dos columnas */}
            <button
              type="submit"
              style={{
                gridColumn: "1 / -1",
                padding: "0.5rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              {id === 0 ? "Crear coche" : "Editar coche"}
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1>Detalles del coche</h1>
          {coche ? (
            <table border="1" cellPadding="5" cellSpacing="0">
              <tbody>
                <tr>
                  <th>Marca</th>
                  <td>{coche.marca}</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>{coche.modelo}</td>
                </tr>
                <tr>
                  <th>Año</th>
                  <td>{coche.anno}</td>
                </tr>
                <tr>
                  <th>Kilómetros</th>
                  <td>{coche.km}</td>
                </tr>
                <tr>
                  <th>Color</th>
                  <td>{coche.color}</td>
                </tr>
                <tr>
                  <th>Precio</th>
                  <td>{coche.precio}</td>
                </tr>
                <tr>
                  <th>Combustible</th>
                  <td>{coche.combustible}</td>
                </tr>
                <tr>
                  <th>Transmisión</th>
                  <td>{coche.transmision}</td>
                </tr>
                <tr>
                  <th>Potencia (CV)</th>
                  <td>{coche.potencia}</td>
                </tr>
                <tr>
                  <th>Puertas</th>
                  <td>{coche.puertas}</td>
                </tr>
                <tr>
                  <th>Estado</th>
                  <td>{coche.estado}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>Cargando datos del coche...</p>
          )}
        </>
      )}
    </>
  );
}

export default CochePage;
