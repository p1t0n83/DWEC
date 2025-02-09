import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import $negocio from "../core/Negocio";
import Usuario from "../components/Usuario";
// NO LE DES A FORMATEAR ALEJANDRO,porfi,solo en esta pagina
// novena hoja 5:45 Am la ultima puta hoja que documento de pages, porque las de components ni las he empezado a documentar
function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const navegar = useNavigate(); 
 // el tio este que esta siempre que se quieran cargar datos
  useEffect(() => {
    cargar();
  }, []);
    //el "metodo" de cargar
  const cargar = async () => {
    let usuario = $negocio.obtenerUsuarios();
    usuario
      .then((result) => {
        setUsuarios(result);
      })
      .catch((error) => {
        setUsuarios([]);
        console.error("no se cargaron los usuarios");
      });
  };
  //me duele la cabeza, este es borrar usuario
  const borrarUsuario = async (id) => {
    if (confirm(`Seguro que quieres borrar al usuario con id ${id} ?`)) {
      try {
        await $negocio.eliminarUsuario(id);
        console.log(`Usuario con ID ${id} eliminado`);
        await cargar();
      } catch (error) {
        console.error("Hubo un error al eliminar al usuario:", error);
      }
    }
  };

  // Función para redirigir a la página de crear usuario
  const editarUsuario = (id) => {
    navegar(`/usuarios/${id}`); // Redirige a la página de creación con id "0" si no hay, y porque lo se? porque lo he puesto en el formulario, de hecho lo puedes ver desde aqui,mira que hago una flecha|
  };                                                                                                                                           //|--------------------------------------------------------|
                                                                                                                                               //|
  return (                                                                                                                                     //|
    <>                                                                                                                                        {/*| */}  
      {console.log(usuarios)}                                                                                                                 {/*| */}  
      <div className="container mt-4">                                                                                                        {/*| */}  
        <h1 className="text-center mb-4 text-success">Listado de Usuarios</h1>                                                                {/*| */}  
        <div className="text-center mb-4">                                                                                                    {/*| */}  
          <button className="btn btn-success" onClick={()=>editarUsuario(0)}>{/*<-----------------------------------------------------------------*/}
            Crear Usuario
          </button>
        </div>

        <div className="card shadow-lg p-4 border-0 rounded bg-dark">
          <div className="row bg-dark text-light fw-bold py-2 px-3 border-bottom border-2 border-success">
            <div className="col text-center">Usuario</div>
            <div className="col text-center">Tipo</div>
            <div className="col text-center">Password</div>
          </div>
          {usuarios.map((usuario) => {
            return (
              <Usuario
                key={usuario.id}
                id={usuario.id}
                password={usuario.password}
                tipo={usuario.tipo}
                borrarUsuario={borrarUsuario} //lo mismo que hice antes de pasarle los metodos al hijo
                editarUsuario={editarUsuario}
                usuario={usuario.username}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UsuariosPage;
