import { useContext } from "react";
import { SeguridadContext } from "../contexts/SeguridadProvider";
import { useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";

function LoginPage() {
  const { datos, logIn, logOut } = useContext(SeguridadContext);
  const navegar = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let usuario = await $negocio.validarUsuario(
      formData.get("username"),
      formData.get("password")
    );
    if (usuario === false) {
      alert("Inicio de sesión no válido");
    } else {
      logIn(usuario.nombre);
      navegar("/");
    }
  };

  const handleLogout = () => {
    logOut();
    navegar("/");
  };

  return (
    <>
      {datos.usuario === "" ? (
        <>
          <h1>Inicio de sesión</h1>
          <form onSubmit={handleLogin} className="formulario-login">
            <label>
              Usuario:
              <input type="text" name="username" required />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" required />
            </label>
            <button type="submit">Iniciar sesión</button>
          </form>
        </>
      ) : (
        <>
          <button type="button" onClick={handleLogout}>
            Desconectar
          </button>
        </>
      )}
    </>
  );
}

export default LoginPage;
