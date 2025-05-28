import { useState } from "react";
import * as Utilidades from "./Utilidades.js";
import Jugador from "./Jugador.jsx";

function Juego() {
  const [ganadasJugador, setGanadasJugador] = useState(0);
  const [ganadasBanca, setGanadasBanca] = useState(0);
  const [barajaJugador, setBarajaJugador] = useState([]);
  const [barajaCrupier, setBarajaCrupier] = useState([]);
  const [barajeadas, setBarajeadas] = useState(Utilidades.barajarCartas());
  const [siguiente, setSiguiente] = useState(0);

  const nuevaPartida = () => {
    // Reseteamos barajas y el índice
    setBarajaJugador([]);
    setBarajaCrupier([]);
    setSiguiente(2);
    repartirPrimerasCartas();
  };
  const repartirPrimerasCartas = async () => {
    await pedirCarta("crupier", 0);
    await pedirCarta("jugador", 1); 
  };

  const pedirCarta = async (tipo, indice) => {
    if (siguiente >= barajeadas.length) {
      alert("No quedan más cartas en la baraja");
      return;
    }
    try {
      console.log("Barajeadas:", barajeadas);
      console.log("Indice siguiente:", siguiente);
      console.log("Carta a recuperar:", barajeadas[siguiente]);
      const cartaNueva = await Utilidades.recuperarCarta(barajeadas[indice]);

      // Verificar que la carta tiene las propiedades necesarias
      if (!cartaNueva || !cartaNueva.numero || !cartaNueva.palo) {
        console.error("Carta inválida recibida:", cartaNueva);
        return;
      }

      if (tipo === "jugador") {
        setBarajaJugador((prev) => [...prev, cartaNueva]);
      } else if (tipo === "crupier") {
        setBarajaCrupier((prev) => [...prev, cartaNueva]);
      }

      setSiguiente(indice + 1);
    } catch (error) {
      console.error("Error al recuperar carta:", error);
    }
  };

  return (
    <div>
      <h1>Siete y Medio</h1>

      <h2>Partidas ganadas por el jugador: {ganadasJugador}</h2>
      <h2>Partidas ganadas por la banca: {ganadasBanca}</h2>
      <button onClick={nuevaPartida}>Nueva partida</button>

      <h3>Cartas crupier</h3>
      <div className="caja-usuario">
        <Jugador
          baraja={barajaCrupier}
          tipo={"crupier"}
          nuevaCarta={pedirCarta}
          siguiente={siguiente}
        />
      </div>

      <h3>Cartas jugador</h3>
      <div className="caja-usuario">
        <Jugador
          baraja={barajaJugador}
          tipo={"jugador"}
          nuevaCarta={pedirCarta}
          siguiente={siguiente}
        />
        <button>Me planto</button>
      </div>
    </div>
  );
}

export default Juego;
