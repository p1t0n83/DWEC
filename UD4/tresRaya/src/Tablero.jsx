import { useState } from "react";
import "./Tablero.css";
//fuking 3 en raya(las que me voy a meter)
function Tablero() {
  const tableroInicial = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  // el use State lo uso para cambar los valores de tablero y contador de forma dinamica(creo)
  // y el igual es el valor inicial
  const [tablero, setTablero] = useState(tableroInicial);
  const [contador, setContador] = useState(0);
//como no puedo meter en un onClick 2 funciones hago una funcion con 2(soy un genio)
//que bueno no es una funcion es una constante que tiene una funcion
//le paso las filas y columnas para dar valor a las celdas del puto tablero
  const funciones = (i, j) => {
    //como no puedo hacer un for, hacemos mapas para recorrer el tablero
    const nuevoTablero = tablero.map((fila, rowIndex) =>
        //lo mismo para las filas que van de 3 en 3
      fila.map((cell, colIndex) => {
        if (rowIndex === i && colIndex === j && cell === "") {
            //un ternario para saber si es X o O, yo lo hice con un contador
          return contador % 2 === 0 ? "X" : "O";
        }
        return cell;
      })
    );
    //las dos funciones del useState para cambiar el tablero y el contador
    // al principio pense que habia que hacer la function como tal,
    //  pero solo es pasarle el valor que queremos que tome
    setTablero(nuevoTablero);
    setContador(contador + 1);
  };
//el return 
  return (
    //crea el tablero con botones que tienen un onClick que llama a funcion, se le pasa como parametro la fila y la columna
    //es imposible que se repita una X o una O porque al cambiar el valor
    //sustituye el boton por la X o la O
    <div className="tablero">
      {tablero.map((fila, i) =>
        fila.map((celda, j) => (
          <button onClick={() => funciones(i, j)} key={`${i}-${j}`}>
            {celda}
          </button>
        ))
      )}
    </div>
  );
}

export default Tablero;