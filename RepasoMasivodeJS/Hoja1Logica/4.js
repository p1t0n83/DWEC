let altura=parseInt(prompt("altura del triangulo"));

let triangulo=[];
for(let filas=0;filas<altura;filas++){
    let fila='';
    for(let espacios=altura-1;espacios>filas;espacios--){
    fila+=' ';
    }
    for(let asteriscos=0;asteriscos<filas*2+1;asteriscos++){
        fila+='*';

    }
    triangulo[filas] = fila;
}

for(let i=0;i<triangulo.length;i++){
    console.log(triangulo[i]);
}