import { useState } from 'react';
import Jugador from './Jugador.jsx';
import './Juego.css';
import './Utilidades.js';
import Utilidades from './Utilidades.js';
function Juego() {
    const [cartasCrupier, setCartasCrupier] = useState([]);
    const [cartasJugador, setCartasJugador] = useState([]);
    const [juega, setJuega] = useState(true);
    const nuevaPartida = (e) => {
        e.preventDefault();

    }
    return (
        <div className='Juego'>
            {juega && (
                <input type="submit" onClick={nuevaPartida} value="Empezar Partida" />
            )}
            <div className='Crupier'>
                <h2 className='izquierda'>Crupier</h2>
                <h2 className='derecha'>Acumulado</h2>
                <div className='Cartas'></div>
                <div className='Acumulado'>{Utilidades.sumarCartas(cartasCrupier)}</div>
            </div>
            <div className='Jugador'>
                <h2 className='izquierda'>Jugador</h2>
                <h2 className='derecha'>Acumulado</h2>
                <div className='Cartas'></div>
                <div className='Acumulado'>{Utilidades.sumarCartas(cartasJugador)}</div>
            </div>
        </div>
    );
}

export default Juego;