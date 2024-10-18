'use strict';
let maximo=Number.MIN_SAFE_INTEGER;
let minimo=Number.MAX_SAFE_INTEGER;
let media=0;
let suma=0;
let total=0;
let numero=0;
do{
    numero=parseInt(prompt("Introduce un numero, 0 para salir"));
    if(numero!=0){
    if(numero>maximo){
        maximo=numero;
    }
    if(numero<minimo){
        minimo =numero;
    }
    total++;
    suma+=numero;}
}while(numero!=0);

media=suma/total;
alert(`Maximo: ${maximo}, Minimo: ${minimo}, Suma: ${suma}, Media: ${media}, Total: ${total}`)
