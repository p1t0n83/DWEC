import { useNavigate } from "react-router-dom";
import $negocio from "../core/negocio";

function LineaPaciente({ paciente, onBorrado }) {
  const {
    id = 0,
    nombre = "",
    dni = "",
    email = "",
    telefono = "",
    fechaNacimiento = "",
    sexo = "",
    direccion = "",
    seguroMedico = "",
  } = paciente;

  const navegar = useNavigate();

  const editar = () => {
    navegar(`../paciente/${id}`);
  };

  const borrar = async () => {
    if (confirm("¿Seguro que quieres eliminar este paciente?")) {
      await $negocio.eliminarPaciente(id);
      if (onBorrado) onBorrado();
    }
  };

  return (
    <div className="fila">
      <div>{id}</div>
      <div>{nombre}</div>
      <div>{dni}</div>
      <div>{email}</div>
      <div>{telefono}</div>
      <div>{fechaNacimiento}</div>
      <div>{sexo}</div>
      <div>{direccion}</div>
      <div>{seguroMedico}</div>
      <div>
        <button onClick={editar}>Editar</button>
        <button onClick={borrar}>Borrar</button>
      </div>
    </div>
  );
}

export default LineaPaciente;
