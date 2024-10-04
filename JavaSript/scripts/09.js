'use strict';
let numeros = new Array("iker", true, 19, 18.1);

function agrupar(...valores) {
    let resultado = {};
    let posicion = 0;
    //hacemos un for que nos recorra todo el array
    for (let valor of valores) {
        //sacamos el tipo de valor y vamos aumentando el contador de posicion
        let tipo = typeof valor;
        posicion++;
        //si no existe ya la posicion del array del tipo que sacamos lo creamos
        if (!resultado[tipo]) {
            resultado[tipo]=[];
        }
        //se mete la posicion en la que se encontraba el valor y el valor, en la posicion donde se almacene su tipo
        resultado[tipo]+=" Posición: " + posicion + " Valor: " + valor+". ";
    }

    // Mostramos el resultado por pantalla (console)
    console.log(resultado);
}

// Si no pongo los 3 puntos del rest solo nos pilla un valor
agrupar(...numeros);
