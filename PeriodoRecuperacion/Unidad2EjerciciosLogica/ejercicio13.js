function generar() {
  let numero1 = Math.floor(Math.random(1) * 10);
  let numero2 = Math.floor(Math.random(1) * 10);
  let caracteres = ["+", "-", "*", "/"];
  let caracter = caracteres[Math.floor(Math.random(1) * 4)];
  return [numero1, numero2, caracter];
}

function generarResultado(valores) {
  if (valores[2] == "+") {
    return valores[0] + valores[1];
  } else if (valores[2] == "-") {
    return valores[0] - valores[1];
  } else if (valores[2] == "*") {
    return valores[0] * valores[1];
  } else {
    return parseInt(valores[0] / valores[1]);
  }
}

function generarOperaciones(valores) {
  let resultado = generarResultado(valores);
  let respuesta = parseInt(prompt(valores[0] + valores[2] + valores[1] + " = "));
  let acierto = respuesta == resultado ? true : false;
  return [valores[0] + valores[2] + valores[1] + " = " + resultado + ", acerto?" + acierto + "", acierto];

}

let preguntas = [];
let acertadas = 0;
let falladas = 0;
let continuar = true;

do {
  for (let i = 0; i < 4; i++) {
    preguntas.push(generarOperaciones(generar()));
  }
  continuar = prompt("Escriba 'si'para continuar, cualquier otra cosa para salir") == "si" ? true : false;
} while (continuar);

for (let i = 0; i < preguntas.length; i++) {
  console.log(preguntas[i][0] + "\n");
  if (preguntas[i][1] == false) {
    falladas++;
  } else {
    acertadas++;
  }
}
console.log("Fallos: " + falladas + "\n" + "Aciertos: " + acertadas);