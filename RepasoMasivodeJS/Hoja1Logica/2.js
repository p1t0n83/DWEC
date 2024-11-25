let numero=0;
let maximo=Number.MIN_SAFE_INTEGER;
let minimo=Number.MAX_SAFE_INTEGER;
let suma=0;
let media=0;
let total=0;

do{
numero=(parseInt(prompt("Introduce un numero, 0 para salir")));
if(numero!==0){
    suma+=numero;
    total++;
    if(numero>maximo){
        maximo=numero;
    }
    if(numero<minimo){
        minimo=numero;
    }
}
}while(numero!==0);
media=(suma/total).toFixed(2);
alert(`La suma de todos los numeros es ${suma}\n
    El maximo es ${maximo}\n
    El minimo es ${minimo}\n
    La media es ${media}\n
    El total de numeros ${total}`)

