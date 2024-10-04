'use strict';

function generarNumerosOperador(){
let numero1=Math.random()*10+1;
let numero2=Math.random()*10+1;
let operadores="+-*/%";
let operador=operadores[parseInt(Math.random()*5+0)];
return [numero1,numero2,operador];
}

function preguntas(numero1,numero2,operador){
total;
let resultado=new Array();
    do{
    resultado[total]+='Pregunta:'+numero1+' '+operador+' '+numero2;
    let respuesta=parseInt(prompt('Respuesta'));
    resultado[total]+='. Respuesta:'+respuesta;
    resultado[total]+='Correcto: '+ respuesta===calculoPregunta(numero1,numero2,operador)?' correcto ':' falso ';
    }while(total<3);
}

function calculoPregunta(numero1,numero2,operador){
    if(operador=='+'){
     return (numero1+numero2);
    }else if(operador=='-'){
     return (numero1-numero2);
    }else if(operador=='*'){
     return (numero1*numero2);
    }else if(operador=='/'){
     return (numero1/numero2);
    }else{
     return (numero1%numero2);
    }

    
}
