import { useEffect, useState } from "react";
import $negocio from "../core/Negocio";
import ListaLinea from "../components/ListaLinea";

function CochesPage() {
    const [coches, setCoches] = useState([]);

    const obtenerCoches = async () => {
        let listaCoches= await $negocio.obtenerCoches();
        setCoches(listaCoches);
    }

    useEffect(() => {
        obtenerCoches();
    }, []);
    
    return (<>
        {coches && (
            coches.map((coche) => {
                return <ListaLinea key={coche.id} modulo={coche} />;
            }))}
    </>);
}

export default CochesPage;
