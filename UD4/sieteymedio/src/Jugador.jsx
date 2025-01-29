import './Utilidades.js';
import Utilidades from './Utilidades.js';

function Jugador({ baraja, tipo, turno }) {
    return (<div>
        <div className='Cartas'><h2>
            {baraja.map(carta => carta.numero).join(', ')}
        </h2></div>
        <div className='Acumulado'>{Utilidades.sumarCartas(baraja)}</div>
    </div>
    );
}

export default Jugador;

