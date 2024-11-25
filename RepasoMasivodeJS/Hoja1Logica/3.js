let lado = parseInt(prompt("introduzca la longitud del lado del cuadrado"));
let cuadrado = [];
for (let filas = 0; filas < lado; filas++) {
    let fila = '';   
    for (let columnas = 0; columnas < lado; columnas++) {
    if(filas===0 || columnas==0 || filas===lado-1 || columnas===lado-1){
       fila+='*';
    }else{
        fila+=' ';
    }
    }
    cuadrado[filas] = fila;
}

for(let i=0;i<cuadrado.length;i++){
    console.log(cuadrado[i]);
}