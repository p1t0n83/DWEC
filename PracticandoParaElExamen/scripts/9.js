
'use strict';
let numeros = new Array("iker", true, 19, 18.1);

function calcula(...numeros) {
    let array = new Array();
    let posicion = 0;
    for (let numero of numeros) {
        posicion++;
        let tipo = typeof numero;
        if (!array[tipo]) {
            array[tipo] = '';
        }
        array[tipo] += " Posición: " + posicion + " Valor: " + numero+". ";

    }
    console.log(array);
}

calcula(...numeros);