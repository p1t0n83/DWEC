function cuadrado(){
    let lado = parseInt(prompt("introduzca la longitud del lado del cuadrado"));
    let cuadrado ='';
    for (let filas = 0; filas < lado; filas++) {
        let fila = '';   
        for (let columnas = 0; columnas < lado; columnas++) {
        if(filas===0 || columnas==0 || filas===lado-1 || columnas===lado-1){
           fila+='*';
        }else{
            fila+=' ';
        }
        }
        cuadrado+= fila+'\n';
    }   
    alert(cuadrado);
}
function triangulo(){
    let altura=parseInt(prompt("altura del triangulo"));
    let triangulo='';
    for(let filas=0;filas<altura;filas++){
        let fila='';
        for(let espacios=altura-1;espacios>filas;espacios--){
        fila+=' ';
        }
        for(let asteriscos=0;asteriscos<filas*2+1;asteriscos++){
            fila+='*';
    
        }
        triangulo+=fila+'\n';
    }
    alert(triangulo);
}

function rombo(){
    let altura = parseInt(prompt("Introduce la altura del rombo:"));

    if (altura % 2 !== 0) {
        let rombo='';
        let mitad = Math.floor(altura / 2);
    
        // Construimos la primera mitad del rombo
        for (let filas = 0; filas <= mitad; filas++) {
            let fila = '';
            for (let espacios = 0; espacios < mitad - filas; espacios++) {
                fila += ' ';
            }
            for (let asteriscos = 0; asteriscos < filas * 2 + 1; asteriscos++) {
                fila += '*';
            }
            rombo+=fila+'\n';
        }
    
        // Construimos la segunda mitad del rombo
        for (let filas = mitad - 1; filas >= 0; filas--) {
            let fila = '';
           for(let espacios=0;espacios<mitad-filas;espacios++){
            fila+=' ';
           }
           for(let asteriscos=0;asteriscos<filas * 2 + 1;asteriscos++){
            fila+='*';
           }
            rombo+=fila+'\n';
        }
       alert(rombo);
    } else {
        alert("La altura debe ser un número impar.");
    }    
}

let opcion=0;
do{
opcion=parseInt(prompt("Elige 1. Para cuadrado hueco, Elige 2. Para triangulo, Elige 3. Para rombo, Elige 0. Para salir."));
switch(opcion){
    case 1:cuadrado();break;
    case 2:triangulo();break;
    case 3:rombo();break;
}
}while(opcion!==0);
alert("Saliste del menu.");