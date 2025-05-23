import { useState } from "react";
import Celda from "./Celda";

function Tabla() {
    const [ganador, setGanador] = useState("");
    const [empate, setEmpate] = useState("");

    const [caracter, setCaracter] = useState("X");
    const [turno, setTurno] = useState(1);
    const [tablero, setTablero] = useState([
        ["", "", ""], ["", "", ""], ["", "", ""]
    ]);
    const comprobarGanadorEmpate = async () => {
        // Comprobar horizontales
        for (let i = 0; i < 3; i++) {
            if (tablero[i][0] !== "" &&
                tablero[i][0] === tablero[i][1] &&
                tablero[i][0] === tablero[i][2]) {
                setGanador(tablero[i][0]);
                setEmpate("no");
                return;
            }
        }

        // Comprobar verticales
        for (let i = 0; i < 3; i++) {
            if (tablero[0][i] !== "" &&
                tablero[0][i] === tablero[1][i] &&
                tablero[0][i] === tablero[2][i]) {
                setGanador(tablero[0][i]);
                setEmpate("no");
                return;
            }
        }

        // Comprobar diagonal principal
        if (tablero[0][0] !== "" &&
            tablero[0][0] === tablero[1][1] &&
            tablero[0][0] === tablero[2][2]) {
            setGanador(tablero[0][0]);
            setEmpate("no");
            return;
        }

        // Comprobar diagonal inversa
        if (tablero[0][2] !== "" &&
            tablero[0][2] === tablero[1][1] &&
            tablero[0][2] === tablero[2][0]) {
            setGanador(tablero[0][2]);
            setEmpate("no");
            return;
        }

        // Comprobar empate
        if (turno === 9 && ganador === "") {
            setEmpate("empate");
        }
    }

    const peganAMiHijo = async (caracter, posicion) => {
        setTurno(turno + 1);
        let tableroNuevo = tablero;
        tableroNuevo[posicion[0]][posicion[1]] = caracter;
        setTablero(tableroNuevo);
        if (caracter == "X") {
            setCaracter("O");
        } else if (caracter == "O") {
            setCaracter("X");
        }
        console.log(tablero);
        comprobarGanadorEmpate();
    }

    const celdas = [
        [<Celda caracter={caracter} posicion={[0, 0]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[0, 1]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[0, 2]} mePeganPapa={peganAMiHijo} />],
        [<Celda caracter={caracter} posicion={[1, 0]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[1, 1]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[1, 2]} mePeganPapa={peganAMiHijo} />],
        [<Celda caracter={caracter} posicion={[2, 0]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[2, 1]} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} posicion={[2, 2]} mePeganPapa={peganAMiHijo} />]
    ];


    if (ganador == "" && empate != "empate") {
        return (
            <div>
                <h1>Estamos en el turno {turno}</h1>
                <div className="tablero">
                    <div>
                        {celdas[0][0]}
                        {celdas[0][1]}
                        {celdas[0][2]}
                    </div>
                    <div>
                        {celdas[1][0]}
                        {celdas[1][1]}
                        {celdas[1][2]}
                    </div>
                    <div>
                        {celdas[2][0]}
                        {celdas[2][1]}
                        {celdas[2][2]}
                    </div>
                </div>
            </div>
        );
    } else if (ganador == "") {
        return (<h1>Mi lidel e un empate</h1>);
    } else if (ganador != "" && empate == "no") {
        return (<h1>Mi lidel tenemo un ganador y son :{ganador }</h1>)
    }
}

export default Tabla;