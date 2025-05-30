import { useNavigate } from "react-router-dom";

function ListaLinea({ modulo }) {
    const { id = 0, marca = "", modelo = "", anno = 0, km = 0, color = "", precio = 0, combustible = "", transmision = "", potencia = 0, puertas = 0, estado = "" } = modulo;
    //useNavigate para gestionar eventos
    const navegar = useNavigate();

    const handleClick = () => {
        navegar(`detalles/${id}`);
    };

    return (<>

        <div className="fila">
            
            <div className="columna">Marca: {marca}</div>
            <div className="columna">Modelo: {modelo}</div>
            <div className="columna">Precio: {precio}</div>
            <div className="columna">Vendido: {estado}</div>
            <div className="columna"><button onClick={handleClick}>Ver detalles de vehiculo</button></div>
        </div>
    </>);
}

export default ListaLinea;
