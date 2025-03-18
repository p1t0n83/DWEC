let longitud = 0;
do {
    longitud = parseInt(prompt("Indica el tamaño del triangulo,tiene que ser inpar"));
} while (longitud % 2 == 0);
let rombo = "";
for (let fila = 0; fila < longitud / 2; fila++) {
    let linea = "";
    for (let espacios = longitud / 2 - fila - 1; espacios > 0; espacios--) {
        linea += "-";
    }
    for (let asteriscos = 0; asteriscos < fila * 2 + 1; asteriscos++) {
        linea += "*";
    }
    rombo += linea + "\n";
}
for (let fila = longitud / 2; fila < longitud - 1; fila++) {
    let linea = "";
    for (let espacios = 0; espacios < fila - 3; espacios++) {
        linea += '-';
    }
    for (let asteriscos = 2*(longitud-fila-1); asteriscos > 0; asteriscos--) {
        linea += "*";
    }
    rombo += linea + "\n";
}
alert(rombo);