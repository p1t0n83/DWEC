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
    // vamos a dividir la creacion del rombo en dos for anidados, en el primero llegaremos hasta la mitad de las filas  
    for (let superior = 0; superior <= mitad; superior++) {
        let relleno = "";
        resultado[superior] = relleno;
        
        //vamos a crear un for para añadir los espacios como el triangulo
        //los espacios seran la altura Ejem.4 - la fila en la que se este -1 de esta forma empezaremos con 3 espacios,luego 2...
        for (let columna = 0; columna < mitad - superior; columna++) {
            relleno += " ";
        }
        //creamos un for para añadir los asteriscos como el triangulo
        //los asteriscos son 2 * el numero de fila en el que estemos +1,como al principio 2*fila sera 0 tenemos el mas 1 para eso y asi se ira sumando en cada fila 2 asteriscos mas 
        for (let columna = 0; columna < 2 * superior + 1; columna++) {
            relleno += "*";
        }
        //mostramos al final de cada bucle el resultado 
        console.log(relleno);
    }


    // Segunda parte (parte inferior del rombo)
    // ahora para crear la parte inferior del rombo vamos a empezar por la mitad de las filas
    for (let inferior = mitad + 1; inferior < altura; inferior++) {
        let relleno = "";
        resultado[inferior] = relleno;
        
        // Espacios antes de los asteriscos
        //ahora los espacios es al reves que antes, empezamos sin espacios y vamos aumentandolos en uno cada vez
        for (let columna = 0; columna < inferior - mitad; columna++) {
            relleno += " ";
        }
        // Asteriscos del triángulo inferior
        //Ahora para los asteriscos lo contrario a la parte de arriba, empezamos con el maximo y acabamos con el minimo
        for (let columna = 0; columna < 2 * (altura - inferior) - 1; columna++) {
            relleno += "*";
        }
        console.log(relleno);
    }

    



})();