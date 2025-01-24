import { useState } from "react";
import Casilla from './Casillas.jsx';
import './Tablero.css';
function Tablero() {
    const [tablero, setTablero] = useState(Array(9).fill(''));
    const [contador, setContador] = useState(0);

    const trabajarParaHijo = (celda) => {
        if (tablero[celda] === '') {
            const nuevoTablero = [...tablero]; // Crear una copia del array
            nuevoTablero[celda] = contador % 2 === 0 ? 'X' : 'O';
            setTablero(nuevoTablero); // Actualizar el estado con la copia modificada
            setContador(contador + 1);
        }
    };

    return (
        <div className="tablero">
            <div className="fila1">
                <Casilla posicion={0} valor={tablero[0]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={1} valor={tablero[1]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={2} valor={tablero[2]} llorarPapa={trabajarParaHijo} />
            </div>
            <div className="fila2">
                <Casilla posicion={3} valor={tablero[3]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={4} valor={tablero[4]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={5} valor={tablero[5]} llorarPapa={trabajarParaHijo} />
            </div>
            <div className="fila3">
                <Casilla posicion={6} valor={tablero[6]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={7} valor={tablero[7]} llorarPapa={trabajarParaHijo} />
                <Casilla posicion={8} valor={tablero[8]} llorarPapa={trabajarParaHijo} />
            </div>
        </div>
    );
}

export default Tablero;