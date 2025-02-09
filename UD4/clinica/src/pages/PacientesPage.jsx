import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";
import Paciente from "../components/Paciente";
// sexta hoja 5:28 AM, voy a dormir genial, a no ser que sueñe con Carmen... estoy divagando, en fin, pagina de pacientes, los muestra y tal
function PacientesPage() {
  const navegar = useNavigate();
  const [pacientes, setPacientes] = useState([]);
  const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState(""); // Estado para la búsqueda
  const [paginaActual, setPaginaActual] = useState(1); // Página actual
  const [pacientesPorPagina] = useState(5); // Número de pacientes por página

  //lo tipico un useffect para cargar datos, este es para cargar los pàcientes
  useEffect(() => {
    cargar();
  }, []);

  // el metodo cargar que usa el useeffect, lo podria meter dentro la verdad,pero aqui tampoco esta mal,no hay necesidad de cambiarlo ma g
  const cargar = async () => {
    try {
      let resultado = await $negocio.obtenerPacientes();
      setPacientes(resultado);
      setPacientesFiltrados(resultado); // Establecemos los pacientes filtrados al cargar, aunque si no hay filtro muestra todos
    } catch (error) {
      //si no funciona no carga nada por si acaso
      setPacientes([]);
      setPacientesFiltrados([]);
      console.error("No se cargaron los pacientes", error);
    }
  };
  // borrar paciente, el metodo es llamado desde el hijo que esta en components, asi funcionan todos los borrar y editar , para que lo sepa el que lo lea
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
  //https://www.youtube.com/watch?v=xvFZjo5PgG0 no entrar
  const EditarPaciente = (id) => {
    navegar(`/pacientes/${id}`); // Redirige con el id del paciente
  };

  // esto es para filtrar pacientes, funciona igual que el de expediente al igual que el paginador, asi que no los comentare mucho
  const filtrarPacientes = (evento) => {
    const valorBusqueda = evento.target.value.toLowerCase();
    setBusqueda(valorBusqueda);

    // Filtrar los pacientes por nombre, que no se hacerlo de otra forma( si se pero como que es mas importante que funcione lo demas)
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
  const totalPaginas = Math.ceil(
    pacientesFiltrados.length / pacientesPorPagina
  );
  //el que se haya comido el enlace de arriba es un pringao
  return (
    <>
      <h1 className="text-center mb-4 text-success">Listado de Pacientes</h1>

      <button
        onClick={() => EditarPaciente(0)}
        className="btn btn-outline-success mb-3"
      >
        Crear Paciente
      </button>

      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-sm w-auto"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={filtrarPacientes}
          style={{
            fontSize: "12px", // mira, he intentado, usar solo bootstrat o como se escriba, pero para ciertas cosas no lo consigo,
            padding: "5px 8px", //sobretodo para las imagenes, eso , y que limita mucho lo guapa que me podria haber quedado la web
            height: "30px",
          }}
        />
      </div>

      <div className="container mt-4">
        <div className="card shadow-lg p-4 border-0 rounded bg-dark">
          <div className="row bg-dark text-light fw-bold py-2 px-3 border-bottom border-2 border-success">
            <div className="col">Paciente</div>
            <div className="col">Teléfono</div>
            <div className="col">Seguro Médico</div>
            <div className="col">Email</div>
            <div className="col">Fecha de Nacimiento</div>
            <div className="col">Dirección</div>
          </div>

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
                editarPaciente={EditarPaciente} //aqui le paso los metodos al hijo
              />
            );
          })}
        </div>
      </div>

      <div className="pagination justify-content-center mt-3">
        <button
          className="btn btn-outline-success"
          onClick={() => cambiarPagina(paginaActual - 1)}
          disabled={paginaActual === 1}
        >
          Anterior
        </button>

        {Array.from({ length: totalPaginas }, (_, index) => (
          <button
            key={index}
            className={`btn ${
              paginaActual === index + 1 ? "btn-success" : "btn-outline-success"
            }`}
            onClick={() => cambiarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-success"
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
