import { useNavigate } from "react-router-dom";
import $negocio from "../core/negocio";

function LineaUsuario({ usuario, onBorrado }) {
  const {
    id = 0,
    username = "",
    password = "",
    tipo = "",
  } = usuario;
  const navegar = useNavigate();

  const editar = () => {
    navegar(`../usuario/${id}`);
  };

  const borrar = async () => {
    if (confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      await $negocio.eliminarUsuario(id);
      if (onBorrado) onBorrado(); // Avisar para refrescar la lista
    }
  };

  return (
    <div className="fila">
      <div>{id}</div>
      <div>{username}</div>
      <div>{password}</div>
      <div>{tipo}</div>
      
      <div>
        <button onClick={editar}>editar</button>
        <button onClick={borrar}>Borrar</button>
      </div>
    </div>
  );
}

export default LineaUsuario;
