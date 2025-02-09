import { useParams, useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";
import { useState, useEffect } from "react";
// octava hoja 5:41 AM hecho de menos... el holor del pasto, la calidez del sol, la brisa.
function PropiedadesUsuarioPage() {
  //lo mismo de siempre, es que si funciona se repite
  const { id } = useParams();
  const navegar = useNavigate();
  const [usuario, setUsuario] = useState({
    id: id,
    username: "",
    password: "",
    tipo: "",
  });
  // #phpEsUnaRuina, hay perdon, bueno el use effect d esiempre
  useEffect(() => {
    // Si el id no es 0, intenta obtener los datos del usuario
    if (id !== "0") {
      const fetchUsuario = async () => {
        try {
          const usuarioData = await $negocio.obtenerUsuario(id); // Ajusta según tu función de negocio
          setUsuario(usuarioData);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      };

      fetchUsuario();
    }
  }, [id]); // Este efecto se ejecuta cuando el id cambia

  // 1 linea, perfeccion en estado puro
  const crearUsuario = (id) => {
    if (id === "0") {
      $negocio.crearUsuario(usuario);
      reedirigir();
    } else {
      $negocio.actualizarUsuario(usuario);
      reedirigir();
    }
  };
  //el cr7 de la informatica
  const handleChange = (e) => {
    const { name, value } = e.target;
    let actualizado = { ...usuario, [name]: value };
    setUsuario(actualizado);
  };
  // lo de siempre
  const reedirigir = () => {
    navegar("/usuarios");
  };
  //el formulario es como el de pacientes, se adapta como Mahoraga General Divino de las 8 hojas divirgentes del Sila
  const formulario = () => {
    return (
      <>
        <div className="container mt-5">
          <h1 className="text-center mb-4 text-success">
            {id === "0" ? "Crear Usuario" : "Editar Usuario"}
          </h1>

          <form className="bg-dark p-4 border rounded shadow-sm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">
                Username
              </label>
              <input
                type="text"
                className="form-control bg-dark text-light border-light"
                id="username"
                name="username"
                value={usuario.username}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control bg-dark text-light border-light"
                id="password"
                name="password"
                value={usuario.password}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tipo" className="form-label text-light">
                Tipo
              </label>
              <select
                className="form-control bg-dark text-light border-light"
                id="tipo"
                name="tipo"
                value={usuario.tipo}
                onChange={handleChange}
              >
                <option value="">Seleccionar</option>
                <option value="Admin">Admin</option>
                <option value="Usuario">Usuario</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <button
                onClick={() => crearUsuario(id)}
                className="btn btn-success"
              >
                {id === "0" ? "Crear Usuario" : "Guardar Cambios"}
              </button>
              <button
                onClick={() => reedirigir()}
                className="btn btn-secondary"
              >
                Salir
              </button>
            </div>
          </form>
        </div>
      </>
    );
  };

  return <>{formulario()}</>;
}

export default PropiedadesUsuarioPage;
