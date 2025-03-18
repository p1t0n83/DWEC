let longitud = parseInt(prompt("Indica el tamaño del triangulo"));
let triangulo = "";
for (let fila = 0; fila < longitud; fila++) {
    let linea = "";
    for (let espacios = longitud - fila; espacios > 0; espacios--) {
        linea += " ";
    }
    for (let asteriscos = 0; asteriscos < fila * 2 + 1; asteriscos++) {
        linea += "*";
    }
    triangulo += linea + "\n";
}
alert(triangulo);