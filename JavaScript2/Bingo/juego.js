'use strict';

let $bingo = (function () {
    let cartones = {
       jugador1:[[],[],[]],
       jugador2:[[],[],[]],
       humano:[[],[],[]]
    };
    let datosMarcador = {
        jugador1:"",
        jugador2:"",
        humano:""
    };
    let bolasSacadas = {};
    return {
        pintarCartones,
        generarCarton,
        iniciarJuego,
        cartones,
        siguienteBola,
        indicarValor,
        cantarLinea,
        cantarBingo,
        alguienGano,
    };

    
    
    function iniciarJuego(){
      cartones.jugador1=generarCarton();
      cartones.jugador2=generarCarton();
      cartones.jugador3=generarCarton();

    }
    

    function siguienteBola(){
    }

    function indicarValor(){

    }

    function cantarLinea(){

    }

    function cantarBingo(){

    }

    function alguienGano(){

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

  
})();

function pintarCartones(jugador){
   //primer carton 
    document.getElementById('comenzar').addEventListener('click', function() { 
        let carton = $bingo.cartones[jugador]; // Accedemos al cartón del jugador
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

window.addEventListener('load', function () {
   $bingo.iniciarJuego();
   $bingo.pintarCartones('jugador1');
   $bingo.pintarCartones('jugador2');
   $bingo.pintarCartones('jugador3');
});
