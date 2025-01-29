import { useState } from 'react';
import Jugador from './Jugador.jsx';
import './Juego.css';
import './Utilidades.js';
import Utilidades from './Utilidades.js';
function Juego() {
    const [cartasCrupier, setCartasCrupier] = useState([]);
    const [cartasJugador, setCartasJugador] = useState([]);
    const [juega, setJuega] = useState(true);
    const [cartasSacadas, setSacadas] = useState(0);
    const baraja = Utilidades.barajaCartas();
    const nuevaPartida = (e) => {
        e.preventDefault();
    }

    const pideCarta = () => {
        if (Utilidades.sumarCartas(cartasJugador) >= 7.5) {
            setJuega(false);
            turnoCrupier();
        } else {
            if (juega && cartasSacadas < baraja.length) {
                setCartasJugador([...cartasJugador, baraja[cartasSacadas]]);
                setSacadas(cartasSacadas + 1);
                cartasJugador.map(carta => {
                    console.log(carta);
                });
            } else {
                console.log("No juegas o no quedan cartas");
            }
            console.log(juega);
        }
    };

    const plantarse = () => {
        setJuega(false);
        turnoCrupier();
    }

    const turnoCrupier = () => {
        if (!juega && cartasSacadas < baraja.length && Utilidades.sumarCartas(cartasCrupier) <= 6) {
            setCartasCrupier([...cartasCrupier, baraja[cartasSacadas]]);
            setSacadas(cartasSacadas + 1);
            cartasCrupier.map(carta => {
                console.log(carta);
            });
        } else {
            console.log("No juega o no quedan cartas para el crupier");
            ganador();
        }
    }

    const ganador = () => {
        let sumaMaquina = Utilidades.sumarCartas(cartasCrupier);
        let sumaJugador = Utilidades.sumarCartas(cartasJugador);
        if (sumaMaquina > sumaJugador && sumaMaquina <= 7.5) {
            alert("Ha ganado la maquina, espabila malo mierdas");
        } else if (sumaJugador > sumaMaquina && sumaJugador <= 7.5) {
            alert("Has tenido que  hacer trampas porque has ganado");
        } else if (sumaJugador == sumaMaquina || (sumaJugador > 7.5 && sumaMaquina > 7.5)) {
            alert("Empate tecnico, o los dos sois muy malos u os habeis pasado");
        }
    }
    return (
        <div className='Juego'>
            {juega && (
                <input type="submit" onClick={nuevaPartida} value="Empezar Partida" />
            )}
            <div className='Crupier'>
                <h2 className='izquierda'>Crupier</h2>
                <h2 className='derecha'>Acumulado</h2>
                <Jugador baraja={cartasCrupier} tipo="maquina" turno={juega}></Jugador>
            </div>


            <div className='Jugador'>
                <h2 className='izquierda'>Jugador</h2>
                <h2 className='derecha'>Acumulado</h2>
                <Jugador baraja={cartasJugador} tipo="humano" turno={juega} ></Jugador>
            </div>


            <div>
                <input type="submit" value="Pedir Carta" onClick={pideCarta} />
                <input type="submit" value="Plantarse" onClick={plantarse} />
            </div>
        </div>

    );
}

export default Juego;