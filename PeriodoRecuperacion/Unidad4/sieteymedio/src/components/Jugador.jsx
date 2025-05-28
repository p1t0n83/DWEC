import * as Utilidades from './Utilidades.js';
function Jugador({ baraja, tipo, nuevaCarta,siguiente }) {
  const pedirCartaClick =  () => {
    nuevaCarta(tipo,siguiente);
  };

  return (
    <div>
      {baraja.length === 0 && <p>No hay cartas</p>}
      {baraja.map((carta, index) => (
        <p key={index}>
          Carta: {carta.numero} de {carta.palo}
        </p>
      ))}
      {tipo === "jugador" && Utilidades.sumarCartas(baraja)<7.5 &&(
        <button onClick={pedirCartaClick}>Dame Carta</button>
        
      )}
    </div>
  );
}

export default Jugador;
