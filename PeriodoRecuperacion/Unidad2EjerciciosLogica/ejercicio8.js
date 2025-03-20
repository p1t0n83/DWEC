let numerin=0;

do{
    numerin = parseInt(prompt("Numero para ver su factorial, 0 o negativo para salir"));
    if(numerin>0){
    factorial(numerin);}
}while(numerin>0);
alert("Saliste del programa");

function factorial(numerin){
    let factorial="";
    let facto=1;
    for(let numero=1;numero<=numerin;numero++){
      facto*=numero;
        factorial+=numero+(numero<numerin?"X":"=");
    }
    factorial+=facto;
    alert(factorial);
}