//creamos una funcion que va a devolver otra funcion que creemos dentro
function calcularDevolucion(importe) {
    //esta funcion recibe el importe y genera un desglose tirando siempre a los valores mas altos (si son 100 euros siempre dara un billete de 100 en vez de dos de 50)
    function cambio(importe) {
        //la forma de sacarlo es diviendo por el valor y quedandonos el resto de dicha operacion para generar lo demas
        let resto = 0;
        //billetes de 100, 50, 10 y 5
        //monedas de 2 y 1 euro
        //sacamos los billetes de 100
        let billetes100 = 0;
        if (importe / 100 >= 1) {
            billetes100 = parseInt(importe / 100);
            resto = importe % 100;
        } else {
            resto = importe;
        }

        //ahora los de 50
        let billetes50 = 0;
        if (resto / 50 >= 1) {
            billetes50 = parseInt(resto / 50);
            resto = resto % 50;
        }
        //ahora de 10
        let billetes10 = 0;
        if (resto / 10 >= 1) {
            billetes10 = parseInt(resto / 10);
            resto = resto % 10;
        }

        //ahora de 5
        let billetes5 = 0;
        if (resto / 5 >= 1) {
            billetes5 = parseInt(resto / 5);
            resto = resto % 5;
        }
        //ahora de monedas de 2
        let monedas2 = 0;
        if (resto / 2 >= 1) {
            monedas2 = parseInt(resto / 2);
            resto = resto % 2;
        }

        //ahora moneda de 1
        let monedas1 = resto / 1;

        //para que se muestre claramente cada cifra desglosamos la cantidad de billetes
        let desglose = [];
        for (let i = 0; i < billetes100; i++) {
            desglose.push(100);
        }
        for (let i = 0; i < billetes50; i++) {
            desglose.push(50);
        }
        for (let i = 0; i < billetes10; i++) {
            desglose.push(10);
        }
        for (let i = 0; i < billetes5; i++) {
            desglose.push(5);
        }
        for (let i = 0; i < monedas2; i++) {
            desglose.push(2);
        }
        for(let i=0;i<monedas1;i++){
            desglose.push(1);
           }

        return  desglose; 
     }
    //devolvemos la funcion
    return cambio(importe);

}

let cantidad = parseInt(prompt("Cuantas veces quiere probar a calcular la devolucion?"));
let precioProducto = parseInt(prompt("Cual es el precio del producto caballero?"));
let contador = 0;
console.log("Devoluciones");
//con un do while hacemos los calculos las veces que haya dicho el usuario
do {
    //el precio se genera de forma aleatorio entre el precio dicho por el cliente y 1000, si el precio del cliente es superior a 1000 se queda en 1
    let precioAleatorio = Math.floor(Math.random() * 1000) + precioProducto;
    console.log(`Prueba ${contador + 1} de ${cantidad}`);
    console.log(`Importe entregado : ${precioAleatorio}`);
    console.log(calcularDevolucion(precioAleatorio));
    contador++;
} while (contador < cantidad);

