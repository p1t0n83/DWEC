import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/negocio";

function PropiedadesUsuarioPage() {
  const { id: idParam } = useParams();
  const id = Number(idParam);
  const navegar = useNavigate();

  const usuarioVacio = {
    id: 0,
    username: "",
    password: "",
    tipo: "",  // podría ser "gestion", "admin", etc.
  };

  const [usuario, setUsuario] = useState(id === 0 ? usuarioVacio : null);

  useEffect(() => {
    if (id !== 0) {
      obtenerUsuario();
    }
  }, [id]);

  const obtenerUsuario = async () => {
    const resultado = await $negocio.obtenerUsuario(id);
    setUsuario(resultado);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 0) {
      $negocio.crearUsuario(usuario);
    } else {
      $negocio.actualizarUsuario(usuario);
    }
    navegar("../usuarios");
  };

  return (
    <>
      {usuario && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={usuario.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={usuario.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </div>

          <div>
            <label>Tipo:</label>
            <select name="tipo" value={usuario.tipo} onChange={handleChange}>
              <option value="">Seleccione...</option>
              <option value="gestion">Gestión</option>
              <option value="admin">Administrador</option>
              {/* Agrega más opciones según tipos de usuario */}
            </select>
          </div>

          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </>
  );
}

export default PropiedadesUsuarioPage;
