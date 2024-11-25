'use strict';

let numero=parseInt(prompt('Introduce el numero del que quieres sacar su tabla de multiplicar'));
//creamos la tabla de multiplicar del numero con un simple for
function tablaMultiplicar(numero){
    let tabla=new Array();
    for(let i=0;i<=10;i++){
       tabla[i]= i + ' x '+ numero +'='+(numero*i)+'\n';
    }
    alert(tabla);
}

tablaMultiplicar(numero);
// lo mismo que arriba pero miramos primero que numero es mayor y cual es menor
function tablaEntre(numero){
    let inicio=parseInt(prompt('Introduce el inicio de la tabla de multiplicar'));
    let final=parseInt(prompt('Introduce el final de la tabla de multiplicar'));
    if(inicio<final){
    let tabla=new Array();
    for(let i=inicio;i<=final;i++){
       tabla[i]= i + ' x '+ numero +'='+(numero*i)+'\n';
    }
    alert(tabla);
    }else{
        let tabla=new Array();
    for(let i=final;i<=inicio;i++){
       tabla[i]= i + ' x '+ numero +'='+(numero*i)+'\n';
    }
    alert(tabla);
    }
}

tablaEntre(numero);