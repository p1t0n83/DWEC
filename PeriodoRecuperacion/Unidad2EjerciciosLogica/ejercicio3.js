let longitud = parseInt(prompt("De que tamaño quieres el cuadrado"));

let cuadrado = "";
for (let i = 0; i < longitud; i++) {
    let linea = "";
    for (let f = 0; f < longitud; f++)
        if (f == 0 || i == 0 || f == longitud - 1 || i == longitud - 1) {
            linea += '*';
        } else {
            linea += ' ';
        }
    cuadrado += linea + '\n';
}
alert(cuadrado);
