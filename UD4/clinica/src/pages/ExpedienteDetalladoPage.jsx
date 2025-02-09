import { useParams, useNavigate } from "react-router-dom";
import Expediente from "../components/Expediente";
import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
//segunda documentacion 5:16 de la mañana (me estoy volviendo loco)
function ExpedientesDetalladoPage() {
  //lo mismo que antes
  const { id } = useParams();
  const navegar = useNavigate();
  const [expediente, setExpediente] = useState();
  const [paciente, setPaciente] = useState();
  //lo mismo de antes, para cargar los datos nada mas entrar con los await para que espere
  useEffect(() => {
    const cargarDatos = async (id) => {
      try {
        const exp = await $negocio.obtenerExpediente(id);
        setExpediente(exp);
        const pac = await $negocio.obtenerPaciente(id);
        setPaciente(pac);
      } catch (error) {
        console.error(error);
      }
    };
    cargarDatos(id);
  }, [id]);
  // los reedirect del navegate
  const editarExpediente = (id) => {
    navegar(`/expedientes/editar/${id}`);
  };

  const volverAlListado = () => {
    navegar("/expedientes");
  };
  //no se si estara bien, pero me gusto eso  de crear components  para guardar cada campo individual, podemos con todo.
  return (
    <div className="container">
      {expediente ? ( // pregunto si existe, osea si existe literalmente, para que cree el expediente
        <>
          <Expediente
            key={id}
            pacienteId={id}
            paciente={paciente.nombre}
            antecedentes={expediente.antecedentes}
            diagnostico={expediente.diagnostico}
            fechaApertura={expediente.fechaApertura}
            observaciones={expediente.observaciones}
            tratamientos={expediente.tratamientos}
          />
          <div className="d-flex justify-content-between mt-3">
            <button
              onClick={() => editarExpediente(id)} //los botoncitos
              className="btn btn-success"
            >
              Editar Expediente
            </button>

            <button
              onClick={volverAlListado}
              className="btn btn-outline-secondary"
            >
              Volver al Listado
            </button>
          </div>
        </>
      ) : (
        "" //si no esta , no hace nada
      )}
    </div>
  );
}

export default ExpedientesDetalladoPage;
