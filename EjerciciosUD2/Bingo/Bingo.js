let $bingo = (function () {

    let cartones = ["carton1", "carton2", "carton3"];
    let datosMarcador = ["jugador1", "jugador2", "jugador3"];
    let bolasSacadas = [];


    function iniciarJuego() {
        generarCartones();
    }

    function sacarSiguienteBola() {

    }

    function indicarValorHumano() {

    }

    function cantarLineaHumano() {

    }

    function cantarBingoHumano() {

    }

    function saberGanado() {

    }

    //privados
    function generarCartones() {
        cartones[0] = pintarCarton();
        cartones[1] = pintarCarton();
        cartones[2] = pintarCarton();
        //carton1
        let contenido = ``;
        for (let i = 0; i < cartones[0].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                contenido += '<div id="columna">' + cartones[0][i][j] + '</div>';
            }
            contenido += "</div>";
        }
        let contenedor = document.getElementById('carton1');
        contenedor.innerHTML = contenido;
        //carton 2
        contenido = ``;
        for (let i = 0; i < cartones[1].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                contenido += '<div id="columna">' + cartones[1][i][j] + '</div>';
            }
            contenido += "</div>";
        }
        contenedor = document.getElementById('carton2');
        contenedor.innerHTML = contenido;
        //carton 3
        contenido = ``;
        for (let i = 0; i < cartones[2].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                contenido += '<div id="columna">' + cartones[2][i][j] + '</div>';
            }
            contenido += "</div>";
        }
        contenedor = document.getElementById('carton3');
        contenedor.innerHTML = contenido;
    }

    function verificarCartonesNoHumanos() {

    }

    function comprobarNumeroNoHumano() {

    }

    function generarNumeroRango(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function artualizarMarcadores() {

    }

    //apoyo
    function pintarCarton() {
        let carton = [];
        //aqui metemos los numeros que se usen para evitar repetidos
        let numerosUsados = new Set();
        //minimo y maximo de cada ronda
        let min = 0;
        let max = 0;
        //variable donde se almacena el numero que sea
        let numero = 0;
        //for para rellenar el carton
        for (let i = 1; i <= 9; i++) {
            //el valor maximo, por X, ejemplo i*10(4*10) 40
            max = i * 10;
            //el valor minimo, por X,ejemplo 40(el maximo de antes)-9 31
            min = max - 9;
            //inicializamos la fila
            carton[(i > 0 ? (i - 1) : 0)] = [];
            for (let j = 0; j <= 3; j++) {
                //usamos la funcion auxiliar de generar numero
                numero = generarNumeroRango(min, max);
                //miramos que no se encuentre dentro del set
                if (!numerosUsados.has(numero)) {
                    console.log(numero);
                    carton[(i > 0 ? (i - 1) : 0)][j] = numero;
                    numerosUsados.add(numero);
                }
            }
        }
        return carton;
    }

    function pintarResumenBolas() {

    }

    function pintarMarcador() {

    }

    return { iniciarJuego };

})();


window.addEventListener("load", function () {

    $bingo.iniciarJuego();



});