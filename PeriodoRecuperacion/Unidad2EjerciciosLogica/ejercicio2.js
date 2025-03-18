let introducido = 0;
let maximo = Number.MIN_SAFE_INTEGER;
let minimo = Number.MAX_SAFE_INTEGER
let suma = 0;
let total = 0;
let media = 0;
do {
    introducido = parseFloat(prompt("Introduzca un numero, 0 para salir"));
    if (introducido != 0) {
        total++;
        suma += introducido;
        minimo = minimo > introducido ? introducido : minimo;
        maximo = maximo < introducido ? introducido : maximo;
    }
} while (introducido != 0);
media = suma / total;

alert(`La suma de todos los numeros es:${suma}, el total de numeros introducidos: ${total}, el numero mas bajo: ${minimo} y el mas alto: ${maximo}, la media de todos los numeros es ${media}`);
