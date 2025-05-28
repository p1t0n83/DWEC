import { useState, useEffect, useCallback } from "react"; 
import * as Utilidades from "./Utilidades.js";
import Jugador from "./Jugador.jsx";

function Juego() {
  // Estados
  const [marcadorJugador, setMarcadorJugador] = useState(0);
  const [marcadorCrupier, setMarcadorCrupier] = useState(0);

  const [barajaJugador, setBarajaJugador] = useState([]);
  const [barajaCrupier, setBarajaCrupier] = useState([]);

  const [plantado, setPlantado] = useState(false);
  const [barajeadas, setBarajeadas] = useState(Utilidades.barajarCartas());
  const [siguiente, setSiguiente] = useState(0);
  const [estadoPartida, setEstadoPartida] = useState("");

  // Funciones callback
  const pedirCarta = useCallback(
    async (tipo, indice) => {
      if (indice >= barajeadas.length) {
        alert("No quedan más cartas en la baraja");
        return;
      }

      try {
        const cartaNueva = await Utilidades.recuperarCarta(barajeadas[indice]);

        if (tipo === "jugador") {
          const nuevaBaraja = [...barajaJugador, cartaNueva];
          setBarajaJugador(nuevaBaraja);

          const sumaJugador = Utilidades.sumarCartas(nuevaBaraja);

          if (sumaJugador > 7.5) {
            setEstadoPartida("ganaCrupier");
            setPlantado(true);
            return;
          }

          // Gana automáticamente si está cerca de 7.5 (ajusta rango si quieres)
          if (sumaJugador >= 7.4 && sumaJugador <= 7.6) {
            setEstadoPartida("ganaJugador");
            setPlantado(true);
            return;
          }
        } else {
          setBarajaCrupier((prev) => [...prev, cartaNueva]);
        }

        setSiguiente(indice + 1);
      } catch (error) {
        console.error("Error al recuperar carta:", error);
      }
    },
    [barajeadas, barajaJugador]
  );

  const repartirPrimerasCartas = useCallback(async () => {
    await pedirCarta("crupier", 0);
    await pedirCarta("jugador", 1);
  }, [pedirCarta]);

  // Nueva partida
  const nuevaPartida = () => {
    setEstadoPartida("");
    setBarajaJugador([]);
    setBarajaCrupier([]);
    setPlantado(false);
    setSiguiente(0);
    setBarajeadas(Utilidades.barajarCartas());
  };

  const plantarse = () => {
    setPlantado(true);
  };

  // Repartir primeras cartas al empezar partida
  useEffect(() => {
    if (
      barajaJugador.length === 0 &&
      barajaCrupier.length === 0 &&
      estadoPartida === ""
    ) {
      repartirPrimerasCartas();
    }
  }, [barajaJugador, barajaCrupier, estadoPartida, repartirPrimerasCartas]);

  // El crupier pide cartas tras plantarse el jugador
  useEffect(() => {
    if (estadoPartida !== "" || !plantado) return;

    if (
      Utilidades.sumarCartas(barajaCrupier) < 7.5 &&
      siguiente < barajeadas.length
    ) {
      const timer = setTimeout(() => {
        pedirCarta("crupier", siguiente);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [
    plantado,
    siguiente,
    barajeadas.length,
    estadoPartida,
    barajaCrupier,
    pedirCarta,
  ]);

  // Evaluar ganador cuando el jugador se planta y la banca termina
  useEffect(() => {
    if (!plantado || estadoPartida !== "") return;

    const sumaJugador = Utilidades.sumarCartas(barajaJugador);
    const sumaCrupier = Utilidades.sumarCartas(barajaCrupier);

    // Esperamos que la banca termine de pedir cartas si aún puede
    if (
      sumaCrupier < 7.5 &&
      siguiente < barajeadas.length &&
      estadoPartida === ""
    ) {
      return;
    }

    const evaluarGanador = (jugador, crupier) => {
      if (jugador > 7.5) return "ganaCrupier";
      if (crupier > 7.5) return "ganaJugador";
      if (jugador >= 7.4 && jugador <= 7.6) return "ganaJugador";

      return crupier >= jugador ? "ganaCrupier" : "ganaJugador";
    };

    const resultado = evaluarGanador(sumaJugador, sumaCrupier);

    setEstadoPartida((prev) => (prev === "" ? resultado : prev));
  }, [
    plantado,
    estadoPartida,
    barajaJugador,
    barajaCrupier,
    siguiente,
    barajeadas.length,
  ]);

  // Actualizar marcadores cuando cambia el estado de la partida
  useEffect(() => {
    if (estadoPartida === "ganaJugador") {
      setMarcadorJugador((prev) => prev + 1);
    } else if (estadoPartida === "ganaCrupier") {
      setMarcadorCrupier((prev) => prev + 1);
    }
  }, [estadoPartida]);

  return (
    <div>
      <h1>Siete y Medio</h1>

      <h2>Partidas ganadas por el jugador: {marcadorJugador}</h2>
      <h2>Partidas ganadas por la banca: {marcadorCrupier}</h2>
      <button onClick={nuevaPartida}>Nueva partida</button>

      <h3>Cartas crupier</h3>
      <div className="caja-usuario">
        <p>Suma total: {Utilidades.sumarCartas(barajaCrupier)}</p>
        <Jugador
          baraja={barajaCrupier}
          tipo="crupier"
          nuevaCarta={pedirCarta}
          siguiente={siguiente}
        />
      </div>

      <h3>Cartas jugador</h3>
      <div className="caja-usuario">
        <p>Suma total: {Utilidades.sumarCartas(barajaJugador)}</p>
        <Jugador
          baraja={barajaJugador}
          tipo="jugador"
          nuevaCarta={pedirCarta}
          siguiente={siguiente}
        />
        {/* Solo permite plantarse si no ha terminado la partida */}
        {Utilidades.sumarCartas(barajaJugador) <= 7.5 &&
          !plantado &&
          estadoPartida === "" && (
            <button onClick={plantarse}>Me planto</button>
          )}
      </div>
    </div>
  );
}

export default Juego;
