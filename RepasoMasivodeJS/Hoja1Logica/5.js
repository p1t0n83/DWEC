let altura = parseInt(prompt("Introduce la altura del rombo:"));

if (altura % 2 !== 0) {
    let triangulo = [];
    let mitad = Math.floor(altura / 2);

    // Construimos la primera mitad del rombo
    for (let filas = 0; filas <= mitad; filas++) {
        let fila = '';
        for (let espacios = 0; espacios < mitad - filas; espacios++) {
            fila += ' ';
        }
        for (let asteriscos = 0; asteriscos < filas * 2 + 1; asteriscos++) {
            fila += '*';
        }
        triangulo.push(fila);
    }

    // Construimos la segunda mitad del rombo
    for (let filas = mitad - 1; filas >= 0; filas--) {
        let fila = '';
       for(let espacios=0;espacios<mitad-filas;espacios++){
        fila+=' ';
       }
       for(let asteriscos=0;asteriscos<filas * 2 + 1;asteriscos++){
        fila+='*';
       }
        triangulo.push(fila);
    }

    // Mostramos el rombo en la consola
    for (let i = 0; i < triangulo.length; i++) {
        console.log(triangulo[i]);
    }
} else {
    alert("La altura debe ser un número impar.");
}
