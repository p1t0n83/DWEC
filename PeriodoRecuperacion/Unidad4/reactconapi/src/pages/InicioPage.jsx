import { useEffect, useState } from "react";
import $negocio from "../core/negocio";

function InicioPage() {
    const [productos, setProductos] = useState([]);

    const obtenerProductosApi = async () => {
        let resultado = await $negocio.obtenerProductos();
        if (resultado && resultado.data) {
            setProductos(resultado.data);
        } else {
            setProductos([]); // por si algo falla
        }
    }
    useEffect(() => {
        obtenerProductosApi();
    })
    return (
        <>
            <div>
                <h1>Pagina de inicio a ver si pilla la api</h1>
                {productos && productos.map((p, index) => (
                    <li key={index}>{p.nombre}</li>
                ))}
            </div>
        </>
    );
}

export default InicioPage;