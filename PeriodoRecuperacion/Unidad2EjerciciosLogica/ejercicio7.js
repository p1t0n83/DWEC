let numerin = parseInt(prompt("Numero para ver su tabla de multiplicar"));

function tablaMultiplicar(numerin) {
    let tabla = new Array(10);
    for (let numero = 0; numero <= 10; numero++) {
        tabla[numero] = numero + "*" + numerin + "=" + (numero * numerin);
    }
    alert(tabla);
};
tablaMultiplicar(numerin);

function tablaMultiplicarIndicados(numerin) {
    let tabla = [];
    let numero1 = parseInt(prompt("Numero 1 entre 0 y 10"));
    let numero2 = parseInt(prompt("Numero 2 entre 0 y 10"));

    if ((numero1 >= 0 && numero1 <= 10) && (numero2 >= 0 && numero2 <= 10)) {
        let inicio = Math.min(numero1, numero2);
        let fin = Math.max(numero1, numero2);

        for (let i = 0; i <= (fin - inicio); i++) {
            let numero = inicio + i;
            tabla[i] = numero + " * " + numerin + " = " + (numero * numerin);
        }

        alert(tabla.join("\n"));
    } else {
        alert("Uno de los números no cumple el requisito de tamaño");
    }
}


tablaMultiplicarIndicados(numerin);