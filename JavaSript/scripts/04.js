'use strict';

(function(){
    let altura = parseInt(prompt('introduce un número'));
    let resultado=new Array(altura);
    for(let f=0;f<altura;f++){
        let fila=[f];
        resultado[f]=fila;
        // for espacios en blanco
        for(let e=0;e<altura-f-1;e++){
           fila+=' ';
        }
        // for para asteriscos
        for(let a=0;a<2*f+1;a++){
           fila+='*';
        }
        console.log(fila);
    }  
})();