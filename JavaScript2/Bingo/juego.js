'use strict';

const $bingo = (function () {
    const cartonesJugadores = {};
    const datosMarcador = {};
    const bolasSacadas = {};
    return {

        generarCarton,

    };


    function generarCarton() {
        let carton = {};
        for (let i = 0; i <= 9; ++i) {
            let min = 1 * 10;
            let max = Math.floor(Math.random() * 10);

            let filas = [];
            for (let columna = 0; columna <= 3; ++columna) {

                for (columna = 0; columna < 9; columna++) {
                    filas[i] = Math.floor(Math.random() * max - min);
                }
                carton[columna] = filas;
            }
        }
    for(let fila=0;fila<8;fila++){
      
        console.log(carton[fila]);
      
    }

    }
    
}
)();




// Evento para el botón de agregar
window.addEventListener('load', function () {
    document.getElementById('generarCarton').addEventListener('click', function (e) {
        e.preventDefault(); // Evitar el envío del formulario

        $bingo.generarCarton();
    })
})