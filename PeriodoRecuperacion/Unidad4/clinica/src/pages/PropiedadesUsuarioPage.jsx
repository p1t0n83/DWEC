import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import $negocio from "../core/negocio";
import { SeguridadContext } from "../context/SeguridadContext";

function PropiedadesUsuarioPage() {
  const { datos } = useContext(SeguridadContext);
  const { id: idParam } = useParams();
  const id = Number(idParam);
  const navegar = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (datos.tipo !== "Admin") {
      navegar("/");
    }
  }, [datos, navegar]);

  useEffect(() => {
    if (id === 0) {
      setUsuario({ username: "", password: "", tipo: "" });
    } else {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === 0) {
      await $negocio.crearUsuario(usuario);
    } else {
      await $negocio.actualizarUsuario(usuario);
    }
    navegar("/usuarios");
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
            </select>
          </div>

          <button type="submit">Guardar Cambios</button>
        </form>
      )}
    </>
  );
}

export default PropiedadesUsuarioPage;
