import { useContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";
import LineaPaciente from "../components/LineaPaciente";
import { useNavigate } from "react-router-dom";
import { SeguridadContext } from "../context/SeguridadContext";

function PacientesPage() {
  const { datos } = useContext(SeguridadContext);
  const [pacientes, setPacientes] = useState([]);
  const [pacientesTotal, setPacientesTotal] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navegar = useNavigate();
  const limite = 5;
  const [pagina, setpagina] = useState(0);

  useEffect(() => {
    if (datos.tipo != "Gestion" && datos.tipo != "Admin") {
      navegar("/");
    }
  }, [datos, navegar]);

  const obtenerPacientesTotales = async () => {
    let resultado = await $negocio.obtenerPacientes();
    setPacientesTotal(resultado);
  };

  const obtenerPacientes = async () => {
    let resultado = await $negocio.obtenerPacientes(
      busqueda,
      pagina * limite,
      limite
    );
    setPacientes(resultado);
  };

  // Al cargar la página y cuando cambie la búsqueda, actualizamos total
  useEffect(() => {
    obtenerPacientesTotales(busqueda);
  }, [busqueda]);

  // Cuando cambien página o búsqueda, cargamos los pacientes paginados
  useEffect(() => {
    obtenerPacientes(busqueda, pagina);
  }, [pagina, busqueda]);

  const crearPaciente = () => {
    navegar("../paciente/0");
  };

  const anterior = () => {
    if (pagina > 0) {
      setpagina(pagina - 1);
    }
  };

  const siguiente = () => {
    const totalPaginas = Math.ceil(pacientesTotal.length / limite);
    if (pagina < totalPaginas - 1) {
      setpagina(pagina + 1);
    }
  };

  const onChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
    setpagina(0);
  };

  return (
    <div>
      <button onClick={crearPaciente}>Crear paciente</button>
      <input
        type="text"
        placeholder="Buscar paciente..."
        value={busqueda}
        onChange={onChangeBusqueda}
      />
      <div className="tabla">
        <div className="fila cabecera">
          <div>Id</div>
          <div>Nombre</div>
          <div>Dni</div>
          <div>Email</div>
          <div>Telefono</div>
          <div>FechaNacimiento</div>
          <div>Sexo</div>
          <div>Direccion</div>
          <div>Seguro medico</div>
          <div>Acciones</div>
        </div>
        {pacientes.map((cadaPaciente) => (
          <LineaPaciente
            key={cadaPaciente.id}
            paciente={cadaPaciente}
            onBorrado={obtenerPacientes}
          />
        ))}
      </div>
      <button onClick={anterior} disabled={pagina === 0}>
        Anterior
      </button>
      <span style={{ margin: "0 10px" }}>{pagina + 1}</span>
      <button
        onClick={siguiente}
        disabled={pagina >= Math.ceil(pacientesTotal.length / limite) - 1}
      >
        Siguiente
      </button>
    </div>
  );
}

export default PacientesPage;
