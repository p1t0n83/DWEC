'use strict';

let $bingo = (function () {
    let cartones = {
        jugador1: [[], [], []],
        jugador2: [[], [], []],
        jugador3: [[], [], []]
    };
    let datosMarcador = {
        jugador1: [0, 0],
        jugador2: [0, 0],
        jugador3: [0, 0],
    };
    let bolasSacadas = [];
    const ordenBolasSacadas = generarBolas();

    function iniciarJuego() {
        cartones.jugador1 = generarCarton();
        cartones.jugador2 = generarCarton();
        cartones.jugador3 = generarCarton();
    }

    function pintarCartones(jugador) {
        //primer carton 
        document.getElementById('comenzar').addEventListener('click', function () {
            let carton = cartones[jugador]; // Accedemos al cartón del jugador
            let contenido = '';  // Inicia la cadena para contener el HTML

            for (let fila = 0; fila < 3; fila++) {
                contenido += '<div style="display: flex;">'; // Cada fila del cartón es un div con display: flex
                for (let columna = 0; columna < 9; columna++) {
                    // Se crea cada celda con el valor correspondiente del cartón (o vacío si no tiene valor)
                    contenido += '<div class="contenedor">' + (carton[fila][columna] || '') + '</div>';
                }
                contenido += '</div>'; // Cerramos el div de la fila
            }

            document.getElementById(jugador).innerHTML = contenido; // Insertamos el contenido generado en el div del jugador
        });
    }

    function siguienteBola() {
        if (bolasSacadas.length < ordenBolasSacadas.length) {
            bolasSacadas.push(ordenBolasSacadas[bolasSacadas.length]);
            return ordenBolasSacadas[bolasSacadas.length - 1]; // Retorna la última bola sacada
        }
        return null;
    }

    function resumenBolas() {
        document.getElementById('comenzar').addEventListener('click', function () {
            let mostrarBolas = document.getElementById('mostrarBolas');
            mostrarBolas.innerHTML = ''; // Limpiar el contenido anterior
            let tiempo = parseInt(document.getElementById('segundos').value) * 1000; // Convertir a milisegundos

            let bolasMostradas = []; // Array para almacenar las bolas mostradas

            let intervalo = setInterval(function () {
                let bola = siguienteBola();
                if (bola !== null) {
                    bolasMostradas.push(bola); // Agregar la nueva bola al array
                    mostrarBolas.textContent = bolasMostradas.join(', '); // Actualizar el contenido mostrando todas las bolas separadas por comas
                } else {
                    clearInterval(intervalo); // Detener el intervalo cuando se han sacado todas las bolas
                }
            }, tiempo);
        });
    }


    function generarBolas() {
        let bolasAleatorias = new Set();
        while (bolasAleatorias.size < 90) {
            let numero = Math.floor(Math.random() * 90) + 1;
            bolasAleatorias.add(numero);
        }
        return Array.from(bolasAleatorias);
    }

    function resumenResultado() {
        document.getElementById('comenzar').addEventListener('click', function () {
            let contenido = '';  // Inicia la cadena para contener el HTML
            for (let datos in datosMarcador) {
                contenido += `<p>${datos}: ${datosMarcador[datos][0]} lineas y ${datosMarcador[datos][1]} bingos</p>`;
            }
            // Insertamos el contenido generado en el div de resumen
            document.getElementById('resumen').innerHTML = contenido;
        });
    }

    return {
        pintarCartones,
        iniciarJuego,
        siguienteBola,
        resumenResultado,
        resumenBolas,
    };
})();

function verificarCartonesNoHumanos() {
}

function comprobarNumeroNoHumano() {
}

function actualizarMarcadores() {
}


function generarCarton() {
    let carton = [[], [], []]; // Iniciamos el cartón como un array de arrays
    let usados = new Set(); // Conjunto para almacenar los números usados

    // Generar números aleatorios para cada columna y rellenar el cartón
    for (let columna = 0; columna < 9; columna++) { // 9 columnas
        let max = (columna + 1) * 10; // Máximo valor de la columna
        let min = max - 9; // Mínimo valor de la columna

        let numerosColumna = [];

        // Generar 3 números únicos para la columna
        while (numerosColumna.length < 3) {
            let numero = Math.floor(Math.random() * (max - min + 1)) + min;
            if (!usados.has(numero)) {
                usados.add(numero); // Añadir al conjunto de números usados
                numerosColumna.push(numero); // Añadir al array de la columna
            }
        }
        // Ordenar los números dentro de la columna
        numerosColumna.sort((a, b) => a - b);

        // Asignar los números generados a la columna correspondiente en el cartón
        for (let fila = 0; fila < 3; fila++) {
            carton[fila][columna] = numerosColumna[fila] || '*'; // Asignar '*' si no hay número
        }
    }

    // Rellenar con asteriscos algunas posiciones aleatorias (para tener 4 números por fila)
    for (let fila = 0; fila < 3; fila++) {
        let asteriscos = 0;
        while (asteriscos < 4) { // 4 espacios vacíos por fila
            let columna = Math.floor(Math.random() * 9); // Columna aleatoria
            if (carton[fila][columna] !== '*') {
                carton[fila][columna] = '*';
                asteriscos++;
            }
        }
    }
    return carton;
}




window.addEventListener('load', function () {
    $bingo.iniciarJuego();
    $bingo.pintarCartones('jugador1');
    $bingo.pintarCartones('jugador2');
    $bingo.pintarCartones('jugador3');
    $bingo.resumenResultado();
    $bingo.resumenBolas();
});
