'use strict';

let bingo = (function () {
    const cartonesJugadores = {};
    const datosMarcador = {};
    const bolasSacadas = {};
    return {
        generarCarton,
    };



    function generarCarton() {
        let carton = [[], [], []]; // Iniciamos el cartón como un array de arrays
        let usados = new Set();
        let max = 0;
        let min = 0;
        for (let filas = 0; filas < 3; filas++) { // 3 filas  
            for (let columna = 1; columna <= 9; ++columna) { // 9 columnas por fila
                max = columna * 10; // Mínimo valor de la columna
                min = max - 9; // Máximo valor de la columna
                let numero = Math.floor(Math.random() * (max - min + 1)) + min; // Generar un número aleatorio entre min y max
                if (!usados.has(numero)) {
                    carton[filas][columnas].push(numero); // Agregar número a la fila
                    usados.push(numero);
                }
            }
        }
        //ordenar las columnas
        for (let columna = 0; columna < 8; columna++) {
            let columnas = [[], [], []];
            for (let fila = 0; fila < 2; fila++) {
                columnas[fila] = usados[columna][fila];
            }
            columnas.sort();
            for (let fila = 0; fila < 2; fila++) {
                usados[columna][fila] = columnas[fila];
            }
        }

        //rellenamos con asteriscos los espacios sobrantes
        for (let filas = 0; filas < 3; filas++) { // 3 filas  
            for (let columna = 1; columna <= 9; ++columna) {
                if (carton[filas][columnas] === undefined) {
                    carton[filas][columnas] = '*';
                }
            }
        }

        for (let filas = 0; filas < 3; filas++) { // 3 filas  
            let fila = [];
            for (let columna = 1; columna <= 9; ++columna) { // 9 columnas por fila
                fila[columna] = carton[filas][columna];
            }
            console.log(fila);
        }
    }
}
)();

window.addEventListener('load', function() {
    $bingo.generarCarton();
});

//para las bolas
//let bolas bolas.short((a.b)=>{random()-0.5});