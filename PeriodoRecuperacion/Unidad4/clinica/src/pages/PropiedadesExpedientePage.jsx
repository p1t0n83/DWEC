import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/negocio";
import { SeguridadContext } from "../context/SeguridadContext";

function PropiedadesExpedientePage() {
  const { datos } = useContext(SeguridadContext);
  const { id } = useParams(); // id de la URL
  const pacienteId = Number(id); // ese id es el pacienteId
  const navegar = useNavigate();
  const expedienteVacio = {
    id: 0,
    pacienteId: pacienteId,
    fechaApertura: "",
    antecedentes: "",
    diagnosticos: "",
    tratamientos: "",
    observaciones: "",
  };

  useEffect(() => {
    if (datos.tipo != "medico" && datos.tipo != "admin") {
      navegar("/");
    }
  }, [datos, navegar]);

  const [expediente, setExpediente] = useState(null);

  useEffect(() => {
    if (pacienteId !== 0) {
      obtenerExpediente();
    } else {
      setExpediente(expedienteVacio);
    }
  }, [pacienteId]);

  const obtenerExpediente = async () => {
    const resultado = await $negocio.obtenerExpediente(pacienteId);
    if (resultado) {
      setExpediente(resultado);
    } else {
      setExpediente(expedienteVacio);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpediente((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await $negocio.actualizarExpediente(expediente);
    navegar(`../expedientes`);
  };

  return (
    <>
      {expediente && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Fecha de apertura:</label>
            <input
              type="date"
              name="fechaApertura"
              value={expediente.fechaApertura}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Antecedentes:</label>
            <textarea
              name="antecedentes"
              value={expediente.antecedentes}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Diagnósticos:</label>
            <textarea
              name="diagnosticos"
              value={expediente.diagnosticos}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Tratamientos:</label>
            <textarea
              name="tratamientos"
              value={expediente.tratamientos}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Observaciones:</label>
            <textarea
              name="observaciones"
              value={expediente.observaciones}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </>
  );
}

export default PropiedadesExpedientePage;
