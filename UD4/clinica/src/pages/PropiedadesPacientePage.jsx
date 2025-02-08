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
      try {
        const pacienteData = await $negocio.obtenerPaciente(id); // Cargar los datos del paciente usando el ID
        setPaciente(pacienteData);
      } catch (error) {
        console.error("Error al cargar paciente:", error);
        setError("Error al cargar los datos del paciente.");
      }
    };

    if (id) {
      cargarPaciente(id); // Solo cargar los datos si hay un id
    }
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
      if (id) {
        // Si hay ID, actualizar el paciente
        await $negocio.actualizarPaciente(paciente);
      } else {
        // Si no hay ID, crear un nuevo paciente
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
      <h1 className="text-center mb-4 text-primary">{id ? "Editar" : "Crear"} Paciente</h1>
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
            value={paciente.nombre}
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
            value={paciente.telefono}
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
            value={paciente.email}
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
            value={paciente.direccion}
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
            value={paciente.fechaNacimiento}
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
            value={paciente.seguroMedico}
            onChange={manejarCambio}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            {id ? "Guardar Cambios" : "Crear Paciente"}
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
