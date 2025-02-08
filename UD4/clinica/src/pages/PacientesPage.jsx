import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import $negocio from "../core/Negocio";
import Paciente from "../components/Paciente";

function PacientesPage() {
  const navegar = useNavigate();
  const location = useLocation();
  const [pacientes, setPacientes] = useState([]);
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda
  const [paginaActual, setPaginaActual] = useState(1); // Página actual
  const [pacientesPorPagina] = useState(5); // Número de pacientes por página

  useEffect(() => {
    cargar();
    if (location.state && location.state.nuevoPaciente) {
      $negocio.crearPaciente(location.state.nuevoPaciente);
    }
  }, [location.state]);

  const cargar = async () => {
    try {
      let resultado = await $negocio.obtenerPacientes();
      setPacientes(resultado);
      setPacientesFiltrados(resultado); // Establecemos los pacientes filtrados al cargar
    } catch (error) {
      setPacientes([]);
      setPacientesFiltrados([]);
      console.error("No se cargaron los pacientes", error);
    }
  };

  const borrarPaciente = async (id) => {
    if (confirm(`Seguro que quieres borrar al usuario con id ${id} ?`)) {
      try {
        await $negocio.eliminarPaciente(id);
        console.log(`Paciente con ID ${id} eliminado`);
        await cargar();
      } catch (error) {
        console.error("Hubo un error al eliminar al paciente:", error);
      }
    }
  };

  
  const EditarPaciente = (id) => {
    navegar(`/pacientes/${id}`); // Redirigir con el id del paciente
  };

  // Función para filtrar pacientes
  const filtrarPacientes = (evento) => {
    const valorBusqueda = evento.target.value.toLowerCase();
    setBusqueda(valorBusqueda);

    // Filtrar los pacientes por nombre
    const pacientesFiltrados = pacientes.filter((paciente) =>
      paciente.nombre.toLowerCase().includes(valorBusqueda)
    );

    setPacientesFiltrados(pacientesFiltrados); // Actualizar la lista filtrada
    setPaginaActual(1); // Reseteamos a la primera página al filtrar
  };

  // Lógica para cambiar de página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  // Calcular los pacientes a mostrar en la página actual
  const indexUltimoPaciente = paginaActual * pacientesPorPagina;
  const indexPrimerPaciente = indexUltimoPaciente - pacientesPorPagina;
  const pacientesPaginaActual = pacientesFiltrados.slice(
    indexPrimerPaciente,
    indexUltimoPaciente
  );

  // Calcular el total de páginas
  const totalPaginas = Math.ceil(pacientesFiltrados.length / pacientesPorPagina);

  return (
    <>
      <h1 className="text-center mb-4 text-primary">Listado de Pacientes</h1>
      <button onClick={() => EditarPaciente()} className="btn btn-primary mb-3">
        Crear Paciente
      </button>

      {/* Campo de búsqueda */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={filtrarPacientes}
        />
      </div>

      <div className="container mt-4">
        <div className="card shadow-lg p-3 border border-2 border-primary rounded">
          <div className="row bg-light text-dark fw-bold py-2 px-3 border-bottom">
            <div className="col">Paciente</div>
            <div className="col">Teléfono</div>
            <div className="col">Seguro Médico</div>
            <div className="col">Email</div>
            <div className="col">Fecha de Nacimiento</div>
            <div className="col">Dirección</div>
          </div>

          {/* Mostrar los pacientes filtrados para la página actual */}
          {pacientesPaginaActual.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                id={paciente.id}
                nombre={paciente.nombre}
                direccion={paciente.direccion}
                email={paciente.email}
                fechaNacimiento={paciente.fechaNacimiento}
                seguroMedico={paciente.seguroMedico}
                sexo={paciente.sexo}
                telefono={paciente.telefono}
                borrarPaciente={borrarPaciente}
                editarPaciente={EditarPaciente}
              />
            );
          })}
        </div>
      </div>

      {/* Paginador */}
      <div className="pagination justify-content-center mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            className={`btn ${paginaActual === index + 1 ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => cambiarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-secondary"
          onClick={() => cambiarPagina(paginaActual + 1)}
          disabled={paginaActual === totalPaginas}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default PacientesPage;


