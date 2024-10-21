'use strict';

const $bingo = (function () {
    const cartonesJugadores = {};
    const datosMarcador = {};
    const bolasSacadas = {};
    return {
        generarCarton,
    };



    function generarCarton() {
        let carton = []; // Iniciamos el cartón como un array de arrays (matriz)

        for (let i = 0; i < 3; ++i) { // 3 filas
            let fila = [];
            for (let columna = 0; columna < 9; ++columna) { // 9 columnas por fila
                let min = columna * 10; // Mínimo valor de la columna
                let max = min + 9; // Máximo valor de la columna
                let numero = Math.floor(Math.random() * (max - min + 1)) + min; // Generar un número aleatorio entre min y max
                fila.push(numero); // Agregar número a la fila
            }
            carton.push(fila); // Agregar la fila al cartón
        }

        // Mostrar el cartón completo (matriz)
        for (let fila = 0; fila < carton.length; fila++) {
            console.log(carton[fila]);
        }
    }
    return generarCarton;
}
)();




// Evento para el botón de agregar
window.addEventListener('load', function () {
    document.getElementById('generarCarton').addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el envío del formulario
        $bingo.generarCarton();
    })
})