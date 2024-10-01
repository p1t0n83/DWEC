'use strict';

(function(){
        let altura = parseInt(prompt('Pinta el triángulo\nIntroduce un número'));
        for (let fila = 0; fila < altura; fila++) { 
            let String ="";
            //for para espacios en blanco
            //los espacios seran la altura Ejem.4 - la fila en la que se este -1 de esta forma empezaremos con 3 espacios,luego 2...
            for(let columna =0 ;columna<altura -fila-1;columna++){ //
                String +=" ";
            }
            //for para rellenar
            //los asteriscos son 2 * el numero de fila en el que estemos +1,como al principio 2*fila sera 0 tenemos el mas 1 para eso y asi se ira sumando en cada fila 2 asteriscos mas 
            for(let columna = 0; columna < 2*fila+1; columna++){
                String += altura;
            }
            console.log(String);   
        }
       
})();