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
    };

    
    
    function iniciarJuego(){
      cartones.jugador1=generarCarton();
      cartones.jugador2=generarCarton();
      cartones.jugador3=generarCarton();

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

function pintarCartones(){
   //primer carton 
    document.getElementById('comenzar').addEventListener('click', function() { 
        let carton =$bingo.cartones.jugador1;
        let contenido = "<div>";  
        for(let fila = 0; fila < 3; fila++) { 
            contenido += "<div>"; 
            for(let columna = 0; columna < 9; columna++) { 
                contenido += "<div>" + carton[fila][columna]+ "</div>"; 
            }
            contenido += "</div>"; 
        }
        contenido += "</div>";

        document.getElementById('jugador1').innerHTML = contenido;
    }); 
    //segundo carton
    document.getElementById('comenzar').addEventListener('click', function() { 
        let carton =$bingo.cartones.jugador2;
        let contenido = "<div>";  
        for(let fila = 0; fila < 3; fila++) { 
            contenido += "<div>"; 
            for(let columna = 0; columna < 9; columna++) { 
                contenido += "<div>" + carton[fila][columna]+ "</div>"; 
            }
            contenido += "</div>"; 
        }
        contenido += "</div>";

        document.getElementById('jugador2').innerHTML = contenido;
    }); 
    //tercer carton
    document.getElementById('comenzar').addEventListener('click', function() { 
        let carton =$bingo.cartones.jugador3;
        let contenido = "<table border='1'>";  
        for(let fila = 0; fila < 3; fila++) { 
            contenido += "<tr>"; 
            for(let columna = 0; columna < 9; columna++) { 
                contenido += "<td>" + carton[fila][columna]+ "</td>"; 
            }
            contenido += "</tr>"; 
        }
        contenido += "</table>";

        document.getElementById('jugador3').innerHTML = contenido;
    }); 
}

window.addEventListener('load', function () {
   $bingo.iniciarJuego();
   $bingo.pintarCartones();
  
});
