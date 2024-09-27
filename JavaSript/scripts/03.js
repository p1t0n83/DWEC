'use strict';
/**
 * Crea una funcion que reciba un numero y que dibuje un restangulo hueco al lado del tamaño del 
 * número indicado. El valor devulto será un array con cada una de las cadenas que forman el rectángulo
 */

(function () {
    let num = parseInt(prompt("Introduce un numero: ", 0));
    let filas=new Array(num);
    for(let i=0;i<num;++i){
        filas[i]=new Array;
       for(let j=0;j<num;j++){
        if(i==0 || j==0 || i==num-1 || j==num-1 )
            filas[i][j]="*";
        else
        filas[i][j]=" ";
    }  
    }
    console.log(filas);  
}
)();

