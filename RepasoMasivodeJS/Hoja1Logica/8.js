function factorial(numero) {
    let factorial = numero;
    let fact = numero;
    for (let n = numero - 1; n > 0; n--) {
        fact *= n;
        factorial += 'x' + n;
    }
    alert(factorial + '=' + fact);
}
let numero = parseInt(prompt("Numero para ver su factorial"));
factorial(numero);