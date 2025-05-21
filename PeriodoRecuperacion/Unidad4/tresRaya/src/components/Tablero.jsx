import { useState } from "react";
import Celda from "./Celda";
import "./Tablero.css"
function Tabla() {
    const [ganador,setGanador]=useState("");
    const [empate,setEmpate]=useState("");

    const [caracter, setCaracter] = useState("X");
    const [turno, setTurno] = useState(1);

     const comprobarGanadorEmpate=()=>{
        if(turno==10 && ganador==""){
              setEmpate("empate");
              setCaracter(caracter=="X"?"O":"X");
        }
    }

     const peganAMiHijo = (caracter) => {
           setTurno(turno + 1);
        if (caracter == "X") {
            setCaracter("O");
        } else if (caracter == "O") {
            setCaracter("X");
        }
      comprobarGanadorEmpate();
       
    }

    const celdas = [
        [<Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />],
        [<Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />],
        [<Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />, <Celda caracter={caracter} mePeganPapa={peganAMiHijo} />]
    ];
   
   
   
    if(ganador=="" && empate!="empate"){
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
}else{
    return (<h1>Mi lidel hay un ganador</h1>);
}
}


export default Tabla;