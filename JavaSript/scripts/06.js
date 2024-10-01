'use strict'
//si no lo convertimos a número no nos lo pilla el switch
let opcion = parseInt(prompt('1.crear un cuadrado hueco \n 2.crear un triangulo \n 3.crear un rombo'));

switch(opcion){
    //cuadrado
    case 1:
        (function () {
          let num = parseInt(prompt("Introduce la altura del cuadrado: ", 0));
          let resultado = new Array(num);
          let figuraCompleta = '';  // Variable para acumular la figura completa
          for(let f = 0; f < num; ++f){
              let fila = [f];
              resultado[f] = fila; 
              for(let c = 0; c < num; c++){
                  fila[c] = (f === 0 || f === num - 1 || c === 0 || c === num - 1) ? '*' : ' ';
              }  
          }
    
          for(let i of resultado){
              let result = "";
              for(let j of i){
                  result += j;
              }
              figuraCompleta += result + "\n";  // Acumulamos cada línea
          }
          alert(figuraCompleta);  // Mostramos la figura completa en un solo alert
      }
    )();
    break;

    //triángulo
    case 2:
        (function(){
            let altura = parseInt(prompt('Pinta el triángulo\nIntroduce un número'));
            let figuraCompleta = '';  // Variable para acumular la figura completa
            for (let fila = 0; fila < altura; fila++) { 
                let String = "";
                // for para espacios en blanco
                for(let columna = 0; columna < altura - fila - 1; columna++){
                    String += " ";
                }
                // for para rellenar
                for(let columna = 0; columna < 2 * fila + 1; columna++){
                    String += "*";
                }
                figuraCompleta += String + "\n";  // Acumulamos cada línea
            }
            alert(figuraCompleta);  // Mostramos la figura completa en un solo alert
    })();
    break;

    //rombo
    case 3:
        (function() {
            //pedimos por teclado la altura
            let altura = parseInt(prompt("Mete la altura del rombo (debe ser un número impar)"));
        
            // Asegurarse de que la altura sea un número impar
            if (altura % 2 === 0) {
                console.log("La altura debe ser un número impar.");
                return;
            }
        
            let mitad = Math.floor(altura / 2); // Calcula la mitad entera de la altura para hacer la parte superior e inferior
            let resultado = new Array(altura);
            let figuraCompleta = '';  // Variable para acumular la figura completa
        
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
                figuraCompleta += relleno + "\n";  // Acumulamos cada línea
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
                figuraCompleta += relleno + "\n";  // Acumulamos cada línea
            }
            alert(figuraCompleta);  // Mostramos la figura completa en un solo alert
        })();
        
        break;
}
