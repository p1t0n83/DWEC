let $bingo = (function () {

    let cartones = ["carton1", "carton2", "carton3"];
    const datosMarcador = [
        { jugador: "jugador1", lineas: 0, bingos: 0 },
        { jugador: "jugador2", lineas: 0, bingos: 0 },
        { jugador: "jugador3", lineas: 0, bingos: 0 }
    ];

    let bolasSacadas = [];
    let bolasAleatorias = [];

    function iniciarJuego() {
        generarCartones();
        indicarValorHumano();
        generarNumerosAleatorios();
        sacarSiguienteBola();
        pintarResumenBolas();
        marcarAsteriscos();
        pintarMarcador();
        cantarLineaHumano();
        cantarBingoHumano();
    }

    function sacarSiguienteBola() {
        if (bolasAleatorias.length > bolasSacadas.length) {
            bolasSacadas.push(bolasAleatorias[bolasSacadas.length]);
            comprobarNumeroNoHumano();
            verificarCartonesNoHumanos()
            saberGanado();
        }
    }

    function indicarValorHumano() {
        document.getElementById("carton3").addEventListener("click", function (event) {
            if (event.target.tagName === "INPUT") {
                let id = event.target.id; // Captura el ID del input
                let valor = parseInt(event.target.value); // Captura el valor del input y lo convierte a número

                console.log(id, valor);

                // Verificar si el valor está en bolasSacadas
                if (bolasSacadas.some(num => num === valor)) {
                    event.target.style.backgroundColor = 'lightblue';
                } else {

                }
            }
        });
    }


    const lineasSi = [0, 0, 0]; // Estado persistente
    function cantarLineaHumano() {
        document.getElementById("linea").addEventListener("click", function (event) {
            const carton = document.getElementById("carton3"); // Obtener el elemento del cartón
            // Iterar sobre cada fila y verificar si hay una línea completa
            for (let i = 0; i < 3; i++) {
                let filaCompletada = true;
                for (let f = 0; f < 8; f++) {
                    const inputId = `carton3-fila${f}-col${i}`; // Crear el id del input basado en i y f
                    const inputElement = document.getElementById(inputId); // Obtener el input por su id
                    if (inputElement && inputElement.style.backgroundColor !== "lightblue") {
                        filaCompletada = false;
                        break;
                    }
                }
                if (filaCompletada && lineasSi[i] == 0) {
                    lineasSi[i]++;
                    datosMarcador[2]["lineas"]++;
                }
            }
            // Actualizar el marcador solo si se han completado líneas
            if (lineasSi.some(l => l > 0)) {  // Verifica si alguna fila fue completada
                actualizarMarcadores();
            }
        });
    }

    function cantarBingoHumano() {
        document.getElementById("bingo").addEventListener("click", function (event) {
            let bingo = true;
            // Iterar sobre cada fila del cartón
            for (let i = 0; i < 3; i++) {
                // Verificar las columnas de la fila actual
                for (let f = 0; f < 8; f++) {
                    const inputId = `carton3-fila${f}-col${i}`; // Crear el id del input basado en i y f
                    const inputElement = document.getElementById(inputId); // Obtener el input por su id

                    // Si algún input no cumple la condición, la fila no está completa
                    if (!inputElement || inputElement.style.backgroundColor !== "lightblue") {
                        bingo = false;
                        break;
                    }
                }
            }
            // Actualizar el marcador si se ha completado alguna línea
            if (bingo) {
                actualizarMarcadores();
                alert("Bingo del jugador 3")
            }
        });
    }

    function saberGanado() {
        const cartones = ['carton1', 'carton2', 'carton3'];

        for (const carton of cartones) {
            // Obtiene todos los inputs del cartón actual
            const inputs = document.querySelectorAll(`#${carton} input`);

            // Comprueba si todos los inputs del cartón tienen el fondo "lightblue"
            const esGanador = Array.from(inputs).every(input => input.style.backgroundColor === "lightblue");
            if (esGanador) {
                return true; // Hay un ganador, se detiene el juego
            }
        }
        return false; // No hay ganador aún
    }


    //privados
    function generarCartones() {
        cartones[0] = pintarCarton();
        cartones[1] = pintarCarton();
        cartones[2] = pintarCarton();
        cartones[0] = pintarAsteriscos(cartones[0]);
        cartones[1] = pintarAsteriscos(cartones[1]);
        cartones[2] = pintarAsteriscos(cartones[2]);

        // carton1
        let contenido = ``;
        for (let i = 0; i < cartones[0].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                const id = `carton1-fila${i}-col${j}`;
                const name = `carton1`;
                const value = cartones[0][i][j];
                contenido += `
                    <div id="columna">
                        <input type="button" id="${id}" name="${name}" value="${value}">
                    </div>`;
            }
            contenido += "</div>";
        }
        let contenedor = document.getElementById('carton1');
        contenedor.innerHTML = contenido;

        // carton2
        contenido = ``;
        for (let i = 0; i < cartones[1].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                const id = `carton2-fila${i}-col${j}`;
                const name = `carton2`;
                const value = cartones[1][i][j];
                contenido += `
                    <div id="columna">
                        <input type="button" id="${id}" name="${name}" value="${value}">
                    </div>`;
            }
            contenido += "</div>";
        }
        contenedor = document.getElementById('carton2');
        contenedor.innerHTML = contenido;

        // carton3
        contenido = ``;
        for (let i = 0; i < cartones[2].length; i++) {
            contenido += '<div id="fila">';
            for (let j = 0; j < 3; j++) {
                const id = `carton3-fila${i}-col${j}`;
                const name = `carton3`;
                const value = cartones[2][i][j];
                contenido += `
                    <div id="columna">
                        <input type="button" id="${id}" name="${name}" value="${value}">
                    </div>`;
            }
            contenido += "</div>";
        }
        contenedor = document.getElementById('carton3');
        contenedor.innerHTML = contenido;
    }



    const lineasSi1 = [0, 0, 0]; // Estado persistente para carton1
    const lineasSi2 = [0, 0, 0]; // Estado persistente para carton2
    function verificarLineasNoHumano() {
        // Define los cartones a verificar
        const cartones = ["carton1", "carton2"];

        cartones.forEach(cartonId => {
            const marcadorIndex = cartonId === "carton1" ? 0 : 1;

            // Iterar sobre cada fila del cartón
            for (let i = 0; i < 3; i++) {
                let filaCompletada = true;

                // Verificar las columnas de la fila actual
                for (let f = 0; f < 8; f++) {
                    const inputId = `${cartonId}-fila${f}-col${i}`; // Crear el id del input basado en i y f
                    const inputElement = document.getElementById(inputId); // Obtener el input por su id

                    // Si algún input no cumple la condición, la fila no está completa
                    if (!inputElement || inputElement.style.backgroundColor !== "lightblue") {
                        filaCompletada = false;
                        break;
                    }
                }
                if (cartonId == "carton1") {
                    if (filaCompletada && lineasSi1[i] === 0) {
                        lineasSi1[i]++;
                        datosMarcador[marcadorIndex]["lineas"]++;
                    }
                } else if (cartonId == "carton2") {
                    if (filaCompletada && lineasSi2[i] === 0) {
                        lineasSi2[i]++;
                        datosMarcador[marcadorIndex]["lineas"]++;
                    }
                }
            }
            if (cartonId == "carton1") {
                // Actualizar el marcador si se ha completado alguna línea
                if (lineasSi1.some(linea => linea > 0)) {
                    actualizarMarcadores();
                }
            } else if (cartonId == "carton2") {
                if (lineasSi2.some(linea => linea > 0)) {
                    actualizarMarcadores();
                }
            }
        });
    }



    function verificarBingosNoHumanos() {
        const cartones = ["carton1", "carton2"];
        cartones.forEach(cartonId => {
            const marcadorIndex = cartonId === "carton1" ? 0 : 1;
            let bingo = true;
            // Iterar sobre cada fila del cartón
            for (let i = 0; i < 3; i++) {
                // Verificar las columnas de la fila actual
                for (let f = 0; f < 8; f++) {
                    const inputId = `${cartonId}-fila${f}-col${i}`; // Crear el id del input basado en i y f
                    const inputElement = document.getElementById(inputId); // Obtener el input por su id

                    // Si algún input no cumple la condición, la fila no está completa
                    if (!inputElement || inputElement.style.backgroundColor !== "lightblue") {
                        bingo = false;
                        break;
                    }
                }
            }
            if (cartonId == "carton1") {
                // Actualizar el marcador si se ha completado alguna línea
                if (bingo) {
                    alert("Bingo del jugador 1");
                    actualizarMarcadores();
                }
            } else if (cartonId == "carton2") {
                if (bingo) {
                    alert("Bingo del jugador 2");
                    actualizarMarcadores();
                }
            }
        });
    }


    function verificarCartonesNoHumanos() {
        verificarLineasNoHumano();
        verificarBingosNoHumanos();
    }


    function comprobarNumeroNoHumano() {
        const ultimoNumero = bolasSacadas[bolasSacadas.length - 1]; // Obtener el último número sacado
        if (!ultimoNumero) return; // Salir si no hay número

        const cartonesNoHumanos = ["carton1", "carton2"];

        cartonesNoHumanos.forEach(cartonId => {
            const carton = document.getElementById(cartonId); // Obtener el elemento del cartón
            const inputs = carton.getElementsByTagName("input"); // Obtener todos los inputs del cartón

            // Recorrer los inputs y verificar si el valor coincide
            for (let input of inputs) {
                if (parseInt(input.value) === ultimoNumero) {
                    input.style.backgroundColor = "lightblue"; // Cambiar el color de fondo
                }
            }
        });
    }

    function generarNumeroRango(min, max) {
        return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    }


    function generarNumerosAleatorios() {
        const numeros = new Set(); // Usamos un Set para evitar duplicados
        while (numeros.size < 90) {
            const numero = Math.floor(Math.random() * 90) + 1; // Genera números entre 1 y 99
            numeros.add(numero); // Agrega el número al Set
        }
        bolasAleatorias = Array.from(numeros); // Convertimos el Set en un array
    }


    function actualizarMarcadores() {
        // Llama directamente a pintarMarcador porque sabemos que hay cambios
        pintarMarcador();
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
            for (let j = 0; j <= 2; j++) {
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
    //quiero poner un contador, que cuento el numero de asteriscos totales y otro que cuenta por fila para no poner mas de 2, a su vez como son 12 en total,solo pueden haber 3 filas con doble asterisco
    function pintarAsteriscos(carton) {
        //for para recorrer el carton
        let asteriscos = 0;
        let asteriscosFila = Array(9).fill(0);
        for (let i = 1; i <= 9; i++) {
            for (let j = 0; j <= 2; j++) {
                if (carton[(i > 0 ? (i - 1) : 0)][j] === undefined) {
                    carton[(i > 0 ? (i - 1) : 0)][j] = '*';
                    asteriscosFila[(i > 0 ? (i - 1) : 0)]++;
                    asteriscos++;
                }
            }
        }//nos aseguramos de que haya al menos un asterisco por fila
        for (let i = 0; i < 9; i++) {
            let columnaAleatoria = generarNumeroRango(0, 2);
            if (carton[i][columnaAleatoria] !== '*') {
                carton[i][columnaAleatoria] = '*';
                asteriscosFila[i]++;
                asteriscos++;
            }
        }

        while (asteriscos < 12) {
            let filaAleatoria = generarNumeroRango(0, 8);
            let columnaAleatoria = generarNumeroRango(0, 2);

            // Verificar que la fila tenga menos de 2 asteriscos y que no haya ya un asterisco en la posición
            if (asteriscosFila[filaAleatoria] < 2 && carton[filaAleatoria][columnaAleatoria] !== '*') {
                carton[filaAleatoria][columnaAleatoria] = '*';
                asteriscosFila[filaAleatoria]++;
                asteriscos++;
            }
        }
        return carton;
    }


    function pintarResumenBolas() {

        let contenido = "";
        let contenedor = document.getElementById('bolas');
        let index = 0;
        let tiempoIntervalo = parseInt(document.getElementById('segundos').value) * 1000; // Convertir segundos a milisegundos

        function mostrarBola() {
            if (index < 90) {
                sacarSiguienteBola();
                contenido += bolasSacadas[index] + (index < 90 ? "," : ""); // Evita una coma al final.
                contenedor.innerHTML = contenido; // Actualiza el contenido
                index++;
                setTimeout(mostrarBola, tiempoIntervalo); // Utiliza el intervalo del botón en milisegundos
            }
        }

        mostrarBola(); // Llamada inicial para comenzar la animación
    }

    function marcarAsteriscos() {
        const ultimoNumero = bolasSacadas[bolasSacadas.length - 1]; // Obtener el último número sacado
        if (!ultimoNumero) return; // Salir si no hay número

        const cartones = ["carton1", "carton2", "carton3"];

        cartones.forEach(cartonId => {
            const carton = document.getElementById(cartonId); // Obtener el elemento del cartón
            const inputs = carton.getElementsByTagName("input"); // Obtener todos los inputs del cartón

            // Recorrer los inputs y verificar si el valor coincide
            for (let input of inputs) {
                if (input.value == "*") {
                    input.style.backgroundColor = "lightblue"; // Cambiar el color de fondo
                }
            }
        });
    }


    function pintarMarcador() {
        let contenido = "";
        let contenedor = document.getElementById('marcador');
        for (let jugador of datosMarcador) {
            contenido += jugador["jugador"] + ":" + " Lineas:" + jugador["lineas"] + " Bingos:" + jugador["bingos"] + "<br>"; // Evita una coma al final.
        }
        contenedor.innerHTML = contenido;
    }

    return { iniciarJuego };

})();


window.addEventListener("load", function () {
    $bingo.iniciarJuego();
});