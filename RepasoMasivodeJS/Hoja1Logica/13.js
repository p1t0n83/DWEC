let numero1;
let numero2;
let operador = '';
let operadores = '+-*/';
let resultados = [];
let acertadas = 0;
let falladas = 0;
let continuar = true;
function resultado(numero1, numero2, operador) {
    if (operador === '+') {
        return numero1 + numero2;
    } else if (operador === '-') {
        return numero1 - numero2;
    } else if (operador === '*') {
        return numero1 * numero2;
    } else if (operador === '/') {
        return numero1 / numero2;
    }
}

function pregunta() {
    let resultadoActual=0;
    numero1 = Math.floor(Math.random() * 10 + 1);
    numero2 = Math.floor(Math.random() * 10 + 1);
    operador = operadores[Math.floor(Math.random() * 4)];
    resultadoActual = resultado(numero1, numero2, operador);
    let resultadoJugador = parseInt(prompt(numero1 + " " + operador + " " + numero2 + " ="));
    resultadoActual === resultadoJugador ? acertadas++ : falladas++;
    resultados.push(numero1 + " " + operador + " " + numero2 + " = " + resultadoJugador + (resultado === resultadoJugador ? ". Acertado" : ". Fallo"));
}


do {
    for (let i = 0; i <= 3; i++) {
        pregunta();
    }
    continuar = (prompt("Quieres seguir?si/no").toLowerCase() === 'si' ? true : false);
} while (continuar);

for(let i=0;i<resultados.length;i++){
    console.log(resultados[i]);
}
console.log("Numero total de aciertos: "+acertadas);
console.log("Numero total de falladas: "+falladas);