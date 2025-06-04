import { useContext, useEffect, useState } from "react";
import $negocio from "../core/negocio";
import LineaExpediente from "../components/LineaExpediente";
import { useNavigate } from "react-router-dom";
import { SeguridadContext } from "../context/SeguridadContext";

function ExpedientesPage() {
  const { datos } = useContext(SeguridadContext);
  const [pacientes, setPacientes] = useState([]);
  const [pacientesTotal, setPacientesTotal] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navegar = useNavigate();
  const limite = 5;
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    if (datos.tipo != "medico" && datos.tipo != "admin") {
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

  useEffect(() => {
    obtenerPacientesTotales(busqueda);
  }, [busqueda]);

  useEffect(() => {
    obtenerPacientes(busqueda, pagina);
  }, [pagina, busqueda]);

  const crearExpediente = () => {
    navegar("../expediente/0");
  };

  const anterior = () => {
    if (pagina > 0) {
      setPagina(pagina - 1);
    }
  };

  const siguiente = () => {
    const totalPaginas = Math.ceil(pacientesTotal.length / limite);
    if (pagina < totalPaginas - 1) {
      setPagina(pagina + 1);
    }
  };

  const onChangeBusqueda = (e) => {
    setBusqueda(e.target.value);
    setPagina(0);
  };

  return (
    <div>
      <button onClick={crearExpediente}>Crear expediente</button>
      <input
        type="text"
        placeholder="Buscar expediente..."
        value={busqueda}
        onChange={onChangeBusqueda}
      />
      <div className="tabla">
        <div className="fila cabecera">
          <div>nombre</div>
          <div>Seguro medico</div>
          <div>Telefono</div>
          <div>Acciones</div>
        </div>
        {pacientes.map((cadaPaciente) => (
          <LineaExpediente key={cadaPaciente.id} expediente={cadaPaciente} />
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

export default ExpedientesPage;
