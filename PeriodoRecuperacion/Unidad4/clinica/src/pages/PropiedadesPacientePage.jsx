import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/negocio";
import { SeguridadContext } from "../context/SeguridadContext";

function PropiedadesPacientePage() {
  const { datos } = useContext(SeguridadContext);
  const { id: idParam } = useParams();
  const id = Number(idParam);
  const navegar = useNavigate();
  const pacienteVacio = {
    id: 0,
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    fechaNacimiento: "",
    sexo: "",
    direccion: "",
    seguroMedico: "",
  };

  const [paciente, setPaciente] = useState(id === 0 ? pacienteVacio : null);

  useEffect(() => {
    if (datos.tipo != "gestion") {
      navegar("/");
    }
  }, [datos, navegar]);

  useEffect(() => {
    if (id !== 0) {
      obtenerPaciente();
    }
  }, [id]);

  const obtenerPaciente = async () => {
    const resultado = await $negocio.obtenerPaciente(id);
    setPaciente(resultado);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaciente((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 0) {
      $negocio.crearPaciente(paciente);
    } else {
      $negocio.actualizarPaciente(paciente);
    }
    navegar("/pacientes");
  };

  return (
    <>
      {paciente && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={paciente.nombre}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>DNI:</label>
            <input
              type="number"
              name="dni"
              value={paciente.dni}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={paciente.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Teléfono:</label>
            <input
              type="text"
              name="telefono"
              value={paciente.telefono}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Fecha de nacimiento:</label>
            <input
              type="date"
              name="fechaNacimiento"
              value={paciente.fechaNacimiento}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Sexo:</label>
            <select name="sexo" value={paciente.sexo} onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div>
            <label>Dirección:</label>
            <input
              type="text"
              name="direccion"
              value={paciente.direccion}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Seguro médico:</label>
            <input
              type="text"
              name="seguroMedico"
              value={paciente.seguroMedico}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </>
  );
}

export default PropiedadesPacientePage;
