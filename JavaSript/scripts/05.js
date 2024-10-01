(function() {
    //pedimos por teclado la altura
    let altura = parseInt(prompt("Mete la altura del rombo (debe ser un número impar)"));

    // Asegurarse de que la altura sea un número impar
    if (altura % 2 === 0) {
        console.log("La altura debe ser un número impar.");
        return;
    }

    let mitad = Math.floor(altura / 2); // Calcula la mitad entera de la altura para hacer la parte superior  e inferior
    let resultado = new Array(altura);



    // Primera parte (parte superior del rombo)
    for (let superior = 0; superior <= mitad; superior++) {
        let relleno = "";
        resultado[superior] = relleno;
        
        // Espacios antes de los asteriscos
        for (let columna = 0; columna < mitad - superior; columna++) {
            relleno += " ";
        }
        // Asteriscos del triángulo superior
        for (let columna = 0; columna < 2 * superior + 1; columna++) {
            relleno += "*";
        }
        console.log(relleno);
    }


    // Segunda parte (parte inferior del rombo)
    for (let inferior = mitad + 1; inferior < altura; inferior++) {
        let relleno = "";
        resultado[inferior] = relleno;
        
        // Espacios antes de los asteriscos
        for (let columna = 0; columna < inferior - mitad; columna++) {
            relleno += " ";
        }
        // Asteriscos del triángulo inferior
        for (let columna = 0; columna < 2 * (altura - inferior) - 1; columna++) {
            relleno += "*";
        }
        console.log(relleno);
    }
})();