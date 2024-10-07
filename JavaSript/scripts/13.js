
'use strict';

function generarNumerosOperador(){
let numero1=parseInt(Math.random()*10+1);
let numero2=parseInt(Math.random()*10+1);
let operadores="+-*/";
let operador=operadores[parseInt(Math.random()*4+0)];
return [numero1,numero2,operador];
}

function preguntas() {
    let total = 0; // Para contar las preguntas en cada lote
    let resultado = []; // Guardar todas las preguntas y resultados
    let aciertos = 0; // Contar aciertos
    let fallos = 0; // Contar fallos

    do {
        for (let i = 0; i < 4; i++) {
            // Generamos números y operador
            let [numero1, numero2, operador] = generarNumerosOperador();
            let pregunta = 'Pregunta: ' + numero1 + ' ' + operador + ' ' + numero2;
            
            // Pedimos la respuesta al usuario
            let respuesta = parseFloat(prompt(pregunta + '. Introduce tu respuesta:'));
            let correcto = respuesta === calculoPregunta(numero1, numero2, operador) ? 'correcto' : 'falso';
            
            // Guardamos la pregunta, respuesta y si fue correcta o no
            resultado.push({
                numero: total + 1,
                pregunta: pregunta,
                respuesta: respuesta,
                correcto: correcto === 'correcto' ? true : false
            });

            // Mostramos el resultado en consola
            console.log(pregunta + '. Respuesta: ' + respuesta + '. ' + (correcto === 'correcto' ? 'Correcto' : 'Falso'));

            // Actualizamos los contadores de aciertos y fallos
            if (correcto === 'correcto') {
                aciertos++;
            } else {
                fallos++;
            }

            total++; // Aumentamos el contador total de preguntas
        }

        // Preguntamos si el usuario quiere continuar
        let continuar = prompt('¿Quieres continuar jugando? (si/no)');
        if (continuar.toLowerCase() !== 'si') {
            break;
        }

    } while (true); // Continuar hasta que el usuario decida parar

    // Mostrar el resumen final
    console.log("Resumen final:");
    resultado.forEach((res, index) => {
        console.log(`${index + 1}. ${res.pregunta} - Respuesta: ${res.respuesta} - ${res.correcto ? 'Correcto' : 'Falso'}`);
    });
    console.log("Total de preguntas: " + total);
    console.log("Aciertos: " + aciertos);
    console.log("Fallos: " + fallos);
}


function calculoPregunta(numero1, numero2, operador) {
    switch(operador) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            return numero1 / numero2;
        default:
            return numero1 % numero2;
    }
}
preguntas();


