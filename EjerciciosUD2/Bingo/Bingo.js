let $bingo = (function () {

    let cartones = ["carton1", "carton2", "carton3"];
    let datosMarcador = ["jugador1", "jugador2", "jugador3"];
    let bolasSacadas = [];
    let bolasAleatorias=[];

    function iniciarJuego() {
        generarCartones();
        indicarValorHumano();
        generarNumerosAleatorios();
        sacarSiguienteBola();
        pintarResumenBolas();
        
    }

    function sacarSiguienteBola() {
        if (bolasAleatorias.length > bolasSacadas.length) {
            bolasSacadas.push(bolasAleatorias[bolasSacadas.length]);
        }
    }

    function indicarValorHumano() {
        document.getElementById("carton3").addEventListener("click", function(event) {
            if (event.target.tagName === "INPUT") {
                let id = event.target.id; // Captura el ID del input
                let valor = parseInt(event.target.value); // Captura el valor del input y lo convierte a número
    
                console.log(id, valor);
                
                // Verificar si el valor está en bolasSacadas
                if (bolasSacadas.some(num => num === valor)) { 
                    event.target.style.backgroundColor = 'lightgreen';
                } else {
                   
                }
            }
        });
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


    function verificarCartonesNoHumanos() {

    }

    function comprobarNumeroNoHumano() {
        // Seleccionar todos los inputs dentro de los divs carton1 y carton2
        let inputsCarton1 = document.querySelectorAll("#cartones #carton1 input");
        let inputsCarton2 = document.querySelectorAll("#cartones #carton2 input");
    
        // Función para marcar el fondo del input
        function marcarNumero(valor, inputs) {
            inputs.forEach(input => {
                let id = input.id;
                let inputValue = parseInt(input.value);
                if (bolasSacadas.some(num => num === inputValue)) {
                    input.style.backgroundColor = 'lightgreen'; // Color para los números ya sacados
                } else {
                    input.style.backgroundColor = ''; // Restaurar color por defecto
                }
            });
        }
    
        // Llamar la función para ambos cartones cuando se saque una nueva bola
        function actualizarCartones() {
            marcarNumero(bolasSacadas, inputsCarton1);
            marcarNumero(bolasSacadas, inputsCarton2);
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

    function pintarMarcador() {

    }

    return { iniciarJuego };

})();


window.addEventListener("load", function () {

    $bingo.iniciarJuego();



});