import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import Usuario from "../components/Usuario";
function UsuariosPage() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        cargar();
    }, []);

    const cargar = async () => {
        let usuario = $negocio.obtenerUsuarios();
        usuario.then(result => {
            setUsuarios(result);
        }).catch(error => {
            setUsuarios([]);
            console.error("no se cargaron los usuarios");
        });

    }
    return (
        <>
            {console.log(usuarios)}
            <div className="container mt-4">
                <h1 className="text-center mb-4 text-primary">Listado de Usuarios</h1>
                <div className="card shadow-sm p-3 border border-2 border-primary rounded">
                    <div className="row bg-light text-dark fw-bold py-2 px-3 border-bottom">
                        <div className="col">Usuario</div>
                        <div className="col">Tipo</div>
                        <div className="col">Password</div>
                    </div>
                    {usuarios.map((usuario) => {
                        return <Usuario key={usuario.id} usuario={usuario.username} tipo={usuario.tipo} password={usuario.password} />;

                    })}
                </div>
            </div>
        </>
    );

}
export default UsuariosPage;