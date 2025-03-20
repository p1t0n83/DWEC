let numerin=0;
let aleatorio=Math.floor(Math.random(1) * 100);
let acertado=false;
let intentos=0;
console.log(aleatorio);
do{
   numerin=parseInt(prompt("Ingrese un numero para probar suerte"));
   intentos++;
   if(numerin==aleatorio){
       acertado=true;
   }else if(numerin>aleatorio){
       alert("El numero ingresado es mayor, te quedan "+(3-intentos) +" intentos");
   }else {
       alert("El numero ingresado es menor, te quedan "+(3-intentos) +" intentos");
   }
}while(intentos<3 && !acertado);

if(!acertado){
    alert("No acertaste y te quedaste sin intentos");
}else{
    alert("Ganaste");
}