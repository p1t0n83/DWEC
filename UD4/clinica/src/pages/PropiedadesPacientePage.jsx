import { useParams, useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";
import { useState, useEffect } from "react";
//septima hoja  5:37 AM no se como diego tiene de costumbre hacer esto, un dia le va a dar algo
function PropiedadesPacientePage() {
  //lo mismo que expediente, pillamos elid
  const { id } = useParams();
  const navegar = useNavigate();
  const [paciente, setPaciente] = useState({
    id: id,
    nombre: "",
    direccion: "",
    dni: "",
    email: "",
    fechaNacimiento: "",
    seguroMedico: "",
    sexo: "",
    telefono: "",
  });

  useEffect(() => {
    // Si el id no es 0, intenta obtener los datos del paciente
    if (id !== "0") {
      const fetchPaciente = async () => {
        try {
          const pacienteData = await $negocio.obtenerPaciente(id); // Ajusta según tu función de negocio
          setPaciente(pacienteData);
        } catch (error) {
          console.error("Error al obtener los datos del paciente:", error);
        }
      };

      fetchPaciente();
    }
  }, [id]); // Este efecto se ejecuta cuando el id cambia

  // simple, pero elegante, 1 linea, perfecto
  const crearPaciente = (id) => {
    if (id === "0") {
      $negocio.crearPaciente(paciente);
      reedirigir();
    } else {
      $negocio.actualizarPaciente(paciente);
      reedirigir();
    }
  };
  // el fucking handleChange, el goat , the king, the fucking best method i west in my live, na mentira , pero es que esta muy bien
  const handleChange = (e) => {
    const { name, value } = e.target;
    let actualizado = { ...paciente, [name]: value };
    setPaciente(actualizado);
  };
  // lo de siempre
  const reedirigir = () => {
    navegar("/pacientes");
  };
  // el formulario, es el mismo si se edita o si se crea, solo cambia que sale crear o editar por un ternario
  const formulario = () => {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-center mb-4 text-success">
            {id === "0" ? "Crear Paciente" : "Editar Paciente"}
          </h1>

          <form className="bg-dark p-4 border rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label text-light">
                Nombre
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="nombre"
                name="nombre"
                value={paciente.nombre}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dni" className="form-label text-light">
                DNI
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="dni"
                name="dni"
                value={paciente.dni}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label text-light">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="telefono"
                name="telefono"
                value={paciente.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">
                Email
              </label>
              <input
                type="email"
                className="form-control bg-dark text-light border-light"
                id="email"
                name="email"
                value={paciente.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label text-light">
                Dirección
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="direccion"
                name="direccion"
                value={paciente.direccion}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="fechaNacimiento"
                className="form-label text-light"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                className="form-control bg-dark text-light border-light"
                id="fechaNacimiento"
                name="fechaNacimiento"
                value={paciente.fechaNacimiento}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="seguroMedico" className="form-label text-light">
                Seguro Médico
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="seguroMedico"
                name="seguroMedico"
                value={paciente.seguroMedico}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="sexo" className="form-label text-light">
                Sexo
              </label>
              <select
                className="form-control bg-dark text-light border-light"
                id="sexo"
                name="sexo"
                value={paciente.sexo}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button
                onClick={() => crearPaciente(id)}
                className="btn btn-success"
              >
                {id === "0" ? "Crear Paciente" : "Guardar Cambios"}
              </button>
              <button
                onClick={() => reedirigir()}
                className="btn btn-secondary"
              >
                Salir
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  return <>{formulario()}</>;
}

export default PropiedadesPacientePage;
