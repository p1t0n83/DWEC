(function(){
    let altura = parseInt(prompt('Introduce un número')); // Pedir el número de filas

    // Verificar que el número sea mayor que 0
    if (altura > 0) {
        let mitad = Math.floor(altura / 2); // Encontrar la mitad del rombo

        // Parte superior del rombo
        for (let filas = 0; filas <= mitad; filas++) {
            let fila = '';
            // Espacios en blanco
            for (let e = 0; e < mitad - filas; e++) {
                fila += ' ';
            }
            // Asteriscos
            for (let a = 0; a < 2 * filas + 1; a++) {
                fila += '*';
            }
            console.log(fila);
        }

        // Parte inferior del rombo
        for (let filas = mitad - 1; filas >= 0; filas--) {
            let fila = '';
            // Espacios en blanco
            for (let e = 0; e < mitad - filas; e++) {
                fila += ' ';
            }
            // Asteriscos
            for (let a = 0; a < 2 * filas + 1; a++) {
                fila += '*';
            }
            console.log(fila);
        }
    } else {
        console.log('Por favor, introduce un número mayor que 0');
    }
})();

