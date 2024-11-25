let aleatorio=Math.floor(Math.random()*100-1);
let numero=0;
let intentos=5;
do{
numero=parseInt(prompt("Te quedan "+ intentos+" intentos"));
intentos--;
if(numero>aleatorio){
    alert("Te has pasado manin");
}else if(numero<aleatorio){
    alert("Te has quedado corto maquina");
}else if(numero===aleatorio){
    alert("Has acertado cabron y te sobran "+intentos+" intentos");
    break;
}
}while(intentos>0);
if(intentos===0){
    alert("Te has quedado sin intentos pringao");
}