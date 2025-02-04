import { useContext, useState } from "react";
import { SeguridadContext } from "../contexts/SeguridadProvider";
function HomePage() {
    const { datos, logIn, logOut } = useContext(SeguridadContext);
    const [nombre, setNombre] = useState("");
    function handleClick() {
        if (datos.tienePermisos) {
            setNombre("");
            logOut();
        } else {
            if (nombre === "") {
                return;
            }
            /* No es recomendable buscar directamente */
            //const nombre =
            document.querySelector('input[name="nombre"]').value;
            logIn(nombre);
        }
    }
    const handleChange = (e) => {
        setNombre(e.target.value);
    };
    return (
        <>

            <h1>Página de inicio</h1>
            <div>
                {datos.tienePermisos ? (
                    <>
                        <span>Hola {datos.usuario} </span>
                        <button onClick={handleClick}>Salir</button>
                    </>
                ) : (
                    <>
                        <span>Nombre: </span>
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleChange}
                        ></input>
                        <button onClick={handleClick}>Entrar</button>
                    </>
                )}
            </div>
        </>
    );
}
export default HomePage;