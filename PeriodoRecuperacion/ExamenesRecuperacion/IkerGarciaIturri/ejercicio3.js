//funcion que crea un reloj de arena
function crearReloj(altura = 2, relleno = "X") {
    let reloj =new Array(altura*2);
    //parte de arriba del reloj
    for (let fila = 0; fila < altura; fila++) {
        //tenemos que guardar la columna
        let columna = 0;
        let linea=[];
        //espacios de la parte de arriba
        for (let espacio = 0; espacio < fila; espacio++) {
            linea[columna]=' ';
            columna++
        }
        //caracteres de la parte de arriba
        for (let caracter = 0; caracter < (altura * 2) - (fila * 2) - 1; caracter++) {
            linea[columna]=relleno;
            columna++;
        }
        reloj[fila]=linea; 
    }

    //parte de abajo del reloj
    for (let fila = 0; fila < altura; fila++) {
        //tenemos que guardar las columnas otra vez
        let columna=0;
        let linea=[];
        //espacios para la parte de abajo
        for (let espacios = altura - fila - 1; espacios > 0; espacios--) {
            linea[columna]=' ';
            columna++
        }
        //caracteres para la parte de abajo
        for (let caracter = 0; caracter < (fila * 2) + 1; caracter++) {
            linea[columna]=relleno;
            columna++;
        }
        reloj[fila+4]=linea; 
    }
    return reloj;
}
console.log(crearReloj());