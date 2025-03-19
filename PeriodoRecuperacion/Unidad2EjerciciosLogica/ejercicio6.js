
let poligono;
let longitud;
let terminar = false;
do {
    poligono = prompt("Indique el tipo de poligono:cuadrado, triangulo o rombo,'terminar' para salir");
    menu(poligono);
} while (!terminar);

alert("Saliste del programa");

function menu(poligono) {
    switch (poligono) {
        case "cuadrado": {
            longitud = parseInt(prompt("indique la longitud del cuadrado hueco"));
            cuadrado(longitud);
            terminar = false;
            break;
        };
        case "triangulo": {
            longitud = parseInt(prompt("indique la longitud del triangulo"));
            triangulo(longitud);
            terminar = false;
            break;
        };
        case "rombo": {
            longitud = parseInt(prompt("indique la longitud del rombo, tiene que ser impar"));
            if (longitud % 2 != 0) {
                rombo(longitud);
            } else {
                alert("Tiene que ser impar");
            }
            terminar = false;
            break;
        }
        case "terminar": {
            terminar = true;
            break;
        }
    }
}
function cuadrado(longitud) {
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
}

function triangulo(longitud) {
    let triangulo = "";
    for (let fila = 0; fila < longitud; fila++) {
        let linea = "";
        for (let espacios = longitud - fila; espacios > 0; espacios--) {
            linea += " ";
        }
        for (let asteriscos = 0; asteriscos < (fila * 2) + 1; asteriscos++) {
            linea += "*";
        }
        triangulo += linea + "\n";
    }
    alert(triangulo);
}

function rombo(longitud) {
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
        for (let espacios = 0; espacios < fila - longitud / 2 + 1; espacios++) {
            linea += '-';
        }
        for (let asteriscos = 2 * (longitud - fila - 1); asteriscos > 0; asteriscos--) {
            linea += "*";
        }
        rombo += linea + "\n";
    }
    alert(rombo);
}