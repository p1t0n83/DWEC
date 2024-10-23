'use strict';

let bingo = (function () {

    return {
        generarCarton, 
    };

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

window.addEventListener('load', function () {
    document.getElementById('comenzar').addEventListener('click', function() { 
        let carton = bingo.generarCarton(); 
        let contenido = "<table border='1'>";  
        for(let fila = 0; fila < 3; fila++) { 
            contenido += "<tr>"; 
            for(let columna = 0; columna < 9; columna++) { 
                contenido += "<td>" + carton[fila][columna]+ "</td>"; 
            }
            contenido += "</tr>"; 
        }
        contenido += "</table>";

        document.getElementById("carton1").innerHTML = contenido;
    });
});
