import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";

function PropiedadesPacientePage() {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  const [paciente, setPaciente] = useState({
    id: "",
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    fechaNacimiento: "",
    seguroMedico: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Cargar la información del paciente si el ID está presente
  useEffect(() => {
    const cargarPaciente = async (id) => {
      if (id && id !== "0") {
        try {
          const pacienteData = await $negocio.obtenerPaciente(id); // Cargar los datos del paciente usando el ID
          setPaciente(pacienteData);
        } catch (error) {
          console.error("Error al cargar paciente:", error);
          setError("Error al cargar los datos del paciente.");
        }
      } else {
        // Si el id es 0 o no está presente, mantenemos los valores vacíos
        setPaciente({
          id: "",
          nombre: "",
          telefono: "",
          email: "",
          direccion: "",
          fechaNacimiento: "",
          seguroMedico: "",
        });
      }
    };

    cargarPaciente(id); // Cargar paciente o dejar campos vacíos
  }, [id]);

  // Manejar los cambios en los campos del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setPaciente((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para enviar el formulario y guardar los cambios
  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      if (id && id !== "0") {
        // Si hay ID, actualizar el paciente
        await $negocio.actualizarPaciente(paciente);
      } else {
        // Si no hay ID o es 0, crear un nuevo paciente
        await $negocio.crearPaciente(paciente);
      }
      navigate("/pacientes"); // Redirigir al listado de pacientes
    } catch (error) {
      setError("Hubo un error al guardar los datos.");
      console.error("Error al guardar los datos:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-primary">{id && id !== "0" ? "Editar" : "Crear"} Paciente</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={manejarEnvio}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
           
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
           
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">
            Dirección
          </label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
          
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fechaNacimiento" className="form-label">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimiento"
            name="fechaNacimiento"
           
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="seguroMedico" className="form-label">
            Seguro Médico
          </label>
          <input
            type="text"
            className="form-control"
            id="seguroMedico"
            name="seguroMedico"
           
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            {id && id !== "0" ? "Guardar Cambios" : "Crear Paciente"}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/pacientes")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PropiedadesPacientePage;
