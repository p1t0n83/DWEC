function tablaMultiplicar(numero) {
    let tabla = "";
    for (let ini = 1; ini <= 10; ini++) {
        tabla += `${ini} * ${numero} = ${ini * numero}\n`;
    }
    alert(tabla);
}

function tablaMultiplicarEspecial(numero) {
    let ini=0;
    let ini2=0;
    do{
    ini = parseInt(prompt("Numero 1, entre 1 y 10"));
    ini2 = parseInt(prompt("Numero 2, entre 1 y 10"));
    }while(ini>10 || ini<0 || ini2>10 || ini2<0);
    if (ini > ini2) {
        let aux = ini2;
        ini2 = ini;
        ini = aux;
    }
    let tabla = "";
    for (let min = ini; min <= ini2; min++) {
        tabla += `${min} * ${numero} = ${min * numero}\n`;
    }
    alert(tabla);
}

let numero = parseInt(prompt("Numero para ver su tabla de multiplicar"));
tablaMultiplicar(numero);
tablaMultiplicarEspecial(numero);