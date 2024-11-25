let cantidad = parseInt(prompt("Escriba el tamaño del fibonacci"))
function fibonacci(cantidad) {
    let fibonacci = [0, 1];
    let actual = 1;
    let anterior = 0;
    for (let tamanio = 0; tamanio < cantidad; tamanio++) {
        let aux = anterior;
        anterior = actual;
        actual += aux;
        fibonacci.push(actual);
    }
    let fibo = "";
    for (let i = 0; i < fibonacci.length; i++) {
        fibo += fibonacci[i] + ",";
    }
    alert(fibo);
}
fibonacci(cantidad);