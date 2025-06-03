import { useEffect, useState } from "react";
import $negocio from "../core/negocio";
import LineaUsuario from "../components/LineaUsuario";
import { useNavigate } from "react-router-dom";

function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const navegar = useNavigate();

  const obtenerUsuarios = async () => {
    const resultado = await $negocio.obtenerUsuarios();
    setUsuarios(resultado);
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const crearUsuario = () => {
    navegar("../usuario/0");
  };

  // Esta función se la pasamos a cada LineaUsuario
  const onUsuarioBorrado = () => {
    obtenerUsuarios(); // refresca la lista tras borrar
  };

  return (
    <div>
      <button onClick={crearUsuario}>Crear usuario</button>
      <div className="tabla">
        <div className="fila cabecera">
          <div>Id</div>
          <div>Username</div>
          <div>Tipo</div>
          <div>Acciones</div>
        </div>
        {usuarios.map((usuario) => (
          <LineaUsuario
            key={usuario.id}
            usuario={usuario}
            onBorrado={onUsuarioBorrado} // paso la función aquí
          />
        ))}
      </div>
    </div>
  );
}


export default UsuariosPage;
