'use strict';

function factorial(){
    let numero=1;
    while(numero>0){
     numero=parseInt(prompt("Ingrese el numero del que quiera sacar un factorial, ingrese 0 para salir"));
    if(numero>0){
    let cadenaFactorial=numero;
    let factorial=numero;
    //creamos un for en el que iremos sumando 
    for(let num=numero-1;num>0;num--){
        cadenaFactorial+='X'+num;
        factorial*=num;
    }
    cadenaFactorial+='='+factorial;
    alert(cadenaFactorial);
    }else{
        alert("si el numero es 0 menor que este no sacara el factorial");
    }
}
}
factorial();
