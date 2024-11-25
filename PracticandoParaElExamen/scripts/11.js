'use strict';

function multiplosYPrimos(inicio,fin){
for(let i=inicio;i<fin;i++){
    if(i%5===0){
        console.log('El numero  '+i+' es multiplo de 5');
    }
    if(i%3===0){
        console.log('El numero '+i+' es multiplo de 3');
    }
    if(primo(i)===true){
        console.log('El numero '+i+' es primo');
    }
}
}

//una funcion que me diga si el numero que le paso es primo
function primo(numero){
    if (numero <= 1) return false;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let inicio;
let fin;
do{
inicio=parseInt(prompt('Introduce el inicio del rango,no puede ser mayor que el fin'));
fin=parseInt(prompt("Introduce el fin del rango, no puede ser menor que el inicio"));
}while(inicio>fin);

multiplosYPrimos(inicio,fin);