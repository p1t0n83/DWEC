import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import PacienteExpediente from "../components/PacienteExpediente";
//tercera documentacion 5:19 AM
function ExpedientesPage() {
  const [pacientes, setPacientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const pacientesPorPagina = 5;
  // lo mismo de siempre para  cargar los datos, aunque creo que se me a olvidado en algun lado :(
  useEffect(() => {
    const cargar = async () => {
      try {
        let paciente = await $negocio.obtenerPacientes();
        setPacientes(paciente);
      } catch (error) {
        console.error(error);
      }
    };
    cargar();
  }, []);

  //este es el filtrado por nombre que hizo cha.. digo yo ,lo hice yo obviamente
  const pacientesFiltrados = pacientes.filter((paciente) =>
    paciente.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // esto es para ver cuantos pacientes se muestran por pagina ,tipo , para controlar los siguientes
  const indexUltimoPaciente = paginaActual * pacientesPorPagina;
  const indexPrimerPaciente = indexUltimoPaciente - pacientesPorPagina;
  const pacientesPaginaActual = pacientesFiltrados.slice(
    indexPrimerPaciente,
    indexUltimoPaciente
  );

  // Función para cambiar la página
  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  // Calcular el total de páginas
  const totalPaginas = Math.ceil(
    pacientesFiltrados.length / pacientesPorPagina
  );
  //el cacho return para todo
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-success text-shadow">
        Listado de Pacientes
      </h1>

      <div className="mb-3">
        <input
          type="text"
          className="form-control form-control-sm w-auto p-1"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} // aqui como se puede ver esta el filtro, es por nombre, porque es lo mejor creo yo
        />
      </div>

      <div className="card shadow-lg p-4 border-0 rounded bg-dark">
        <div className="row bg-dark text-white fw-bold py-2 px-3 border-bottom border-2 border-success">
          <div className="col">Paciente</div>
          <div className="col">Teléfono</div>
          <div className="col">Seguro Médico</div>
          <div className="col"></div>
        </div>

        {pacientesPaginaActual.map((paciente) => (
          <PacienteExpediente // aqui se crear los pacientes, yo se, que no tendria que haber creado 2 tipos de pacientes, porque es una gilipollez que con un if se solucionaba,pero bueno, lo hecho hecho esta
            key={paciente.id}
            id={paciente.id}
            nombre={paciente.nombre}
            seguroMedico={paciente.seguroMedico}
            telefono={paciente.telefono}
          />
        ))}
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
            key={index} //lo siento pero yo esto no lo he hecho, no controlo bien los paginadores
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
    </div>
  );
}

export default ExpedientesPage;
