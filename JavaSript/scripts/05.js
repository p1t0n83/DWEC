(function() {
    let diametro = parseInt(prompt("Escriba la dimensión del rombo"));

    // Validar el tamaño del rombo
    if (diametro < 1) {
        console.log("La dimensión debe ser un número mayor o igual a 1.");
        return; // Salir si el número es inválido
    }

    function dibujarRombo(diametro) {
        // Inicializar un array para almacenar las líneas del rombo
        let rombo = [];
        const altura = (diametro % 2 === 0) ? diametro / 2 : (diametro + 1) / 2; // Calcular la altura del rombo

        // Construir la parte superior del rombo
        for (let i = 1; i <= altura; i++) {
            let espacios = ' '.repeat(altura - i); // Calcular los espacios para centrar
            let asteriscos = '*'.repeat(2 * i - 1); // Asteriscos para formar la línea
            rombo.push(espacios + asteriscos); // Agregar la línea al array
        }

        // Construir la parte inferior del rombo
        for (let i = altura - 1; i >= 1; i--) {
            let espacios = ' '.repeat(altura - i); // Calcular los espacios para centrar
            let asteriscos = '*'.repeat(2 * i - 1); // Asteriscos para formar la línea
            rombo.push(espacios + asteriscos); // Agregar la línea al array
        }

        return rombo; // Devolver el array con las líneas del rombo
    }

    let resultado = dibujarRombo(diametro); // Llamar a la función
    console.log("Rombo de dimensión " + diametro + ":");
    console.log(resultado.join('\n')); // Imprimir el rombo
})();
