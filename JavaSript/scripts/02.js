'use strict';
/**
 * Relize un programa que solicite números al usuario hasta que introduzca un 0. Y que
 *  muestre los valores: máximo,mínimo,suma,media y total de números introducidos.
 */
let maximo=0;
let minimo=100000000;
let suma=0;
let media=0;
let total=0;
let num;

do{

num = parseFloat(prompt("Introduzca un numero, si metes un 0 sales"));
if(num!=0){
suma += num;
++total;
if(num>maximo){
    maximo=num;
}
if(num<minimo){
    minimo=num;
}}

}while(num!=0);
media=parseFloat(suma/total);
    alert('La suma de todos los numeros:'+suma+'\n'+
        'La media de todos los numeros es:'+media+'\n'+
        'El total de numeros introducidos es:'+total+'\n'+
        'El numero maximo de los introducidos es:'+maximo+'\n'+
        'El numero minimo de los introducidos es:'+minimo);