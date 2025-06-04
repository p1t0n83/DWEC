import { useContext } from "react";
import { SeguridadContext } from "../context/SeguridadContext";
import { useNavigate } from "react-router-dom";
import $negocio from "../core/negocio";

function LoginLogoutPage() {
  const { datos, logIn, logOut } = useContext(SeguridadContext);
  const navegar = useNavigate();

  const iniciar = async (e) => {
    e.preventDefault();
    const form=e.target;
    const username=form.username.value;
    const password=form.password.value;
    let usuario = await $negocio.validarUsuario(username, password);
    if (usuario) {
      logIn(usuario.username,usuario.tipo);
      navegar("/");
    } else {
      alert("Inicio de sesion no valido");
    }
  };
  const salir = () => {
    logOut();
    navegar("/");
  };

  return (
    <>
      {datos &&
        (datos.tienePermisos == false ? (
          <div>
            <form onSubmit={iniciar}>
              <h1>Inicio de sesion</h1>
              <label htmlFor="username">
                <input name="username"></input>
              </label>
              <br />
              <label htmlFor="password">
                <input type="password" name="password"></input>
              </label>
              <br />
              <button type="submit">Iniciar sesion</button>
            </form>
          </div>
        ) : (
          <div>
            <button onClick={salir}>Deslogearse</button>
          </div>
        ))}
    </>
  );
}

export default LoginLogoutPage;
