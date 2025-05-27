import { useState } from 'react';
import * as Utilidades from './Utilidades';

function Juego() {
    const [ganadasJugador, setGanadasJugador] = useState(0);
    const [ganadasBanca, setGanadasBanca] = useState(0);
    const nuevaPartida=()=>{
  
    }

    return (
        <div>
        <h1>Siete y Medio</h1>
        <h2>Partidas ganadas por el jugador: {ganadasJugador}</h2>
        <h2>Partidas ganadas por la banca: {ganadasBanca}</h2>
        <button onClick={nuevaPartida}>Nueva partida</button>
        
        <h3>Cartas crupier</h3>
        <div>
           
        </div>
        <h3>Cartas jugador</h3>
        <div>
         <button>Dame Carta</button>
         <button>Me planto</button>
        </div>
        </div>
    );
}

export default Juego;