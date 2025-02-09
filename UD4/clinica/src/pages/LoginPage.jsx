import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $negocio from "../core/Negocio";
//mira no voy ni a documentarla por que no funciona
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const usuarios = await $negocio.obtenerUsuarios();

      const usuarioEncontrado = usuarios.find(
        (usuario) =>
          usuario.username === username && usuario.password === password
      );

      if (usuarioEncontrado) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setError("Usuario o contraseña incorrectos.");
      }
    } catch (error) {
      console.error("Hubo un error al obtener los usuarios:", error);
      setError("Hubo un problema al intentar acceder.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-success">Página de Login</h1>
      <form
        onSubmit={handleLogin}
        className="bg-dark p-4 border rounded shadow-sm"
      >
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label htmlFor="username" className="form-label text-light">
            Username
          </label>
          <input
            type="text"
            className="form-control bg-dark text-light border-light"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label text-light">
            Password
          </label>
          <input
            type="password"
            className="form-control bg-dark text-light border-light"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
